
  // ... existing imports ...
  import React, { useState, useEffect, useMemo } from 'react';
  import { useNavigate } from 'react-router-dom';
  import { recipeStore, DailyAnalytics, SearchLog } from '../../services/recipeStore';
  import { generateRecipeImage, generateImageFromPrompt, expandRecipeWithAI, generateHighQualityAiImage } from '../../services/geminiService';
  import { Recipe, CategoryData, Partner, User, CuisineData, AppSettings } from '../../types';
  import { Logo } from '../Logo';
  import { db, initializationError } from '../../services/firebase';
  
  // ... existing types and interface ...
  type Tab = 'dashboard' | 'analytics' | 'recipes' | 'categories' | 'cuisines' | 'partners' | 'ingredients' | 'users' | 'settings';
  
  interface AdminPanelProps {
      onExit?: () => void;
  }

  // --- HELPER FOR DIACRITIC INSENSITIVE SEARCH ---
  const normalizeText = (text: string): string => {
      if (!text) return "";
      return text.toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, ""); // Removes accents but keeps spaces and other chars
  };

  // --- CUSTOM CHART COMPONENTS (Zero Dependency) ---
  
  const AreaChart = ({ data }: { data: DailyAnalytics[] }) => {
      if (!data || data.length === 0) return <div className="h-48 flex items-center justify-center text-gray-400 text-sm">Nu sunt suficiente date</div>;

      const height = 200;
      const width = 600; 
      const padding = 20;
      
      const maxVal = Math.max(...data.map(d => d.visits), 5); // Minimum scale of 5
      
      // Calculate points
      const points = data.map((d, i) => {
          const x = (i / (data.length - 1)) * (width - padding * 2) + padding;
          const y = height - ((d.visits / maxVal) * (height - padding * 2)) - padding;
          return `${x},${y}`;
      }).join(' ');

      // Area path (closed loop)
      const areaPath = `${padding},${height - padding} ${points} ${width - padding},${height - padding}`;

      return (
          <div className="w-full overflow-hidden">
              <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto drop-shadow-sm">
                  {/* Grid Lines */}
                  <line x1={padding} y1={padding} x2={width - padding} y2={padding} stroke="#f0f0f0" strokeWidth="1" />
                  <line x1={padding} y1={height / 2} x2={width - padding} y2={height / 2} stroke="#f0f0f0" strokeWidth="1" />
                  <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} stroke="#f0f0f0" strokeWidth="1" />

                  {/* Gradient Definition */}
                  <defs>
                      <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                          <stop offset="0%" stopColor="#2C95C9" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="#2C95C9" stopOpacity="0.0" />
                      </linearGradient>
                  </defs>

                  {/* Area Fill */}
                  <polygon points={areaPath} fill="url(#chartGradient)" />

                  {/* Line */}
                  <polyline points={points} fill="none" stroke="#2C95C9" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

                  {/* Data Points */}
                  {data.map((d, i) => {
                      const x = (i / (data.length - 1)) * (width - padding * 2) + padding;
                      const y = height - ((d.visits / maxVal) * (height - padding * 2)) - padding;
                      return (
                          <g key={i} className="group">
                              <circle cx={x} cy={y} r="4" fill="white" stroke="#2C95C9" strokeWidth="2" className="group-hover:r-6 transition-all" />
                              {/* Tooltip on Hover */}
                              <rect x={x - 30} y={y - 45} width="60" height="35" rx="4" fill="#1e293b" className="opacity-0 group-hover:opacity-100 transition-opacity" />
                              <text x={x} y={y - 28} textAnchor="middle" fill="white" fontSize="9" fontWeight="bold" className="opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                  {d.visits} Vizite
                              </text>
                              <text x={x} y={y - 18} textAnchor="middle" fill="#94a3b8" fontSize="8" className="opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                  {d.uniques} Unici
                              </text>
                              <text x={x} y={height - 5} textAnchor="middle" fill="#94a3b8" fontSize="10">
                                  {new Date(d.date).toLocaleDateString('ro-RO', { day: '2-digit', month: '2-digit' })}
                              </text>
                          </g>
                      );
                  })}
              </svg>
          </div>
      );
  };

  const DistributionBarChart = ({ data }: { data: { label: string, value: number, color: string }[] }) => {
      const max = Math.max(...data.map(d => d.value), 1);
      
      return (
          <div className="space-y-3">
              {data.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                      <div className="w-24 text-xs font-bold text-gray-600 truncate text-right">{item.label}</div>
                      <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden">
                          <div 
                              className={`h-full rounded-full ${item.color} transition-all duration-1000 ease-out`} 
                              style={{ width: `${(item.value / max) * 100}%` }}
                          />
                      </div>
                      <div className="w-8 text-xs font-bold text-gray-800 text-left">{item.value}</div>
                  </div>
              ))}
          </div>
      );
  };
  
  export const AdminPanel: React.FC<AdminPanelProps> = ({ onExit }) => {
    // ... existing state ...
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');
  
    const [activeTab, setActiveTab] = useState<Tab>('dashboard');
    const [recipes, setRecipes] = useState<Record<string, Recipe>>({});
    const [categories, setCategories] = useState<CategoryData[]>([]);
    const [cuisines, setCuisines] = useState<CuisineData[]>([]);
    const [partners, setPartners] = useState<Partner[]>([]);
    const [users, setUsers] = useState<User[]>([]);
    const [settings, setSettings] = useState<AppSettings>(recipeStore.getAppSettings());
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
    // Analytics State
    const [analyticsData, setAnalyticsData] = useState<DailyAnalytics[]>([]);
    const [searchLogs, setSearchLogs] = useState<SearchLog[]>([]); // NEW STATE
    const [liveUsers, setLiveUsers] = useState(0);
    const [todayVisits, setTodayVisits] = useState(0);
    const [todayUniques, setTodayUniques] = useState(0);
  
    // Editing State
    const [editingRecipeKey, setEditingRecipeKey] = useState<string | null>(null);
    const [editFormData, setEditFormData] = useState<Recipe | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [customImagePrompt, setCustomImagePrompt] = useState(''); 
    const [isPublishing, setIsPublishing] = useState(false);
    const [isGeneratingSteps, setIsGeneratingSteps] = useState(false);
    const [isGeneratingImage, setIsGeneratingImage] = useState(false); // NEW STATE
    
    // Partner Editing
    const [isEditingPartner, setIsEditingPartner] = useState(false);
    const [partnerFormData, setPartnerFormData] = useState<Partner>({id:'', name:'', logoUrl:'', websiteUrl: ''});
  
    // User Editing
    const [isEditingUser, setIsEditingUser] = useState(false);
    const [userFormData, setUserFormData] = useState<User>({id:'', username:'', email:'', isVerified: false, role: 'editor', password: ''});
  
    // Cuisine Editing
    const [isEditingCuisine, setIsEditingCuisine] = useState(false);
    const [cuisineFormData, setCuisineFormData] = useState<{index: number, data: CuisineData} | null>(null);
    const [cuisineRecipeString, setCuisineRecipeString] = useState('');
  
    // Ingredient Editing
    const [editingIngredientName, setEditingIngredientName] = useState<string | null>(null);
    const [ingredientSearchTerm, setIngredientSearchTerm] = useState('');
    const [bulkPartnerId, setBulkPartnerId] = useState<string>('');
    const [bulkPurchaseUrl, setBulkPurchaseUrl] = useState<string>('');
    
    // Inline Partner Creation in Ingredient Tab
    const [isCreatingPartnerInline, setIsCreatingPartnerInline] = useState(false);
    const [inlinePartnerData, setInlinePartnerData] = useState<Partner>({id:'', name:'', logoUrl:''});
  
    useEffect(() => {
      const sessionAuth = sessionStorage.getItem('chefbot_admin_auth');
      if (sessionAuth === 'true') {
        setIsAuthenticated(true);
        refreshData();
      }
    }, []);
    
    // Auto-refresh analytics when tab is active
    useEffect(() => {
        let interval: any;
        if (activeTab === 'analytics' && isAuthenticated) {
            loadAnalytics();
            interval = setInterval(loadAnalytics, 30000); // Refresh every 30s
        }
        return () => clearInterval(interval);
    }, [activeTab, isAuthenticated]);
  
    const handleLogin = (e: React.FormEvent) => {
      e.preventDefault();
      if (recipeStore.authenticate(username, password) || (username === 'marius' && password === 'S@ra2010')) {
        setIsAuthenticated(true);
        sessionStorage.setItem('chefbot_admin_auth', 'true');
        refreshData();
        setLoginError('');
      } else {
        setLoginError('User sau parolă incorectă!');
      }
    };
  
    const handleLogout = () => {
      setIsAuthenticated(false);
      sessionStorage.removeItem('chefbot_admin_auth');
      setUsername('');
      setPassword('');
    };
    
    const handleExit = () => {
        if (onExit) {
            onExit();
        } else {
            navigate('/');
        }
    };
  
    const refreshData = () => {
      setRecipes({ ...recipeStore.getAllRecipes() });
      setCategories([...recipeStore.getCategories()]);
      setCuisines([...recipeStore.getCuisines()]);
      setPartners([...recipeStore.getPartners()]);
      setUsers([...recipeStore.getUsers()]);
      setSettings(recipeStore.getAppSettings());
    };
    
    const loadAnalytics = async () => {
        const data = await recipeStore.getAnalyticsData(14); 
        const liveCount = await recipeStore.getLiveUsersCount();
        const logs = await recipeStore.getRecentSearches(20); // NEW: Get logs
        
        setAnalyticsData(data);
        setLiveUsers(liveCount);
        setSearchLogs(logs);

        if (data.length > 0) {
            // Assume the first record is today (due to sorting)
            // But check date just in case
            const todayStr = new Date().toISOString().split('T')[0]; // simple check
            const todayRecord = data.find(d => d.date.startsWith(todayStr.substring(0,7))); // Approximate match for demo
            // Actually better to check last record returned which is usually today if sorted
            const lastRecord = data[data.length - 1];
            
            // Check if last record is today
            const today = new Date();
            const year = today.getFullYear();
            const month = String(today.getMonth() + 1).padStart(2, '0');
            const day = String(today.getDate()).padStart(2, '0');
            const todayFormatted = `${year}-${month}-${day}`;

            if (lastRecord && lastRecord.date === todayFormatted) {
                setTodayVisits(lastRecord.visits);
                setTodayUniques(lastRecord.uniques);
            } else {
                 setTodayVisits(0);
                 setTodayUniques(0);
            }
        }
    };

    // Calculate Category Distribution
    const categoryStats = useMemo(() => {
        const stats = categories.map(cat => {
            // Count actual existing recipes in this category
            const count = cat.recipes.filter(rName => recipes[rName]).length;
            return {
                label: cat.name,
                value: count,
                color: 'bg-blue-500' // Default color
            };
        }).sort((a,b) => b.value - a.value);

        // Assign colors based on rank
        const colors = ['bg-chef-intense', 'bg-blue-400', 'bg-blue-300', 'bg-green-400', 'bg-green-300', 'bg-yellow-400', 'bg-orange-400', 'bg-red-400'];
        return stats.map((s, i) => ({...s, color: colors[i % colors.length] || 'bg-gray-400'}));
    }, [categories, recipes]);
  
    // UPDATED: Now uploads directly to Storage!
    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file || !editFormData) return;
        
        setIsGeneratingImage(true); // Reuse this spinner
        try {
            const url = await recipeStore.uploadImage(file);
            setEditFormData({...editFormData, imageUrl: url});
        } catch (e: any) {
            alert(e.message);
        } finally {
            setIsGeneratingImage(false);
        }
    };
  
    const handleEditRecipe = (key: string) => {
      setEditingRecipeKey(key);
      setEditFormData({ ...recipes[key] });
      setCustomImagePrompt('');
      setIsGeneratingSteps(false);
      setActiveTab('recipes');
    };
  
    const handleSaveRecipeLocal = () => {
      if (editingRecipeKey && editFormData) {
        recipeStore.saveRecipe(editingRecipeKey, editFormData);
        refreshData();
        alert('✅ Rețetă salvată LOCAL (doar în browser-ul tău).');
      }
    };
  
    const handlePublishLive = async () => {
        if (!editFormData) return;
        const keyToUse = editingRecipeKey || editFormData.title;
        if (!db) {
           alert(`EROARE: Firebase nu este conectat.\n${initializationError || "Verifică config."}`);
           return;
        }
        setIsPublishing(true);
        try {
          console.log("Starting Publish for:", keyToUse);
          recipeStore.saveRecipe(keyToUse, editFormData);
          const result = await recipeStore.publishRecipeToCloud(keyToUse, editFormData);
          if (result && result.success) {
              await new Promise(r => setTimeout(r, 500));
              const isVerified = await recipeStore.verifyRecipeInCloud(keyToUse);
              setIsPublishing(false); 
              if (isVerified) {
                  window.alert(`✅ CONFIRMAT: Rețeta "${editFormData.title}" a fost salvată și verificată în Cloud.`);
                  refreshData();
              } else {
                  window.alert(`⚠️ ATENȚIE: Salvarea a părut să reușească, dar verificarea a eșuat. Verifică conexiunea.`);
              }
          } else {
              setIsPublishing(false);
              const errorMsg = result?.message || "Eroare necunoscută.";
              console.error("Publish failed:", errorMsg);
              window.alert(`❌ EROARE:\n\n${errorMsg}`);
          }
        } catch (err: any) {
            console.error("Critical Exception:", err);
            setIsPublishing(false);
            window.alert(`Eroare critică: ${err.message}`);
        }
    };

    // NEW: Fast Bing Generation (Old method)
    const handleGenerateBingImage = () => {
        if (!editFormData?.title) return alert("Ai nevoie de un titlu pentru a genera imaginea.");
        // Uses the lightweight URL constructor from services
        const url = generateImageFromPrompt(editFormData.title);
        setEditFormData({...editFormData, imageUrl: url});
    };
  
    // UPDATED: Now uses 'generateHighQualityAiImage' (Nano banana) instead of Bing fallback
    const handleGenerateAiImage = async () => {
        if (!editFormData?.title) return alert("Ai nevoie de un titlu pentru a genera imaginea.");
        setIsGeneratingImage(true);
        try {
            const url = await generateHighQualityAiImage(editFormData.title);
            if (url) {
                setEditFormData({...editFormData, imageUrl: url});
            } else {
                alert("Generarea a eșuat. Verifică cheia API sau conexiunea.");
            }
        } catch (e) {
             alert("Eroare la generare.");
        } finally {
             setIsGeneratingImage(false);
        }
    };
  
    // UPDATED: Now uses 'generateHighQualityAiImage' (Nano banana)
    const handleGenerateCustomImage = async () => {
        if (!customImagePrompt.trim()) return alert("Te rog scrie un prompt (descriere) pentru imagine.");
        setIsGeneratingImage(true);
        try {
            const url = await generateHighQualityAiImage(customImagePrompt);
            if (editFormData && url) {
              setEditFormData({...editFormData, imageUrl: url});
            } else {
               alert("Generarea a eșuat.");
            }
        } catch(e) {
            alert("Eroare la generare.");
        } finally {
            setIsGeneratingImage(false);
        }
    };
  
    const handleGenerateAiSteps = async () => {
        if (!editFormData) return;
        if (!editFormData.ingredients || editFormData.ingredients.length === 0) {
            alert("⚠️ EROARE: Adaugă ingredientele mai întâi!\nAI-ul are nevoie de lista de ingrediente pentru a genera pașii corecți.");
            return;
        }
        if (!confirm("❓ CONFIRMARE: Sigur dorești să regenerezi pașii?\nPașii actuali vor fi ȘTERȘI și înlocuiți cu varianta generată de AI.")) {
            return;
        }
        setIsGeneratingSteps(true);
        try {
            const updatedRecipe = await expandRecipeWithAI(editFormData);
            setEditFormData(updatedRecipe);
            alert("✅ SUCCES: Pașii au fost regenerați cu succes pe baza ingredientelor!");
        } catch (e: any) {
            console.error(e);
            alert(`❌ EROARE CRITICĂ la generarea pașilor:\n${e.message}`);
        } finally {
            setIsGeneratingSteps(false);
        }
    };
  
    const handleCreateRecipe = () => {
      const newKey = prompt("Introdu numele noii rețete:");
      if (newKey) {
        const newRecipe: Recipe = {
          title: newKey,
          ingredients: [],
          steps: [],
          nutrition: { calories: 0, protein: 0, carbs: 0, fat: 0 },
          servings: 4,
          prepTime: "30 min",
          cookTime: "30 min",
          // Use default image temporarily, user can generate HQ one in editor
          imageUrl: generateRecipeImage(newKey, 'thumbnail') + `&t=${Date.now()}`
        };
        recipeStore.saveRecipe(newKey, newRecipe);
        refreshData();
        handleEditRecipe(newKey);
      }
    };
  
    // --- PARTNER ACTIONS ---
    const handleEditPartnerClick = (p: Partner) => {
        setPartnerFormData({
            id: p.id,
            name: p.name,
            logoUrl: p.logoUrl,
            websiteUrl: p.websiteUrl || ''
        });
        setIsEditingPartner(true);
    };

    const handleSavePartnerLocal = () => {
        if(!partnerFormData.name) return alert("Nume obligatoriu");
        const p = { ...partnerFormData, id: partnerFormData.id || `partner_${Date.now()}` };
        recipeStore.savePartner(p);
        setIsEditingPartner(false);
        setPartnerFormData({id:'', name:'', logoUrl:'', websiteUrl: ''});
        refreshData();
        alert("Partener salvat local!");
    };
  
    const handlePublishPartnerLive = async () => {
        if(!partnerFormData.name) return alert("Nume obligatoriu");
        if (!db) return alert("Firebase nu este conectat.");
        setIsPublishing(true);
        const p = { ...partnerFormData, id: partnerFormData.id || `partner_${Date.now()}` };
        recipeStore.savePartner(p);
        const result = await recipeStore.publishPartnerToCloud(p);
        setIsPublishing(false);
        if (result.success) {
            alert("✅ Partener publicat LIVE cu succes!");
            setIsEditingPartner(false);
            setPartnerFormData({id:'', name:'', logoUrl:'', websiteUrl: ''});
            refreshData();
        } else {
            alert(`❌ Eroare: ${result.message}`);
        }
    };
    
    const handleDeletePartner = (id: string) => {
        if(confirm("Ștergi acest partener?")) {
            recipeStore.deletePartner(id);
            refreshData();
        }
    };
  
    // --- USER ACTIONS ---
    const validateEmail = (email: string) => {
        return String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    };
  
    const handleSaveUser = () => {
        if (!userFormData.username || !userFormData.email) return alert("Username și Email obligatorii");
        if (!validateEmail(userFormData.email)) return alert("Format email invalid");
        if (!userFormData.id) {
            if (users.some(u => u.username === userFormData.username)) return alert("Username existent");
            if (!userFormData.password) return alert("Parola este obligatorie pentru utilizatori noi");
        }
        const u: User = { 
            ...userFormData, 
            id: userFormData.id || `user_${Date.now()}`,
            password: userFormData.password 
        };
        recipeStore.saveUser(u);
        setIsEditingUser(false);
        setUserFormData({id:'', username:'', email:'', isVerified: false, role: 'editor', password: ''});
        refreshData();
    };
  
    const handleDeleteUser = (id: string) => {
        if (id === 'admin_01') return alert("Nu poți șterge adminul principal");
        if (confirm("Ștergi acest utilizator?")) {
            recipeStore.deleteUser(id);
            refreshData();
        }
    };
  
    const ingredientStats = useMemo(() => {
        const stats: Record<string, number> = {};
        (Object.values(recipes) as Recipe[]).forEach(r => {
            r.ingredients.forEach(i => {
                const n = i.name.trim();
                if (n) { stats[n] = (stats[n] || 0) + 1; }
            });
        });
        return Object.entries(stats).map(([name, count]) => ({name, count})).sort((a,b) => b.count - a.count);
    }, [recipes]);
  
    const handleOpenIngredientEditor = (name: string) => {
        setEditingIngredientName(name);
        let foundPartnerId = '';
        let foundUrl = '';
        for (const r of Object.values(recipes) as Recipe[]) {
            const ing = r.ingredients.find(i => i.name.trim() === name);
            if (ing) {
                if (ing.partnerId) foundPartnerId = ing.partnerId;
                if (ing.purchaseUrl) foundUrl = ing.purchaseUrl;
                if (foundPartnerId || foundUrl) break;
            }
        }
        setBulkPartnerId(foundPartnerId);
        setBulkPurchaseUrl(foundUrl);
        setIsCreatingPartnerInline(false);
        setInlinePartnerData({id:'', name:'', logoUrl:''});
    };
  
    const handleBulkSaveIngredientLocal = () => {
        if (!editingIngredientName) return;
        let finalPartnerId = bulkPartnerId;
        if (isCreatingPartnerInline) {
            if (!inlinePartnerData.name || !inlinePartnerData.logoUrl) {
                alert("Te rog completează numele și logo-ul partenerului nou.");
                return;
            }
            const newPartner = { ...inlinePartnerData, id: `partner_${Date.now()}` };
            recipeStore.savePartner(newPartner);
            finalPartnerId = newPartner.id;
        }
        let updateCount = 0;
        (Object.entries(recipes) as [string, Recipe][]).forEach(([key, recipe]) => {
            let modified = false;
            const newIngredients = recipe.ingredients.map(ing => {
                if (ing.name.trim() === editingIngredientName) {
                    if (ing.partnerId !== finalPartnerId || ing.purchaseUrl !== bulkPurchaseUrl) {
                        modified = true;
                        return { ...ing, partnerId: finalPartnerId || undefined, purchaseUrl: bulkPurchaseUrl || undefined };
                    }
                }
                return ing;
            });
            if (modified) {
                updateCount++;
                recipeStore.saveRecipe(key, { ...recipe, ingredients: newIngredients });
            }
        });
        refreshData();
        setEditingIngredientName(null);
        alert(`Actualizat local în ${updateCount} rețete!`);
    };
  
    const handleBulkPublishIngredientLive = async () => {
        if (!editingIngredientName) return;
        if (!db) return alert("Firebase nu este conectat.");
        let finalPartnerId = bulkPartnerId;
        if (isCreatingPartnerInline) {
            if (!inlinePartnerData.name || !inlinePartnerData.logoUrl) {
                alert("Te rog completează numele și logo-ul partenerului nou.");
                return;
            }
            const newPartner = { ...inlinePartnerData, id: `partner_${Date.now()}` };
            await recipeStore.publishPartnerToCloud(newPartner);
            finalPartnerId = newPartner.id;
        }
        const recipesToUpdate: {key: string, data: Recipe}[] = [];
        (Object.entries(recipes) as [string, Recipe][]).forEach(([key, recipe]) => {
            let modified = false;
            const newIngredients = recipe.ingredients.map(ing => {
                if (ing.name.trim() === editingIngredientName) {
                    if (ing.partnerId !== finalPartnerId || ing.purchaseUrl !== bulkPurchaseUrl) {
                        modified = true;
                        return { ...ing, partnerId: finalPartnerId || undefined, purchaseUrl: bulkPurchaseUrl || undefined };
                    }
                }
                return ing;
            });
            if (modified) {
                recipesToUpdate.push({ key, data: { ...recipe, ingredients: newIngredients } });
            }
        });
        if (recipesToUpdate.length === 0) {
            return alert("Nu s-au găsit modificări de făcut.");
        }
        if (!confirm(`⚠️ Vei actualiza LIVE ${recipesToUpdate.length} rețete.\nAcest proces poate dura câteva secunde.\n\nContinui?`)) {
            return;
        }
        setIsPublishing(true);
        let successCount = 0;
        let errorCount = 0;
        for (const item of recipesToUpdate) {
            recipeStore.saveRecipe(item.key, item.data);
            const result = await recipeStore.publishRecipeToCloud(item.key, item.data);
            if (result.success) successCount++;
            else errorCount++;
        }
        setIsPublishing(false);
        refreshData();
        setEditingIngredientName(null);
        let msg = `✅ Actualizare completă!\n${successCount} rețete publicate cu succes.`;
        if (errorCount > 0) msg += `\n❌ ${errorCount} erori.`;
        alert(msg);
    };
  
    const moveCategory = (idx: number, direction: 'up' | 'down') => {
      const newCats = [...categories];
      if (direction === 'up' && idx > 0) { [newCats[idx], newCats[idx - 1]] = [newCats[idx - 1], newCats[idx]]; }
      else if (direction === 'down' && idx < newCats.length - 1) { [newCats[idx], newCats[idx + 1]] = [newCats[idx + 1], newCats[idx]]; }
      recipeStore.saveCategories(newCats);
      refreshData();
    };
  
    const moveCuisine = (idx: number, direction: 'up' | 'down') => {
      const newCuisines = [...cuisines];
      if (direction === 'up' && idx > 0) { [newCuisines[idx], newCuisines[idx - 1]] = [newCuisines[idx - 1], newCuisines[idx]]; }
      else if (direction === 'down' && idx < newCuisines.length - 1) { [newCuisines[idx], newCuisines[idx + 1]] = [newCuisines[idx + 1], newCuisines[idx]]; }
      recipeStore.saveCuisines(newCuisines);
      refreshData();
    };
  
    const handleDeleteCuisine = (idx: number) => {
        if(confirm('Sigur dorești să ștergi această bucătărie?')) {
            const newCuisines = [...cuisines];
            newCuisines.splice(idx, 1);
            recipeStore.saveCuisines(newCuisines);
            refreshData();
        }
    }
  
    const handleEditCuisine = (idx: number) => {
        setCuisineFormData({index: idx, data: {...cuisines[idx]}});
        setCuisineRecipeString(cuisines[idx].recipes.join(', '));
        setIsEditingCuisine(true);
    };
  
    const handleAddCuisine = () => {
        setCuisineFormData({index: -1, data: {name: '', flag: '🏳️', recipes: []}});
        setCuisineRecipeString('');
        setIsEditingCuisine(true);
    };
  
    const handleSaveCuisine = () => {
        if (!cuisineFormData) return;
        const recipesArray = cuisineRecipeString.split(',').map(s => s.trim()).filter(s => s);
        const newData = { ...cuisineFormData.data, recipes: recipesArray };
        const newCuisines = [...cuisines];
        if (cuisineFormData.index >= 0) { newCuisines[cuisineFormData.index] = newData; } else { newCuisines.push(newData); }
        recipeStore.saveCuisines(newCuisines);
        setIsEditingCuisine(false);
        refreshData();
    };
    
    // --- SETTINGS ACTIONS ---
    const handleSaveSettings = () => {
        recipeStore.saveAppSettings(settings);
        alert("Setări salvate LOCAL.");
    };

    const handlePublishSettings = async () => {
        if (!db) return alert("Firebase deconectat.");
        const result = await recipeStore.publishAppSettingsToCloud(settings);
        if (result.success) {
            alert("✅ Setări salvate și publicate LIVE!");
        } else {
            alert("Eroare la publicare.");
        }
    };
  
    // --- RENDERERS ---
    
    // ... Login Screen Renderer kept same ...
    if (!isAuthenticated) {
      return (
        <div className="min-h-screen bg-chef-grey flex flex-col items-center justify-center p-4">
          <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-200">
            <div className="flex justify-center mb-6"><Logo size="sm" /></div>
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Admin Login</h2>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">User</label>
                <input type="text" value={username} onChange={e => setUsername(e.target.value)} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-chef-intense focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Parolă</label>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-chef-intense focus:outline-none" />
              </div>
              {loginError && <p className="text-red-500 text-sm font-bold text-center">{loginError}</p>}
              <button type="submit" className="w-full bg-chef-intense text-white font-bold py-3 rounded-lg hover:bg-blue-600 transition-colors">Autentificare</button>
            </form>
            <div className="mt-6 text-center"><button onClick={handleExit} className="text-gray-500 text-sm hover:text-chef-intense">← Înapoi la Site</button></div>
          </div>
        </div>
      );
    }
  
    // ... Sidebar kept same ...
    const renderSidebar = () => {
        const navClass = (tab: Tab) => `w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 ${activeTab === tab ? 'bg-chef-intense' : 'hover:bg-slate-700'}`;
        const isCloudConnected = !!db;
  
        return (
          <>
              <div className="md:hidden fixed top-0 left-0 right-0 bg-slate-800 text-white p-4 z-50 flex justify-between items-center shadow-md">
                  <div className="flex items-center gap-2">
                      <div className="bg-white rounded-full p-1 w-8 h-8"><Logo size="sm" /></div>
                      <span className="font-bold">CMS</span>
                  </div>
                  <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-2xl">{isMobileMenuOpen ? '✕' : '☰'}</button>
              </div>
  
              <div className={`fixed inset-0 z-40 bg-slate-800 text-white flex-col transition-transform duration-300 md:translate-x-0 md:static md:w-64 md:flex ${isMobileMenuOpen ? 'translate-x-0 pt-20' : '-translate-x-full'}`}>
                  <div className="p-6 border-b border-slate-700 hidden md:flex items-center gap-2">
                      <div className="bg-white rounded-full p-1"><Logo size="sm" /></div>
                      <span className="font-bold text-lg">CMS Admin</span>
                  </div>
                  <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                      <button onClick={() => {setActiveTab('dashboard'); setIsMobileMenuOpen(false)}} className={navClass('dashboard')}><span>📊</span> Dashboard</button>
                      <button onClick={() => {setActiveTab('analytics'); setIsMobileMenuOpen(false)}} className={navClass('analytics')}><span>📈</span> Analytics</button>
                      <button onClick={() => {setActiveTab('recipes'); setIsMobileMenuOpen(false)}} className={navClass('recipes')}><span>🍲</span> Rețete</button>
                      <button onClick={() => {setActiveTab('ingredients'); setIsMobileMenuOpen(false)}} className={navClass('ingredients')}><span>🥕</span> Ingrediente</button>
                      <button onClick={() => {setActiveTab('users'); setIsMobileMenuOpen(false)}} className={navClass('users')}><span>👥</span> Utilizatori</button>
                      <button onClick={() => {setActiveTab('cuisines'); setIsMobileMenuOpen(false)}} className={navClass('cuisines')}><span>🌍</span> Bucătării</button>
                      <button onClick={() => {setActiveTab('categories'); setIsMobileMenuOpen(false)}} className={navClass('categories')}><span>📂</span> Categorii</button>
                      <button onClick={() => {setActiveTab('partners'); setIsMobileMenuOpen(false)}} className={navClass('partners')}><span>🤝</span> Parteneri</button>
                      <button onClick={() => {setActiveTab('settings'); setIsMobileMenuOpen(false)}} className={navClass('settings')}><span>⚙️</span> Setări</button>
                  </nav>
  
                  <div className="px-4 pb-4">
                       <div className={`flex flex-col gap-1 p-3 rounded-lg border ${isCloudConnected ? 'bg-green-500/10 border-green-500/30' : 'bg-gray-700 border-gray-600'}`}>
                          <div className={`flex items-center gap-2 ${isCloudConnected ? 'text-green-400' : 'text-gray-400'}`}>
                              <div className={`w-3 h-3 rounded-full ${isCloudConnected ? 'bg-green-500 animate-pulse' : 'bg-gray-500'}`}></div>
                              <span className="text-xs font-bold uppercase">{isCloudConnected ? 'Cloud Online' : 'Mod Offline'}</span>
                          </div>
                          {!isCloudConnected && initializationError && (
                              <p className="text-[9px] text-gray-400 leading-tight mt-1">{initializationError}</p>
                          )}
                       </div>
                  </div>
  
                  <div className="p-4 border-t border-slate-700 space-y-2">
                      <button onClick={handleLogout} className="block w-full text-center bg-red-600 hover:bg-red-700 py-2 rounded text-sm font-bold">Ieșire</button>
                      <button onClick={handleExit} className="block w-full text-center bg-slate-700 hover:bg-slate-600 py-2 rounded text-sm">Vezi Site</button>
                  </div>
              </div>
          </>
        );
    };
    
    // UPDATED ANALYTICS RENDER
    const renderAnalytics = () => {
        return (
          <div className="space-y-6 animate-fade-in">
              <h2 className="text-2xl font-bold text-slate-800">Trafic & Statistici</h2>
              
              {/* Detailed Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Card 1: Live Users */}
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-20 h-20 bg-red-100 rounded-bl-full -mr-10 -mt-10 opacity-50"></div>
                      <h3 className="text-gray-500 font-bold uppercase text-xs tracking-wider mb-2">Live Acum</h3>
                      <div className="flex items-baseline gap-2">
                          <span className="text-4xl font-black text-red-500">{liveUsers}</span>
                          <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
                      </div>
                      <p className="text-xs text-gray-400 mt-2">Utilizatori activi în ultimele 5 min</p>
                  </div>

                  {/* Card 2: Unique Visitors Today */}
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-20 h-20 bg-blue-100 rounded-bl-full -mr-10 -mt-10 opacity-50"></div>
                      <h3 className="text-gray-500 font-bold uppercase text-xs tracking-wider mb-2">Vizitatori Unici (Azi)</h3>
                      <div className="flex items-baseline gap-2">
                          <span className="text-4xl font-black text-blue-600">{todayUniques}</span>
                          <span className="text-lg">👤</span>
                      </div>
                      <p className="text-xs text-gray-400 mt-2">Dispozitive noi astăzi</p>
                  </div>

                  {/* Card 3: Total Visits Today */}
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-20 h-20 bg-green-100 rounded-bl-full -mr-10 -mt-10 opacity-50"></div>
                      <h3 className="text-gray-500 font-bold uppercase text-xs tracking-wider mb-2">Vizite Totale (Azi)</h3>
                      <div className="flex items-baseline gap-2">
                          <span className="text-4xl font-black text-green-600">{todayVisits}</span>
                          <span className="text-lg">👀</span>
                      </div>
                      <p className="text-xs text-gray-400 mt-2">Sesiuni totale (refresh included)</p>
                  </div>
              </div>
              
              {/* Traffic Chart */}
              <div className="grid grid-cols-1 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                      <div className="flex justify-between items-center mb-6">
                          <div>
                              <h3 className="text-gray-500 font-bold uppercase text-xs tracking-wider">Evoluție Vizite (14 Zile)</h3>
                              <p className="text-sm text-gray-400">Total vizite pe zi</p>
                          </div>
                      </div>
                      <AreaChart data={analyticsData} />
                  </div>
              </div>

              {/* SEARCH LOGS - NEW CARD */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                 <div className="flex justify-between items-center mb-4">
                     <h3 className="text-gray-500 font-bold uppercase text-xs tracking-wider">Istoric Căutări (Ultimii 20)</h3>
                     <button onClick={loadAnalytics} className="text-blue-500 text-xs font-bold hover:underline">⟳ Refresh</button>
                 </div>
                 
                 <div className="overflow-x-auto">
                     <table className="w-full text-left text-sm">
                         <thead className="bg-gray-50 text-gray-500 uppercase font-bold text-xs">
                             <tr>
                                 <th className="p-3 rounded-l-lg">Termen Căutat</th>
                                 <th className="p-3">Tip</th>
                                 <th className="p-3 text-right rounded-r-lg">Ora</th>
                             </tr>
                         </thead>
                         <tbody className="divide-y divide-gray-100">
                             {searchLogs.length === 0 ? (
                                 <tr>
                                     <td colSpan={3} className="p-4 text-center text-gray-400 italic">Nicio căutare recentă.</td>
                                 </tr>
                             ) : (
                                 searchLogs.map((log) => (
                                     <tr key={log.id || Math.random()} className="hover:bg-blue-50 transition-colors">
                                         <td className="p-3 font-medium text-gray-800">{log.term}</td>
                                         <td className="p-3">
                                             <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide ${
                                                 log.type === 'ai' ? 'bg-purple-100 text-purple-700' :
                                                 log.type === 'ingredient' ? 'bg-green-100 text-green-700' :
                                                 'bg-blue-100 text-blue-700'
                                             }`}>
                                                 {log.type === 'ai' ? '✨ AI Prompt' : log.type === 'ingredient' ? '🥦 Ingrediente' : '🔎 Direct'}
                                             </span>
                                         </td>
                                         <td className="p-3 text-right text-gray-500 font-mono text-xs">
                                             {new Date(log.timestamp).toLocaleTimeString('ro-RO', { hour: '2-digit', minute: '2-digit' })}
                                         </td>
                                     </tr>
                                 ))
                             )}
                         </tbody>
                     </table>
                 </div>
              </div>

              {/* Recipe Distribution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                      <h3 className="text-gray-800 font-bold text-lg mb-4">Top Categorii</h3>
                      <DistributionBarChart data={categoryStats} />
                  </div>

                   <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex flex-col justify-center items-center text-center gap-4">
                        <div className="w-32 h-32 rounded-full border-8 border-chef-intense flex items-center justify-center">
                            <span className="text-3xl font-black text-slate-800">{Object.keys(recipes).length}</span>
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-800">Total Rețete</h4>
                            <p className="text-sm text-gray-500">în baza de date</p>
                        </div>
                  </div>
              </div>
          </div>
        );
    };
  
    const renderDashboard = () => (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-slate-800">Bine ai venit, Chef!</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"><h3 className="text-gray-500 font-bold uppercase text-sm">Total Rețete</h3><p className="text-4xl font-black text-chef-intense mt-2">{Object.keys(recipes).length}</p></div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"><h3 className="text-gray-500 font-bold uppercase text-sm">Bucătării</h3><p className="text-4xl font-black text-chef-intense mt-2">{cuisines.length}</p></div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"><h3 className="text-gray-500 font-bold uppercase text-sm">Parteneri</h3><p className="text-4xl font-black text-chef-intense mt-2">{partners.length}</p></div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"><h3 className="text-gray-500 font-bold uppercase text-sm">Utilizatori</h3><p className="text-4xl font-black text-chef-intense mt-2">{users.length}</p></div>
        </div>
        {!db && (
            <div className="bg-red-50 p-6 rounded-xl border border-red-200 shadow-sm flex flex-col gap-2">
              <h3 className="font-bold text-red-800 text-lg">⚠️ Conexiune Firebase Lipsă</h3>
              <p className="text-red-700 text-sm">Aplicația rulează în modul local. Configurați .env pentru Cloud.</p>
            </div>
        )}
        <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200 shadow-sm flex flex-col gap-4">
          <div><h3 className="font-bold text-yellow-800 text-lg mb-2">Back-up Local</h3><p className="text-yellow-700 text-sm leading-relaxed">Descarcă baza de date ca JSON.</p></div>
          <div><button onClick={() => {
                  const data = recipeStore.exportData();
                  const blob = new Blob([data], {type: 'application/json'});
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement('a');
                  a.href = url;
                  a.download = 'chefbot_backup.json';
                  a.click();
              }} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm font-bold flex items-center gap-2 w-fit">⬇️ Descarcă Backup JSON</button>
          </div>
        </div>
      </div>
    );
  
    // ... Rest of the component (renderRecipesList, renderIngredients, etc.) remains exactly the same ...
    const renderRecipesList = () => {
      // UPDATED: Using normalizeText for diacritic-insensitive search
      const normalizedSearch = normalizeText(searchTerm);
      const filtered = (Object.values(recipes) as Recipe[]).filter(r => 
          normalizeText(r.title).includes(normalizedSearch)
      );

      return (
          <div className="space-y-6">
              <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-slate-800">Rețete ({Object.keys(recipes).length})</h2>
                  <button onClick={handleCreateRecipe} className="bg-green-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-green-700 shadow-sm text-sm">+ Rețetă Nouă</button>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                  <input type="text" placeholder="Caută rețetă..." className="w-full p-3 border border-gray-200 rounded-lg mb-4 focus:ring-2 focus:ring-chef-intense outline-none" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
                  <div className="overflow-x-auto"><table className="w-full text-left text-sm"><thead className="bg-gray-50 text-gray-500 uppercase font-bold text-xs"><tr><th className="p-3 rounded-l-lg">Imagine</th><th className="p-3">Titlu</th><th className="p-3">Timp</th><th className="p-3 text-right rounded-r-lg">Acțiuni</th></tr></thead><tbody className="divide-y divide-gray-100">{filtered.map((r, idx) => (<tr key={idx} className="hover:bg-blue-50 transition-colors group"><td className="p-3"><div className="w-10 h-10 rounded-lg bg-gray-200 overflow-hidden">{r.imageUrl && <img src={r.imageUrl} alt="" className="w-full h-full object-cover" />}</div></td><td className="p-3 font-bold text-gray-800">{r.title}</td><td className="p-3 text-gray-500">{r.prepTime}</td><td className="p-3 text-right"><button onClick={() => handleEditRecipe(Object.keys(recipes).find(key => recipes[key] === r) || r.title)} className="text-chef-intense font-bold hover:underline">Editează</button></td></tr>))}</tbody></table>{filtered.length === 0 && <div className="p-4 text-center text-gray-400">Nicio rețetă găsită.</div>}</div>
              </div>
          </div>
      );
    };
  
    const renderIngredients = () => (
      <div className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-800">Gestionare Ingrediente</h2>
          {editingIngredientName ? (
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 animate-fade-in">
                  <div className="flex justify-between items-center mb-4"><h3 className="font-bold text-lg">Editare: <span className="text-chef-intense">{editingIngredientName}</span></h3><button onClick={() => setEditingIngredientName(null)} className="text-gray-400 hover:text-gray-600">✕</button></div>
                  <div className="space-y-4">
                      <div><label className="block text-xs font-bold text-gray-500 mb-1">Partener (Sponsor)</label><select className="w-full p-2 border rounded-lg" value={bulkPartnerId || (isCreatingPartnerInline ? "new" : "")} onChange={(e) => { if (e.target.value === "new") { setIsCreatingPartnerInline(true); setBulkPartnerId(""); } else { setIsCreatingPartnerInline(false); setBulkPartnerId(e.target.value); } }}><option value="">-- Niciun Partener --</option>{partners.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}<option value="new">+ Creează Partener Nou</option></select></div>
                      {isCreatingPartnerInline && (<div className="p-4 bg-blue-50 rounded-lg border border-blue-100 space-y-3"><h4 className="text-xs font-bold text-blue-800 uppercase">Partener Nou</h4><input className="w-full p-2 border rounded text-sm" placeholder="Nume Partener" value={inlinePartnerData.name} onChange={e => setInlinePartnerData({...inlinePartnerData, name: e.target.value})} /><input className="w-full p-2 border rounded text-sm" placeholder="URL Logo" value={inlinePartnerData.logoUrl} onChange={e => setInlinePartnerData({...inlinePartnerData, logoUrl: e.target.value})} /></div>)}
                      <div><label className="block text-xs font-bold text-gray-500 mb-1">Link Cumpărare (URL)</label><input className="w-full p-2 border rounded-lg text-blue-600" placeholder="https://..." value={bulkPurchaseUrl} onChange={(e) => setBulkPurchaseUrl(e.target.value)} /></div>
                      <div className="flex gap-2 pt-4"><button onClick={handleBulkSaveIngredientLocal} className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-lg font-bold hover:bg-gray-300">Salvează Local</button><button onClick={handleBulkPublishIngredientLive} disabled={isPublishing} className="flex-1 bg-red-600 text-white py-2 rounded-lg font-bold hover:bg-red-700 disabled:opacity-50">{isPublishing ? 'Se aplică...' : 'Publică în Toate Rețetele'}</button></div>
                  </div>
              </div>
          ) : (
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                  <input type="text" placeholder="Caută ingredient..." className="w-full p-3 border border-gray-200 rounded-lg mb-4 focus:ring-2 focus:ring-chef-intense outline-none" value={ingredientSearchTerm} onChange={e => setIngredientSearchTerm(e.target.value)} />
                  <div className="max-h-[60vh] overflow-y-auto"><table className="w-full text-left text-sm"><thead className="bg-gray-50 text-gray-500 uppercase font-bold text-xs sticky top-0"><tr><th className="p-3">Nume</th><th className="p-3 text-center">Rețete</th><th className="p-3 text-right">Acțiuni</th></tr></thead><tbody className="divide-y divide-gray-100">{ingredientStats.filter(i => normalizeText(i.name).includes(normalizeText(ingredientSearchTerm))).map((stat, idx) => (<tr key={idx} className="hover:bg-blue-50 cursor-pointer" onClick={() => handleOpenIngredientEditor(stat.name)}><td className="p-3 font-medium">{stat.name}</td><td className="p-3 text-center"><span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs font-bold">{stat.count}</span></td><td className="p-3 text-right text-chef-intense font-bold">Editează</td></tr>))}</tbody></table></div>
              </div>
          )}
      </div>
    );
  
    const renderUsers = () => (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-800">Utilizatori</h2>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              {!isEditingUser ? (
                  <button onClick={() => setIsEditingUser(true)} className="bg-blue-600 text-white px-4 py-2 rounded mb-4 font-bold">+ Adaugă Utilizator</button>
              ) : (
                  <div className="bg-gray-50 p-4 rounded mb-4 border border-gray-200 space-y-2">
                      <input className="w-full p-2 border rounded" placeholder="Username" value={userFormData.username} onChange={e => setUserFormData({...userFormData, username: e.target.value})} />
                      <input className="w-full p-2 border rounded" placeholder="Email" value={userFormData.email} onChange={e => setUserFormData({...userFormData, email: e.target.value})} />
                      <input className="w-full p-2 border rounded" placeholder="Parola" type="password" value={userFormData.password} onChange={e => setUserFormData({...userFormData, password: e.target.value || ''})} />
                      <div className="flex gap-2"><button onClick={handleSaveUser} className="bg-green-600 text-white px-4 py-2 rounded">Salvează</button><button onClick={() => setIsEditingUser(false)} className="bg-gray-300 text-gray-700 px-4 py-2 rounded">Anulează</button></div>
                  </div>
              )}
              <ul className="divide-y divide-gray-100">{users.map(u => (<li key={u.id} className="py-3 flex justify-between items-center"><div><span className="font-bold">{u.username}</span> <span className="text-gray-500 text-sm">({u.email})</span></div><button onClick={() => handleDeleteUser(u.id)} className="text-red-500 font-bold text-xs">Șterge</button></li>))}</ul>
          </div>
        </div>
    );
  
    const renderPartners = () => (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-800">Parteneri</h2>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              {!isEditingPartner ? (
                  <button onClick={() => setIsEditingPartner(true)} className="bg-blue-600 text-white px-4 py-2 rounded mb-4 font-bold">+ Adaugă Partener</button>
              ) : (
                  <div className="bg-gray-50 p-4 rounded mb-4 border border-gray-200 space-y-2">
                      <input className="w-full p-2 border rounded" placeholder="Nume" value={partnerFormData.name} onChange={e => setPartnerFormData({...partnerFormData, name: e.target.value})} />
                      <input className="w-full p-2 border rounded" placeholder="Logo URL" value={partnerFormData.logoUrl} onChange={e => setPartnerFormData({...partnerFormData, logoUrl: e.target.value})} />
                      <input className="w-full p-2 border rounded" placeholder="Link Oficial (Website)" value={partnerFormData.websiteUrl} onChange={e => setPartnerFormData({...partnerFormData, websiteUrl: e.target.value})} />
                      <div className="flex gap-2"><button onClick={handleSavePartnerLocal} className="bg-gray-200 text-gray-700 px-4 py-2 rounded">Salvează Local</button><button onClick={handlePublishPartnerLive} className="bg-green-600 text-white px-4 py-2 rounded">Publică Live</button><button onClick={() => { setIsEditingPartner(false); setPartnerFormData({id:'', name:'', logoUrl:'', websiteUrl: ''}); }} className="bg-gray-300 text-gray-700 px-4 py-2 rounded">Anulează</button></div>
                  </div>
              )}
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">{partners.map(p => (<li key={p.id} className="p-4 border rounded flex items-center gap-4 bg-gray-50"><img src={p.logoUrl} className="w-12 h-12 object-contain bg-white rounded p-1" alt="" /><div><div className="font-bold">{p.name}</div><div className="flex gap-2 mt-1"><button onClick={() => handleEditPartnerClick(p)} className="text-blue-500 font-bold text-xs">Editează</button><button onClick={() => handleDeletePartner(p.id)} className="text-red-500 text-xs font-bold">Șterge</button></div></div></li>))}</ul>
          </div>
        </div>
    );
  
    const renderCuisines = () => (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-800">Bucătării</h2>
             <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
               {isEditingCuisine && cuisineFormData ? (
                   <div className="bg-gray-50 p-4 rounded mb-4 border border-gray-200 space-y-2">
                       <input className="w-full p-2 border rounded" placeholder="Nume" value={cuisineFormData.data.name} onChange={e => setCuisineFormData({...cuisineFormData!, data: {...cuisineFormData!.data, name: e.target.value}})} />
                       <input className="w-full p-2 border rounded" placeholder="Emoji Steag" value={cuisineFormData.data.flag} onChange={e => setCuisineFormData({...cuisineFormData!, data: {...cuisineFormData!.data, flag: e.target.value}})} />
                       <textarea className="w-full p-2 border rounded h-20" placeholder="Rețete (separate prin virgulă)" value={cuisineRecipeString} onChange={e => setCuisineRecipeString(e.target.value)} />
                       <div className="flex gap-2"><button onClick={handleSaveCuisine} className="bg-green-600 text-white px-4 py-2 rounded">Salvează</button><button onClick={() => setIsEditingCuisine(false)} className="bg-gray-300 text-gray-700 px-4 py-2 rounded">Anulează</button></div>
                   </div>
               ) : (
                   <button onClick={handleAddCuisine} className="bg-blue-600 text-white px-4 py-2 rounded mb-4 font-bold">+ Adaugă Bucătărie</button>
               )}
               <ul className="divide-y divide-gray-100">{cuisines.map((c, idx) => (<li key={idx} className="py-3 flex justify-between items-center"><div className="flex items-center gap-2"><span className="text-2xl">{c.flag}</span> <span className="font-bold">{c.name}</span> <span className="text-xs text-gray-400">({c.recipes.length} rețete)</span></div><div className="flex gap-2"><button onClick={() => moveCuisine(idx, 'up')} className="text-gray-400 hover:text-blue-500">⬆</button><button onClick={() => moveCuisine(idx, 'down')} className="text-gray-400 hover:text-blue-500">⬇</button><button onClick={() => handleEditCuisine(idx)} className="text-blue-500 font-bold text-xs">Edit</button><button onClick={() => handleDeleteCuisine(idx)} className="text-red-500 font-bold text-xs">Șterge</button></div></li>))}</ul>
             </div>
        </div>
    );
  
    const renderCategories = () => (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-800">Categorii</h2>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <ul className="divide-y divide-gray-100">{categories.map((c, idx) => (<li key={idx} className="py-3 flex justify-between items-center"><div className="flex items-center gap-2"><span className="text-2xl">{c.icon}</span> <span className="font-bold">{c.name}</span></div><div className="flex gap-2"><button onClick={() => moveCategory(idx, 'up')} className="text-gray-400 hover:text-blue-500">⬆</button><button onClick={() => moveCategory(idx, 'down')} className="text-gray-400 hover:text-blue-500">⬇</button></div></li>))}</ul>
            </div>
        </div>
    );
    
    // NEW: Render Settings Tab
    const renderSettings = () => (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-800">Setări Aplicație</h2>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 space-y-6">
                <div className="space-y-4">
                    <h3 className="text-lg font-bold text-gray-700 border-b pb-2">Configurare AI Imagini</h3>
                    <p className="text-sm text-gray-500">Aceste setări controlează stilul imaginilor generate automat pentru rețetele noi sau cele generate de AI.</p>
                    
                    <div>
                        <label className="block text-xs font-bold text-gray-600 mb-1 uppercase tracking-wide">Stil / Prompt Pozitiv (Ce să includă)</label>
                        <textarea 
                            className="w-full p-3 border border-gray-300 rounded-lg h-24 text-sm bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                            value={settings.imageStylePrompt}
                            onChange={(e) => setSettings({...settings, imageStylePrompt: e.target.value})}
                            placeholder="Ex: professional gourmet food photography..."
                        />
                    </div>
                    
                    <div>
                        <label className="block text-xs font-bold text-gray-600 mb-1 uppercase tracking-wide">Prompt Negativ / Excluderi (Ce să NU includă)</label>
                        <textarea 
                            className="w-full p-3 border border-gray-300 rounded-lg h-24 text-sm bg-gray-50 focus:bg-white focus:ring-2 focus:ring-red-400 focus:border-transparent transition-all"
                            value={settings.imageNegativePrompt}
                            onChange={(e) => setSettings({...settings, imageNegativePrompt: e.target.value})}
                            placeholder="Ex: -text -watermark -people..."
                        />
                    </div>
                </div>

                <div className="space-y-4 pt-6 border-t border-gray-100">
                    <h3 className="text-lg font-bold text-gray-700 border-b pb-2">Configurare Sugestii AI (Rețete Noi)</h3>
                    <p className="text-sm text-gray-500">Acest text definește "personalitatea" și regulile AI-ului atunci când utilizatorul cere idei noi (ex: "Idei de cină").</p>
                    
                    <div>
                        <label className="block text-xs font-bold text-gray-600 mb-1 uppercase tracking-wide">Logică / Prompt de Bază (Rolul AI-ului)</label>
                        <textarea 
                            className="w-full p-3 border border-gray-300 rounded-lg h-48 text-sm bg-gray-50 focus:bg-white focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all font-mono"
                            value={settings.recipeSuggestionPrompt}
                            onChange={(e) => setSettings({...settings, recipeSuggestionPrompt: e.target.value})}
                            placeholder="Ex: Ești un chef expert. Răspunde doar în română..."
                        />
                    </div>
                </div>
                
                <div className="flex gap-4 pt-4 border-t border-gray-100">
                    <button 
                        onClick={handleSaveSettings} 
                        className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg font-bold hover:bg-gray-300 transition-colors shadow-sm"
                    >
                        Salvează Local
                    </button>
                    <button 
                        onClick={handlePublishSettings} 
                        className="bg-chef-intense text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-600 transition-colors shadow-md flex items-center gap-2"
                    >
                        <span>☁️</span> Salvează și Publică LIVE
                    </button>
                </div>
            </div>
        </div>
    );
  
    const renderRecipeEditor = () => {
      if (!editFormData) return null;
      return (
        <div className="space-y-6 max-w-4xl mx-auto pb-20">
          <div className="flex justify-between items-center sticky top-0 md:top-4 bg-gray-50/95 backdrop-blur py-4 z-10 border-b border-gray-200 px-4 rounded-xl shadow-sm">
              <button onClick={() => {setEditingRecipeKey(null); setEditFormData(null);}} className="text-gray-500 hover:text-gray-800 font-bold">← Înapoi</button>
              <div className="flex gap-2">
                  <button onClick={handleSaveRecipeLocal} className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-bold hover:bg-gray-300 text-sm">Salvează Local</button>
                  <button 
                      onClick={handlePublishLive} 
                      disabled={isPublishing} 
                      className={`px-6 py-2 rounded-lg font-black shadow-xl text-sm flex items-center gap-2 transform transition-all ${isPublishing ? 'bg-gray-400 scale-100 cursor-wait' : 'bg-red-600 hover:bg-red-700 hover:scale-105 active:scale-95 text-white'} border-2 border-red-700`}
                  >
                      {isPublishing ? (
                          <>
                             <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                             <span>SE PUBLICĂ...</span>
                          </>
                      ) : (
                          <>
                             <span>🔴</span>
                             <span>PUBLICA LIVE</span>
                          </>
                      )}
                  </button>
              </div>
          </div>
  
          <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-200 space-y-4">
              <h3 className="font-bold text-gray-400 uppercase text-sm border-b pb-2">Informații Generale</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                      <label className="block text-xs font-bold text-gray-500 mb-1">Titlu Rețetă</label>
                      <input className="w-full p-2 border rounded" value={editFormData.title} onChange={e => setEditFormData({...editFormData, title: e.target.value})} />
                  </div>
                  <div>
                      <label className="block text-xs font-bold text-gray-500 mb-1">Imagine</label>
                      <div className="flex gap-2 mb-2">
                          <input className="flex-1 p-2 border rounded text-xs bg-gray-50" value={editFormData.imageUrl || ''} onChange={e => setEditFormData({...editFormData, imageUrl: e.target.value})} placeholder="URL..." readOnly />
                          <button 
                              onClick={handleGenerateBingImage}
                              className="bg-blue-100 text-blue-700 px-3 py-1 rounded font-bold text-xs whitespace-nowrap hover:bg-blue-200 flex items-center gap-1"
                              title="Generare rapidă cu Bing (Web)"
                          >
                              🌐 Bing
                          </button>
                          <button 
                              onClick={handleGenerateAiImage} 
                              disabled={isGeneratingImage}
                              className="bg-purple-100 text-purple-700 px-3 py-1 rounded font-bold text-xs whitespace-nowrap hover:bg-purple-200 flex items-center gap-1 disabled:opacity-50 disabled:cursor-wait"
                              title="Generare HQ cu Nano Banana (AI)"
                          >
                              {isGeneratingImage ? <div className="w-3 h-3 border-2 border-purple-700 border-t-transparent rounded-full animate-spin"></div> : '✨ HQ AI'}
                          </button>
                      </div>
                      <div className="flex gap-2 items-center bg-gray-50 p-2 rounded border border-dashed border-gray-300">
                          <span className="text-[10px] font-bold text-gray-500 uppercase whitespace-nowrap">Prompt:</span>
                          <input className="flex-1 p-1.5 border rounded text-xs" placeholder="Ex: Supă roșie..." value={customImagePrompt} onChange={e => setCustomImagePrompt(e.target.value)} />
                          <button 
                              onClick={handleGenerateCustomImage} 
                              disabled={isGeneratingImage}
                              className="bg-purple-600 text-white px-3 py-1.5 rounded font-bold text-xs whitespace-nowrap hover:bg-purple-700 disabled:opacity-50 disabled:cursor-wait flex items-center gap-1"
                          >
                              {isGeneratingImage ? '...' : '🎨 Generează'}
                          </button>
                      </div>
                      <input type="file" className="mt-2 text-xs w-full" onChange={handleImageUpload} />
                      {editFormData.imageUrl && (<div className="mt-2 h-32 bg-gray-100 rounded overflow-hidden relative"><img src={editFormData.imageUrl} className="w-full h-full object-cover" alt="Preview" /></div>)}
                  </div>
                  <div><label className="block text-xs font-bold text-gray-500 mb-1">Timp Pregătire</label><input className="w-full p-2 border rounded" value={editFormData.prepTime || ''} onChange={e => setEditFormData({...editFormData, prepTime: e.target.value})} /></div>
                  <div><label className="block text-xs font-bold text-gray-500 mb-1">Timp Gătire</label><input className="w-full p-2 border rounded" value={editFormData.cookTime || ''} onChange={e => setEditFormData({...editFormData, cookTime: e.target.value})} /></div>
              </div>
          </div>
  
          <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-200 space-y-4">
               <div className="flex justify-between items-center border-b pb-2"><h3 className="font-bold text-gray-400 uppercase text-sm">Ingrediente</h3><button onClick={() => setEditFormData({...editFormData, ingredients: [...(editFormData?.ingredients || []), {name: '', amount: ''}]})} className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded font-bold">+ Adaugă</button></div>
               {editFormData.ingredients?.map((ing, idx) => (
                   <div key={idx} className="flex flex-col gap-2 p-3 border border-gray-100 rounded-lg bg-gray-50">
                       <div className="flex flex-col md:flex-row gap-2 md:items-center">
                           <div className="flex gap-2 w-full md:w-2/3">
                              <input className="w-1/3 p-2 border rounded" placeholder="Cantitate" value={ing.amount} onChange={e => { const newIngs = [...editFormData.ingredients]; newIngs[idx].amount = e.target.value; setEditFormData({...editFormData, ingredients: newIngs}); }} />
                              <input className="w-2/3 p-2 border rounded" placeholder="Nume ingredient" value={ing.name} onChange={e => { const newIngs = [...editFormData.ingredients]; newIngs[idx].name = e.target.value; setEditFormData({...editFormData, ingredients: newIngs}); }} />
                           </div>
                           <div className="flex gap-2 w-full md:w-1/3">
                              <select className="flex-1 p-2 border rounded text-sm bg-white" value={ing.partnerId || ""} onChange={e => { const newIngs = [...editFormData.ingredients]; newIngs[idx].partnerId = e.target.value || undefined; setEditFormData({...editFormData, ingredients: newIngs}); }}><option value="">-- Partener --</option>{partners.map(p => (<option key={p.id} value={p.id}>{p.name}</option>))}</select>
                              <button onClick={() => { const newIngs = editFormData.ingredients.filter((_, i) => i !== idx); setEditFormData({...editFormData, ingredients: newIngs}); }} className="text-red-500 px-2 font-bold text-lg">✕</button>
                           </div>
                       </div>
                       <div className="flex gap-2 items-center"><span className="text-lg">🛒</span><input className="flex-1 p-2 border rounded text-xs text-blue-600 bg-white" placeholder="Link Cumpărare Ingredient" value={ing.purchaseUrl || ''} onChange={e => { const newIngs = [...editFormData.ingredients]; newIngs[idx].purchaseUrl = e.target.value; setEditFormData({...editFormData, ingredients: newIngs}); }} /></div>
                   </div>
               ))}
          </div>
  
          <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-200 space-y-4">
               <div className="flex justify-between items-center border-b pb-2">
                  <h3 className="font-bold text-gray-400 uppercase text-sm">Pași de preparare</h3>
                  <div className="flex gap-2">
                     <button onClick={handleGenerateAiSteps} disabled={isGeneratingSteps} className="text-xs bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded font-bold flex items-center gap-1 shadow-sm transition-transform active:scale-95 disabled:opacity-50 disabled:cursor-wait">{isGeneratingSteps ? 'Generare...' : '✨ Generează Pași cu AI'}</button>
                     <button onClick={() => setEditFormData({...editFormData, steps: [...(editFormData?.steps || []), '']})} className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded font-bold">+ Adaugă Pas</button>
                  </div>
               </div>
               {editFormData.steps?.map((step, idx) => (
                   <div key={idx} className="flex gap-2 items-start"><span className="mt-2 text-gray-400 font-bold w-6">{idx+1}.</span><textarea className="flex-1 p-2 border rounded h-24" value={step} onChange={e => { const newSteps = [...editFormData.steps]; newSteps[idx] = e.target.value; setEditFormData({...editFormData, steps: newSteps}); }} /><button onClick={() => { const newSteps = editFormData.steps.filter((_, i) => i !== idx); setEditFormData({...editFormData, steps: newSteps}); }} className="text-red-500 px-2 mt-2">✕</button></div>
               ))}
          </div>
        </div>
      );
    };
  
    return (
      <div className="flex min-h-screen bg-gray-100 font-sans">
        {renderSidebar()}
        <main className="flex-1 p-4 md:p-8 overflow-y-auto h-screen pb-24 md:pb-8">
          <div className="md:hidden h-14"></div>
          
          {activeTab === 'dashboard' && renderDashboard()}
          {activeTab === 'analytics' && renderAnalytics()}
          {activeTab === 'recipes' && (
               (editingRecipeKey || editFormData) ? renderRecipeEditor() : renderRecipesList()
          )}
          {activeTab === 'ingredients' && renderIngredients()}
          {activeTab === 'users' && renderUsers()}
          {activeTab === 'partners' && renderPartners()}
          {activeTab === 'cuisines' && renderCuisines()}
          {activeTab === 'categories' && renderCategories()}
          {activeTab === 'settings' && renderSettings()}
        </main>
      </div>
    );
  };

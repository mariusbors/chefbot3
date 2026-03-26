
// @ts-ignore
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Configuration
const firebaseConfig = {
  apiKey: "AIzaSyAp8yCaRBei4lWGynHXJx_ffQlaAiLuIwA",
  authDomain: "chefbot-54500.firebaseapp.com",
  projectId: "chefbot-54500",
  storageBucket: "chefbot-54500.firebasestorage.app",
  messagingSenderId: "614212263336",
  appId: "1:614212263336:web:d1d07f4c0174f50102d19d",
  measurementId: "G-G39K7Z7TGY"
};

let app;
let db: any = null;
let storage: any = null;
let initializationError: string | null = null;

try {
    // Check if critical config exists
    if (firebaseConfig.apiKey && firebaseConfig.projectId) {
        app = initializeApp(firebaseConfig);
        db = getFirestore(app);
        storage = getStorage(app);
        console.log("Firebase & Storage: Conectat cu succes.");
    } else {
        initializationError = "Lipsesc cheile de configurare.";
        console.log("Firebase: Mod Offline. Configurare lipsă.");
    }
} catch (e: any) {
    initializationError = e.message || "Eroare necunoscută";
    console.error("Firebase: Eroare la inițializare.", e);
    // Fallback to null db
}

export { db, storage, initializationError };

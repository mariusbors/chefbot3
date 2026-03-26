
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Recipe } from '../types';
import { generateRecipeSchema } from '../utils/seoUtils';

interface SEOProps {
  title: string;
  description?: string;
  image?: string;
  type?: 'website' | 'article' | 'recipe';
  recipe?: Recipe;
}

// Generate FAQ Schema for GEO (Generative Engine Optimization)
// AI engines look for Questions and Answers to serve in chat results
const generateFAQSchema = (recipe: Recipe) => {
    const questions = [];

    // Q1: Preparation
    questions.push({
        "@type": "Question",
        "name": `Cum se prepară ${recipe.title}?`,
        "acceptedAnswer": {
            "@type": "Answer",
            "text": `Pentru a prepara ${recipe.title}, începeți prin a pregăti ingredientele: ${recipe.ingredients.slice(0, 3).map(i => i.name).join(', ')}. Urmați cei ${recipe.steps.length} pași simpli de gătire detaliați în rețetă. Timpul total este de aproximativ ${recipe.cookTime}.`
        }
    });

    // Q2: Ingredients
    questions.push({
        "@type": "Question",
        "name": `Ce ingrediente sunt necesare pentru ${recipe.title}?`,
        "acceptedAnswer": {
            "@type": "Answer",
            "text": `Lista completă de ingrediente pentru ${recipe.title} include: ${recipe.ingredients.map(i => i.name).join(', ')}.`
        }
    });

    // Q3: Calories (if available)
    if (recipe.nutrition && recipe.nutrition.calories) {
        questions.push({
            "@type": "Question",
            "name": `Câte calorii are o porție de ${recipe.title}?`,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": `O porție de ${recipe.title} conține aproximativ ${recipe.nutrition.calories} calorii, ${recipe.nutrition.protein}g proteine și ${recipe.nutrition.fat}g grăsimi.`
            }
        });
    }

    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": questions
    };
};

export const SEO: React.FC<SEOProps> = ({ 
  title, 
  description = "ChefBot - Asistentul tău culinar AI. Găsește rețete delicioase instantaneu.", 
  image = "https://www.chefbot.ro/chefbot_logo.svg",
  type = 'website',
  recipe
}) => {
  
  const siteTitle = title.includes("ChefBot") ? title : `${title} - Rețetă ChefBot`;
  const currentUrl = window.location.href;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={currentUrl} />
      
      {/* GEO Tags for AI Search */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type === 'recipe' ? 'article' : 'website'} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="ChefBot România" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={currentUrl} />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Structured Data (JSON-LD) for Rich Snippets */}
      {recipe && (
        <>
            <script type="application/ld+json">
              {JSON.stringify(generateRecipeSchema(recipe))}
            </script>
            {/* Inject FAQ Schema for AI/GEO */}
            <script type="application/ld+json">
              {JSON.stringify(generateFAQSchema(recipe))}
            </script>
        </>
      )}
      
      {/* Breadcrumb Schema for better navigation visibility */}
      <script type="application/ld+json">
        {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{
              "@type": "ListItem",
              "position": 1,
              "name": "Acasă",
              "item": "https://www.chefbot.ro/"
            }, {
              "@type": "ListItem",
              "position": 2,
              "name": "Rețete",
              "item": "https://www.chefbot.ro/list/category/Toate"
            }, {
              "@type": "ListItem",
              "position": 3,
              "name": title
            }]
        })}
      </script>
    </Helmet>
  );
};

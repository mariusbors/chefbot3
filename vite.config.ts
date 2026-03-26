
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  // @ts-ignore
  const env = loadEnv(mode, process.cwd(), '');
  
  // Prioritize keys in this order, adding process.env fallback for system vars
  const apiKey = env.VITE_API_KEY || env.API_KEY || env.GOOGLE_API_KEY || process.env.VITE_API_KEY || process.env.API_KEY || process.env.GOOGLE_API_KEY || "";

  return {
    plugins: [react()],
    base: './', // Ensures relative paths for assets, crucial for static hosting
    build: {
      outDir: 'dist',
      sourcemap: false, // Disable sourcemaps in production for security and size
      chunkSizeWarningLimit: 1600,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom', 'react-router-dom', '@google/genai'],
          },
        },
      },
    },
    // Inject the API key directly into the build code as a global constant
    define: {
      'process.env.API_KEY': JSON.stringify(apiKey),
      '__API_KEY__': JSON.stringify(apiKey)
    },
    server: {
      port: 3000,
      host: true
    }
  };
});

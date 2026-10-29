import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss()],
    base: '/',
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.WEB3FORMS_ACCESS_KEY': JSON.stringify(env.WEB3FORMS_ACCESS_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    esbuild: {
      drop: mode === 'production' ? ['console', 'debugger'] : [],
      legalComments: 'none',
    },
    optimizeDeps: {
      include: [
        'react',
        'react-dom',
        'react-dom/client',
        'react-router',
        'react-router-dom',
        'motion/react',
        'lucide-react',
      ],
      esbuildOptions: {
        target: 'esnext',
      },
    },
    build: {
      target: 'esnext',
      minify: 'esbuild',
      cssMinify: true,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              if (id.includes('lucide-react')) {
                return 'vendor-icons';
              }
              if (id.includes('motion')) {
                return 'vendor-motion';
              }
              if (
                id.includes('/react/') || id.includes('\\react\\') ||
                id.includes('/react-dom/') || id.includes('\\react-dom\\') ||
                id.includes('/react-router/') || id.includes('\\react-router\\') ||
                id.includes('/react-router-dom/') || id.includes('\\react-router-dom\\')
              ) {
                return 'vendor-react';
              }
            }
          }
        }
      }
    },
    server: {
      port: 3000,
      host: true,
      hmr: process.env.DISABLE_HMR !== 'true',
      warmup: {
        clientFiles: [
          './src/main.tsx',
          './src/App.tsx',
          './src/components/Navbar.tsx',
          './src/components/Hero.tsx',
          './src/index.css',
        ],
      },
    },
  };
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Base path differs per host:
//   - GitHub Pages serves from /<repo>/, so it needs '/Tutorings-landing-page/'.
//   - Vercel (and most other hosts) serve from the domain root '/'.
// Vercel sets the VERCEL env var during its build, so we detect it automatically.
// Override explicitly with BASE_PATH for any other host.
const base = process.env.BASE_PATH ?? (process.env.VERCEL ? '/' : '/Tutorings-landing-page/');

export default defineConfig({
  base,
  plugins: [react()],
  build: {
    target: 'es2020',
    cssCodeSplit: false,
    assetsInlineLimit: 2048,
    reportCompressedSize: true,
    rollupOptions: {
      output: {
        manualChunks: { react: ['react', 'react-dom'] },
      },
    },
  },
});


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Garante que os caminhos sejam relativos para o GitHub Pages e Vercel
  build: {
    outDir: 'dist',
    sourcemap: false,
    // Removido o minify: 'terser' para evitar erro de dependência ausente
  }
});

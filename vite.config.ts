import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // listen on all addresses so preview works (e.g. Cursor Simple Browser)
    port: 5173,
    open: true, // open browser when running npm run dev
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});

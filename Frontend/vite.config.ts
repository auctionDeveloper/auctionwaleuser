import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path'; // ✅ Use `* as path`

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});

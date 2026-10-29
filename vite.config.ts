import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    allowedHosts: [
      'st.fairdealac.com',
      '.fairdealac.com',
    ],
    cors: true,
  },
  preview: {
    host: true,
    allowedHosts: [
      'st.fairdealac.com',
      '.fairdealac.com',
    ],
    cors: true,
  },
});

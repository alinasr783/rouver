import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: 'ROUVER',
        short_name: 'Rouver',
        icons: [
          {
            src: 'icon.png',
            sizes: '192x192',
            type: 'image/webp'
          },
          {
            src: 'icon.png',
            sizes: '512x512',
            type: 'image/webp'
          }
        ]
      }
    })
  ],
  server: {
    allowedHosts: [
      '65198c21-5de9-4d5e-af83-0415bd80e854-00-rqm5ja9vsx6z.riker.replit.dev'
    ]
  }
});
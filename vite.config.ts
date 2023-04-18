import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { sentryVitePlugin } from '@sentry/vite-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: true,
  },
  plugins: [
    react(),
    sentryVitePlugin({
      org: 'bbdevpl',
      project: 'react-advanced-devpath',
      sourcemaps: {
        assets: './dist/**',
      },
    }),
  ],
});

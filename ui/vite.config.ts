import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    css: {
      preprocessorOptions: {
        scss: {
          quietDeps: true
        }
      }
    },
    // vite config
    define: {
      __APP_ENV__: env.APP_ENV
    },
    plugins: [react()],
    server: {
      port: 3000,
      strictPort: true,
      open: '/',
      host: true,
      hmr: {
        clientPort: 3001,
        port: 3001
      },
      watch: {
        // bind volumes don't get fs events
        // so we need to poll now.
        usePolling: true
      }
    }
  };
});

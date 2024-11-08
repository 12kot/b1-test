import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default ({ mode }: { mode: string }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return defineConfig({
    plugins: [react()],
    base: process.env.VITE_BASE_URL,
    esbuild: {
      keepNames: true,
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler'
        }
      }
    },
    build: {
      outDir: 'dist',
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom'],
          },
        },
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        assets: path.resolve(__dirname, './src/assets'),
        hooks: path.resolve(__dirname, './src/hooks'),
        Router: path.resolve(__dirname, './src/Router'),
        layouts: path.resolve(__dirname, './src/layouts'),
        context: path.resolve(__dirname, './src/context'),
        routes: path.resolve(__dirname, './src/routes'),
        utils: path.resolve(__dirname, './src/utils'),
        components: path.resolve(__dirname, './src/components'),
        store: path.resolve(__dirname, './src/store'),
        pages: path.resolve(__dirname, './src/pages'),
        config: path.resolve(__dirname, './src/config'),
      },
    },
  });
};

import path from "path";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/linux-distro-quiz",
  plugins: [
    react(),
    tailwindcss()
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
          ui: ["@radix-ui/react-accordion", "@radix-ui/react-dialog", "@radix-ui/react-label", "@radix-ui/react-progress", "@radix-ui/react-radio-group", "@radix-ui/react-separator", "@radix-ui/react-slot", 'sonner'],
          icons: ['lucide-react', 'react-icons'],
          distros: ['@/data/distros']
        }
      }
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
});

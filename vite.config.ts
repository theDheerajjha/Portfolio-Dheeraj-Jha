import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite configuration with plugin and alias
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',  // Define alias for easy imports
    },
  },
})

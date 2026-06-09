import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/cardata': 'http://localhost:8080',
      '/cars': 'http://localhost:8080',
      '/deletecar': 'http://localhost:8080',
      '/updatecar': 'http://localhost:8080'
    }
  }
})

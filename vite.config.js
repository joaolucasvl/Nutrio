import { defineConfig } from 'vite'
import talwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Nutrio',
  plugins: [
    react(),
    talwindcss()
  ],

})

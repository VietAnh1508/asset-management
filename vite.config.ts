import { defineConfig } from 'vite'
import { sveltekit } from '@sveltejs/kit/vite'
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  server: {
    open: true
  },
  plugins: [
    tailwindcss(),
    sveltekit()
  ],
})

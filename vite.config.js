import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

function removeCrossorigin() {
  return {
    name: 'remove-crossorigin',
    apply: 'build',
    transformIndexHtml: {
      order: 'post',
      handler: (html) => html.replace(/ crossorigin/g, ''),
    },
  }
}

export default defineConfig({
  plugins: [react(), removeCrossorigin()],
  base: './',
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Three.js in its own cached chunk — only downloaded on Home page visit
          'three': ['three'],
          // React ecosystem
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          // GSAP for PillNav animations
          'gsap': ['gsap'],
        }
      }
    }
  }
})

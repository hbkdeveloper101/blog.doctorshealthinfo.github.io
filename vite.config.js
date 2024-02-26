import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        outDir: 'css',
        emptyOutDir: false,
        minify: false,
        rollupOptions:{
            input: './css/main.css',
            output: {
                dir: 'css',
                assetFileNames: 'tailwindcss.css'
            }
        }
    }
})
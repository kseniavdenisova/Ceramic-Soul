import { resolve } from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
    input: {
        main: resolve(import.meta.dirname, 'index.html'),
        catalog: resolve(import.meta.dirname, 'catalog.html'),
        // blog: resolve(import.meta.dirname, 'blog.html'),
        // about: resolve(import.meta.dirname, 'about.html'),
    },
});
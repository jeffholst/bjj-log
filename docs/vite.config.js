import { SimpleSearch } from "vitepress-plugin-simple-search"
import { defineConfig } from "vite"

var options = {}

export default defineConfig({
  plugins: [SimpleSearch(options)],
})

import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

export default defineConfig({
  plugins: [vue()],
  base: "/",  // VERY IMPORTANT FOR AZURE
  build: {
    outDir: "dist"
  }
})

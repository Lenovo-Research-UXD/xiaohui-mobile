import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./xiaohui-mobile",
  plugins: [vue()],
  css: {
    postcss: {
      plugins: [
        require("postcss-pxtorem")({
          rootValue: 37.5,
        }),
      ],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    outDir: "./xiaohui-mobile",
    minify: "terser", //混淆器, terser后文件体积更小
  },
  server: {
    cors: true,
    open: true,
  },
});

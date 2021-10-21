import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/xiaohui-mobile/",
  plugins: [vue()],
  css: {
    postcss: {
      plugins: [
        require("postcss-pxtorem")({
          rootValue: 37.5,
          propList: ["*"],
          mediaQuery: true,
        }),
      ],
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@import './src/style/mixin.scss';`,
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "/images": "src/assets/images",
      "/videos": "src/assets/videos",
      "/components": "src/components",
      "/style": "src/style",
      "/types": "src/types",
      "/utils": "src/utils",
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

import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import "./utils/rem";

createApp(App).use(router).mount("#app");

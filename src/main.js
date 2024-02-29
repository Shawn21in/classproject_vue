import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

const app = createApp(App);
const url = "http://127.0.0.1:8000/";
app.config.globalProperties.$api = url + "api/";
app.config.globalProperties.$img = url;
app.use(store).use(router).mount("#app");

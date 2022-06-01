import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Vuelidate from "vuelidate";
import VueP5 from "vue-p5";
import VueEasyLightbox from "vue-easy-lightbox";

createApp(App).use(router, Vuelidate, VueEasyLightbox, VueP5).mount("#app");

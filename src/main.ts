import { createApp } from "vue";
import App from "./App.vue";
import router from "@/routes";
import "./style.css";
import "@/assets/styles/index.scss";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Icon from "@/components/icon/index.vue";

library.add(fas);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.component("fe-icon", Icon);

app.use(router);
app.mount("#app");

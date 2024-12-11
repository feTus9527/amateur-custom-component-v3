import { createApp } from "vue";
import App from "./App.vue";
import router from "@/routes";
import "./style.scss";
import "@/assets/styles/index.scss";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";

import Icon from "@/components/icon/index.vue";
import Button from "@/components/button/index.vue";
import Card from "@/components/card/index.vue";
import Dialog from "@/components/dialog/index.vue";

library.add(fas);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.component("fe-icon", Icon);
app.component("fe-button", Button);
app.component("fe-card", Card);
app.component("fe-dialog", Dialog);

app.use(router);
app.mount("#app");

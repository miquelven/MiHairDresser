import { createApp } from "vue";
import "./style.css";
import "./main.css";
import App from "./App.vue";

import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  PxMenu,
  BiX,
  BiScissors,
  BiPeopleFill,
  BiTelephoneFill,
  BiHandThumbsUpFill,
  BiEmojiSmileFill,
  BiBagCheckFill,
  BiPersonWorkspace,
} from "oh-vue-icons/icons";

addIcons(
  PxMenu,
  BiX,
  BiScissors,
  BiPeopleFill,
  BiTelephoneFill,
  BiHandThumbsUpFill,
  BiEmojiSmileFill,
  BiBagCheckFill,
  BiPersonWorkspace
);

const app = createApp(App);

app.component("v-icon", OhVueIcon);
app.mount("#app");

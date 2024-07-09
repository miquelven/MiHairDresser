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
  BiInstagram,
  BiFacebook,
  BiTwitter,
  BiPinterest,
  BiWhatsapp,
  IoLocationSharp,
  MdEmail,
  BiArrowUp,
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
  BiPersonWorkspace,
  BiInstagram,
  BiFacebook,
  BiTwitter,
  BiPinterest,
  BiWhatsapp,
  IoLocationSharp,
  MdEmail,
  BiArrowUp
);

import { MotionPlugin } from "@vueuse/motion";

const app = createApp(App);

app.use(MotionPlugin);
app.component("v-icon", OhVueIcon);
app.mount("#app");

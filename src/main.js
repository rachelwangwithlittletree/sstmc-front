import Vue from "vue";
import App1 from "./App1.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import PageLocation from "components/common/PageLocation";
// import Home from './Home.vue'
import iView from "iview";
import "iview/dist/styles/iview.css";
import "assets/css/index.less";
import router from "./router";
// import router from "./router"
import locale from "iview/dist/locale/zh-CN";
Vue.component("PageLocation", PageLocation);
// Vue.use(iView)
Vue.use(ElementUI);
import {
  Button,
  Select,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Form,
  FormItem,
  Tabs,
  TabPane
} from "element-ui";
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
Vue.config.productionTip = false;
Vue.use(iView, {
  // size: 'large',
  transfer: true,
  locale
});

new Vue({
  el: "#app",
  router,
  render: h => h(App1)
}).$mount("#app");

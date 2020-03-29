import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const Test = () => import("components/common/test");
const TestMeeting = () => import("components/common/TestMeeting");
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

const routes = [
  {
    path: "/test",
    name: "Test",
    component: Test
  },
  {
    path: "/testmeeting",
    name: "TestMeeting",
    component: TestMeeting
  }
];
const router = new VueRouter({
  routes,
  mode: "history"
});
export default router;

import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const ClubMain = () => import("views/clubs/ClubMain");
const MeetingMain = () => import("views/meetings/MeetingMain");
const SystemManageMain = () => import("views/sysmanage/SystemManageMain");
const TestMeeting = () => import("components/common/TestMeeting");
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

const routes = [
  {
    path: "",
    redirect: "/home",
  },
  {
    path: "/home",
    component: MeetingMain,
  },
  {
    path: "/clubmain",
    name: "ClubMain",
    component: ClubMain,
  },
  {
    path: "/meetingmain",
    name: "MeetingMain",
    component: MeetingMain,
  },
  {
    path: "/sysmanage",
    name: "SystemManageMain",
    component: SystemManageMain,
  },
  {
    path: "/testmeeting",
    name: "TestMeeting",
    component: TestMeeting,
  },
];
const router = new VueRouter({
  routes,
  mode: "history"
});
export default router;

<template>
  <div class="app">
    <div>
      <top-menu @menuClick="menuClick" />
    </div>
    <Content :subMenus="subMenus"></Content>
    <Footer />
  </div>
</template>

<script>
import Content from "components/common/Content";
import Footer from "components/common/Footer";

import TopMenu from "components/content/topBar/TopMenu";
export default {
  name: 'App',
  data() {
    return {
      subMenus: []
    };
  },
  components: {
    TopMenu,
    Content,
    Footer
  },
  methods: {
    menuClick(id) {
      if (id == "1") {
        this.subMenus = [
          {
            name: "会议管理",
            title: "会议管理",
            menuGroup: [
              {
                title: "新建",
                menuItem: [
                  {
                    name: "newMeeting",
                    title: "新建会议"
                  }
                ]
              },
              {
                title: "查看",
                menuItem: [
                  {
                    name: "meetingList",
                    title: "会议列表"
                  }
                ]
              }
            ]
          }
        ];
        this.$router.push({
          name: "MeetingMain"
        });
      }
      if (id == "2") {
        this.subMenus = [
          {
            name: "俱乐部管理",
            title: "俱乐部管理",
            menuGroup: [
              {
                title: "检索",
                menuItem: [
                  {
                    name: "newMeeting",
                    title: "新建会议"
                  }
                ]
              }
            ]
          }
        ];
        this.$router.push({
          name: "ClubMain"
        });
      }
      if (id == "3") {
        this.subMenus = [
          {
            name: "系统管理",
            title: "系统管理",
            menuGroup: [
              {
                title: "检索",
                menuItem: [
                  {
                    name: "会议",
                    title: "新建会议"
                  }
                ]
              }
            ]
          }
        ];
        this.$router.push({
          name: "SystemManageMain"
        });
      }
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
.main-page {
  display: inline;
}
.main-content {
  margin-top: 10px;
}
.top-part {
  height: 50px;
}

@import "assets/css/base.css";
</style>

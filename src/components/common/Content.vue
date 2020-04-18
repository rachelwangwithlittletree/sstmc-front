<template>
  <div class="page-container" style="padding-top:80px;z-index:5px;">
    <div class="left" v-if="isShowLeft">
      <div class="left-menu">
        <LeftSubMenu :subMenus="subMenus" />
      </div>
      <div class="left-profile-info">
        <h2>个人信息</h2>
      </div>
    </div>

    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import LeftSubMenu from "components/common/LeftSubMenu";

export default {
  name: "",
  data() {
    return {
      isShowLeft: true,
      formItem: {
        select: "",
        input: "hh"
      }
    };
  },
  props: {
    subMenus: {
      type: Array,
      default() {
        return [ {
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
          }];
      }
    }
  },
  components: { LeftSubMenu },
  methods: {},
  watch: {
      $route: function() {
          console.log(this.$route.title)
          if(this.$route.meta.title == "主页"){
              this.isShowLeft = false
          }else{
              this.isShowLeft = true
          }
      }
  }
};
</script>

<style scoped>
.page-container {
  display: inline;
}
.left-menu {
  width: 250px;
  margin: 0px 0px;
  padding: 0px 0px;
  /* height: 200px; */
  border: 5px solid gray;
}
.left-profile-info {
  width: 250px;
  height: 200px;
  margin-top: 20px;
  background-color: rgb(117, 164, 252);
}
</style>

<template>
  <div class="left-nav">
    <!-- <test  :formItem="formItem" :selectdata="vv"/> -->
    <div class="sub-menu">
      <LeftSubMenu :subMenus="subMenus"/>     
    </div>
    <div class="left-profile-info">
      <h2>个人信息</h2>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import LeftSubMenu from "components/common/LeftSubMenu";

export default {
  name: "MainLeft",
  data() {
    return {
      formItem: {
        select: "",
        input: "hh"
      },
      // subMenus: [
      //   {
      //     name: "会议管理",
      //     title: "会议管理",
      //     menuGroup: [
      //       {
      //         title: '检索',
      //         menuItem: [
      //           {
      //             name: '会议',
      //             title: '新建会议'
      //           }
      //         ]
      //       }
      //       ]
      //   }
      // ]
    };
  },
  props:{
    subMenus: {
      type: Array,
      default(){
        return []
      }
    }
    // subMenus: [
    //     {
    //       name: "会议管理",
    //       title: "会议管理",
    //       menuGroup: [
    //         {
    //           title: '检索',
    //           menuItem: [
    //             {
    //               name: '会议',
    //               title: '新建会议'
    //             }
    //           ]
    //         }
    //         ]
    //     }
    //   ]

  },
  components: {
    LeftSubMenu
  },
  methods: {}
};
</script>

<style scoped>
.sub-menu {
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

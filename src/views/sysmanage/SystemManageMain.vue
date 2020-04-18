<template>
  <div class="sub-right-content">
    <!-- <div class="club-left">
       <main-left  :subMenus = "subMenus" />
    </div>
    <div class="club-right">
       <h2>系统管理</h2>
    </div> -->
    这个是系统管理的主页
  </div>
</template>

<script type="text/ecmascript-6">
// import MainLeft from "components/common/MainLeft"
export default {
  name: "SystemManageMain",
  data() {
    return {
      // subMenus: [
      //   {
      //     name: "系统管理",
      //     title: "系统管理",
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
  components: {},
  methods: {}
};
</script>

<style  scoped>
.sub-right-content {
  margin-left: 300px;
}
</style>

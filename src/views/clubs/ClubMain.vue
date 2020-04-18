<template>
  <div class="sub-right-content">
    <!-- <div class="club-left">
       <main-left :subMenus = "subMenus" />
    </div>
    <div class="club-right">
       <h2>俱乐部会议</h2>
    </div> -->
     这个俱乐部管理的主页
  </div>
</template>

<script type="text/ecmascript-6">
// import MainLeft from "components/common/MainLeft"
export default {
  name: "ClubMain",
  data() {
    return {
      // subMenus: [
      //   {
      //     name: "俱乐部管理",
      //     title: "俱乐部管理",
      //     menuGroup: [
      //       {
      //         title: '检索',
      //         menuItem: [
      //           {
      //             name: 'newMeeting',
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

<style scoped>
.sub-right-content {
  margin-left: 300px;
}
</style>

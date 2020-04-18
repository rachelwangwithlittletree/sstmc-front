<template>
  <!-- <div class>
    <div class="club-left">
       <main-left  :subMenus = "subMenus" />
    </div>
    <div class="club-right">
       <h2>会议管理</h2>
    </div>
  </div> -->
  <div class="sub-right-content">
      这个会议管理的主页
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
      //     name: "会议管理",
      //     title: "会议管理",
      //     menuGroup: [
      //       {
      //         title: '新建',
      //         menuItem: [
      //           {
      //             name: 'newMeeting',
      //             title: '新建会议'
      //           }
      //         ]
      //       },
      //       {
      //         title: '查看',
      //         menuItem: [
      //           {
      //             name: 'meetingList',
      //             title: '会议列表'
      //           }
      //         ]
      //       }
      //       ]
        // }
    };
  },
  props:{
     
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

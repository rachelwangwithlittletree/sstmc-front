<template>
  <div class="top-bar">
    <div class="top-icon-title">SSTMC welcome you</div>
    <div class="top-menu">
      <Menu mode="horizontal" :theme="theme1" active-name="1" @on-select="test">       
        <MenuItem name="1">
          <Icon type="ios-construct" />会议管理
        </MenuItem>
        <MenuItem name="2">
          <Icon type="ios-construct" />俱乐部管理
        </MenuItem>
        <MenuItem name="3">
          <Icon type="ios-construct" />系统管理
        </MenuItem>

        <MenuItem name="4">
          <Icon type="ios-construct" />退出
        </MenuItem>
        <MenuItem name="5">
          <Icon type="ios-construct" />注销
        </MenuItem>
      </Menu>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopMenu",
  data() {
    return {
      theme1: "dark"
    };
  },
  components: {},
  methods: {
    test(id) {
      this.$emit('menuClick',id)
      console.log(id);
      // if (id == "1") {
      //   this.$router.push({
      //     name: "MeetingMain"
      //   });
      // }
      // if (id == "2") {
      //   this.$router.push({
      //     name: "ClubMain"
      //   });
      // }
      // if (id == "3") {
      //   this.$router.push({
      //     name: "SystemManageMain"
      //   });
      // }
      // if (id == "2") {
      //   this.$router.push({
      //     name: "TestMeeting"
      //   });
      // }
    }
  }
};
</script>
<style >
.top-bar {
  margin: 0;
  padding: 0;
  display: flex;
  background-color: chocolate;
}
.top-menu {
  flex: 1;
  margin-left: 150px;
  float: left;
}
.top-icon-title {
  padding-top: 20px;
  text-align: center;
  vertical-align: bottom;
  float: left;
  font-size: 15px;
  /* background-color: burlywood; */
}
</style>
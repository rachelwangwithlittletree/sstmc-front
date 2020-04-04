<template>
  <div class="top-bar">
    <div class="top-icon-title">SSTMC welcome you</div>
    <div class="top-menu">
      <Menu mode="horizontal" :theme="theme1" active-name="1" @on-select="test">
        <!-- <Submenu name="1">
          <template slot="title">
            <Icon type="ios-stats" />会议管理
          </template>
          <MenuGroup title="检索">
            <MenuItem name="1-1">会议查询</MenuItem>
          </MenuGroup>
          <MenuGroup title="新建">
            <MenuItem name="3-4">新建会议</MenuItem>
            <MenuItem name="3-4">新建提醒</MenuItem>
          </MenuGroup>
        </Submenu> -->
        <!-- <Submenu name="2">
          <template slot="title">
            <Icon type="ios-stats" />俱乐部管理
          </template>
          <MenuGroup title="使用">
            <MenuItem name="3-1">member management</MenuItem>
            <MenuItem name="3-2">officer management</MenuItem>
          </MenuGroup>
          <MenuGroup title="留存">
            <MenuItem name="3-4">用户留存</MenuItem>
            <MenuItem name="3-5">流失用户</MenuItem>
          </MenuGroup>
        </Submenu> -->
        <!-- <Submenu name="3">
          <template slot="title">
            <Icon type="ios-stats" />系统管理
          </template>
          <MenuGroup title="使用">
            <MenuItem name="3-1">用户管理</MenuItem>
            <MenuItem name="3-2">角色管理</MenuItem>
          </MenuGroup>
          <MenuGroup title="留存">
            <MenuItem name="3-4">用户留存</MenuItem>
            <MenuItem name="3-5">流失用户</MenuItem>
          </MenuGroup>
        </Submenu> -->
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
      console.log(id);
      if (id == "1") {
        this.$router.push({
          name: "MeetingMain"
        });
      }
      if (id == "2") {
        this.$router.push({
          name: "ClubMain"
        });
      }
      if (id == "3") {
        this.$router.push({
          name: "SystemManageMain"
        });
      }
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
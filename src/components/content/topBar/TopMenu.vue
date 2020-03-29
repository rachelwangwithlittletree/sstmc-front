<template>
  <div class="top-bar">
    <div class="top-icon-title">
      SSTMC welcome you
    </div>
    <div class="top-menu">
    <Menu mode="horizontal" :theme="theme1" active-name="1" @on-select="test">
      <MenuItem name="1" >
        <Icon type="ios-paper" />会议管理
      </MenuItem>
      <MenuItem name="2">
        <Icon type="ios-people" />俱乐部管理
      </MenuItem>
      <Submenu name="3">
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
      </Submenu>
      <MenuItem name="4">
        <Icon type="ios-construct" />退出
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
      theme1: "light"
    };
  },
  methods: {
    test(id){
      console.log(id)
      if (id == "1"){
this.$router.push({
        name: 'Test'
        
      })
      }
      if (id == "2"){
        this.$router.push({
        name: 'TestMeeting'
        
      })

      }
      
    }
  }
};
</script>
<style >
  .top-bar {
    display: flex;
  }
  .top-menu {
    flex:1 ;
    margin-left: 40px;
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
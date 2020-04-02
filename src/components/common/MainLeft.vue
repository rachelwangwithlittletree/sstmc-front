<template>
  <div class="left-nav">
    <!-- <test  :formItem="formItem" :selectdata="vv"/> -->
    <div class="sub-menu">
      <Menu mode="vertical" :theme="theme1" active-name="1" @on-select="test">
      <Submenu name="1">
        <template slot="title">
          <Icon type="ios-stats" />会议管理
        </template>
        <MenuGroup title="检索">
          <MenuItem name="1-1">会议查询</MenuItem>
          <!-- <MenuItem name="3-2"></MenuItem> -->
        </MenuGroup>
        <MenuGroup title="新建">
          <MenuItem name="3-4">新建会议</MenuItem>
          <MenuItem name="3-4">新建提醒</MenuItem>
          <!-- <MenuItem name="3-5">流失用户</MenuItem> -->
        </MenuGroup>
      </Submenu>
      </Menu>

    </div>
    <div class="left-profile-info">
     <h2>个人信息   </h2>
    </div>  
  </div>
</template>

<script type="text/ecmascript-6">
// import Test from "components/common/test"

export default {
  name: "MainLeft",
  data() {
    return {
      formItem: {
        select: "",
        input: 'hh'
      },
      
    };
  },
  components: {
    // Test
  },
  methods: {}
};
</script>

<style scoped>
.sub-menu  {
   width: 250px;
   margin: 0px 0px;
   padding: 0px 0px;
   /* height: 200px; */
   border: 5px solid gray;
   
}
.left-profile-info{
  width: 250px;
   height: 200px;
   margin-top: 20px;
   background-color:rgb(117, 164, 252);
   }
</style>

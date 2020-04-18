<template>
  <div>
    <div class='right-content'>
      <Menu
        mode="vertical"
        :theme="theme1"
        active-name="1"
        :open-names="openNames" 
         @on-select="verticalMenuSelect"       
      >
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
        </Submenu>-->
        <Submenu v-for="(item,index) in subMenus" :key="index" :name="item.name">
          <template slot="title">
            <Icon type="ios-stats" />
            {{item.name}}
          </template>
          <MenuGroup
            v-for="(menuGroup,index) in item.menuGroup"
            :key="index"
            :name="index"
            :title="menuGroup.title"
          >
            <MenuItem
              v-for="(menuItem,index) in menuGroup.menuItem"
              :key="index"
              :name="menuItem.name"
              @on-select="verticalMenuSelect(menuItem.name)"

            >{{menuItem.title}}</MenuItem>
          </MenuGroup>
        </Submenu>
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
        </Submenu>-->
      </Menu>
    </div>
    <div></div>
  </div>
</template>
<script>
export default {
  name: "LeftSubMenu",
  data() {
    return { theme1: "light" };
  },
  mounted() {
    console.log(this.subMenus);
  },
  methods: {
    verticalMenuSelect(name) {
      console.log("menut item name:" + name )
      
      switch(name){
        case 'newMeeting':
          this.$router.push({
             name: "CreateMeeting"
          })
          
      }
    }
  },
  props: {
    subMenus: {
      type: Array,
      default() {
        return [
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
      }
    },
    openNames: {
      type: Array,
      default() {
        return ["会议管理", "俱乐部管理", "系统管理"];
      }
    }
  }
};
</script>
<style scoped>   
</style>
<template>
  <div>
    <div>
      <Menu mode="vertical" :theme="theme1" active-name="1" :open-names="['会议管理']" @on-select="test">
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
              :name="index"
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
    test() {}
  },
  props: {
    subMenus: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>
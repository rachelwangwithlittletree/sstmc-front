<template>
  <div class="nav-bar">
    <div class="logo">SSTMC</div>
    <div class="left">
      <div v-for="(item,index) in items" :key="index" class="nav-bar-item">
        <el-dropdown>
          <el-button type="text" placement="bottom-start">
            {{item.name}}
            <i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown" class="sub-menu-horizen">
            <el-dropdown-item v-for="(subItem,index) in subItems" :key="index">
              <div class="button-in-drop-item">
                <el-button type="text" style="color:black">{{subItem}}</el-button>
              </div>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <div class="center">
      <slot name="center">
        <el-input placeholder="搜索" suffix-icon="el-icon-search"></el-input>
      </slot>
    </div>
    <div class="right">
      <slot name="right">
        <div>
          <el-button icon="el-icon-user-solid" type="text" placement="bottom-start">
            登录
            <i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
        </div>
        <div>
          <el-button type="text" placement="bottom-start">
            注册
            <i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
        </div>
      </slot>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "NavBar",
  data() {
    return {
      items: [
        {
          name: "主站",
          style: "menu"
        },
        {
          name: "俱乐部",
          style: "menu"
        },
        {
          name: "会议中心",
          style: "menu"
        },
        {
          name: "直播",
          style: "menu"
        },
        {
          name: "会员",
          style: "menu"
        },
        {
          name: "赛事",
          style: "menu"
        },
        {
          name: "下载App",
          style: "menu"
        }
      ],
      subItems: ["动画", "音乐", "舞蹈", "科技"],
      rightItems: ["登录", "注册"]
    };
  },
  components: {},
  methods: {}
};
</script>

<style scoped>
.nav-bar {
  display: flex;
  height: 70px;
  line-height: 70px;
  text-align: center;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
}
.logo {
  width: 10%;
  text-align: center;
}
.sub-menu-horizen {
  display: flex;
  text-align: center;
}
.el-dropdown {
  vertical-align: top;
  font-size: 29px;
  /* display: flex; */
}
.button-in-drop-item {
  text-align: center;
  height: 20px;
  color: black;
}
/* .el-dropdown + .el-dropdown {
    margin-left: 15px;
    font-size: 20px;
  } */
.el-icon-arrow-down {
  /* font-size: 28px; */
  opacity: 0;
}
.nav-bar-item {
  flex: 1;
  text-align: center;
  height: 80px;
}
.left {
  width: 50%;
  display: flex;
}
.right {
  flex: 1;
  display: flex;
  text-align: center;
  margin: 8px 0px 0px 15px;
}
.center {
  width: 20%;
  margin-top: 6px;
  text-align: center;
}
</style>

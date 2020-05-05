<template>
  <div class="login-page">
    <div class="top">
      <img src="~assets/img/login.png" width="100%" alt="login background" />
    </div>
    <div class="con">
      <i></i>
      <p>登录</p>
    </div>
    <div class="main-center">
      <div class="left">
        <img src="~assets/img/timg.jpg" width="50%" alt="login background" />
      </div>
      <div class="right">
        <el-form label-width="100px" class="demo-dynamic">
          <el-form-item
            prop="email"
            label="邮箱"
            :rules="[
      { required: true, message: '请输入邮箱地址', trigger: 'blur' },
      { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
    ]"
          >
            <el-input></el-input>
          </el-form-item>
          <el-form-item
            label="域名"
            :rules="{
      required: true, message: '域名不能为空', trigger: 'blur'
    }"
          >
            <el-input></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click>登录</el-button>
            <el-button @click>重置</el-button>
            <el-button @click>注册</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="bottom"></div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "",
  data() {
    return {
      // image: require(~assets/img/login.jpg)
    };
  },
  components: {},
  methods: {}
};
</script>

<style scoped>
.main-center {
  display: flex;
  text-align: center;
  width: 100%;
  margin-bottom: 10px;
}
.con {
  position: relative;
  height: 1.875rem;
  line-height: 1.875rem;
  margin: 2.47rem auto;
  text-align: center;
}
.con i {
  display: block;
  height: 1px;
  background: #e1e1e1;
  position: absolute;
  top: 0.9rem;
  width: 100%;
}
.con p {
  display: inline-block;
  font-size: 20px;
  /* color: #c1c1c1; */
  /* background: rgba(240, 240, 240, 1); */
  padding: 0 1.875rem;
  text-align: center;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

.top {
  height: 150px;
  width: 100%;
  border: none;
  overflow: hidden;
}
img {
  border: none;
  background-size: 1.8rem;
  margin: -1px;
  object-fit: cover;
}
.left {
  width: 50%;
  text-align: right;
  margin-right: 80px;
  border-right: solid 3px  #d9dddf;
}
.right {
    text-align: center;
    margin: 100px 0px 100px;
    
}
</style>

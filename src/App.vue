<template>
  <div id="app">
    <div class="top-part">
    <div  class="logo-part">
       <img src="assets/img/logo.png" alt="">
    </div>
    </div>
    <div class="horizen-menu">
      <TopMenu/>
    </div>
    
    <div class="main-content">
      <main-content/>
    </div>
    <router-view></router-view>
    
  </div>
</template>

<script>

import TopMenu from 'components/content/topBar/TopMenu'
import MainContent from "components/content/mainContent/MainContent"
export default {
  name: 'App',
  components: {
    TopMenu,
     MainContent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
.main-content {
  margin-top: 10px;  
}
.top-part{
  height: 50px;
}

@import "assets/css/base.css";
</style>

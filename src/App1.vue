<template>
  <div id="app">
    <nav-bar />
    <router-view></router-view>
    <bottom class='main-footer'/>
  </div>
</template>

<script>

// import TopMenu from 'components/content/topBar/TopMenu'
import NavBar from "components/content/navbar/NavBar"
import Bottom from "components/content/bottom/Bottom"

export default {
  name: 'App',
  data(){
    return {
      isLogin: false
    }
  },
  components: {
    // TopMenu,
     NavBar,
     Bottom
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
  /* height: 100%; */
  /* margin-top: 60px; */
}
.main-footer {
  margin-top: 10px; 
  text-align: center; 
}
.top-part{
  height: 50px;
}

@import "assets/css/base.css";
</style>

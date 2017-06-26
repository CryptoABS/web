<template>
  <div id="app">
    <img id="headerImg" src="./assets/wallpaper-homestead.jpg">
    <!--<div>
      <router-link :to="{name: 'Hello'}">Hello</router-link>
      <router-link :to="{name: 'Test'}">測試</router-link>
      <router-link :to="{name: 'StaticResource'}">靜態資源</router-link>
      <router-link :to="{name: 'ApiResource'}">api資源</router-link>
      <router-link :to="{name: 'ServerResource'}">後台資源</router-link>
    </div>-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: black;
}
#headerImg {
  width: 100%;
}
</style>

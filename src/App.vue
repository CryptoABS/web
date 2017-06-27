<template>
  <div id="app">
    <NavComponent></NavComponent>
    <img src="./assets/wallpaper-homestead.jpg">
    <img src="./assets/eth.jpg">
    <img src="./assets/Bitcoin-Ethereum-coins.jpg">
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
import Vue from 'vue';
import nav from './components/desktop/nav';

Vue.component('NavComponent', nav);

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
img {
  width: 100%;
}
</style>

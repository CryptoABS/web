<template>
  <div id="app">
    <NavComponent></NavComponent>
    <SectionOne></SectionOne>
    <SectionTwo></SectionTwo>
    <!--<img src="./assets/eth.jpg">-->
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
import SectionOne from './components/desktop/sectionOne';
import SectionTwo from './components/desktop/sectionTwo';

Vue.component('NavComponent', nav);
Vue.component('SectionOne', SectionOne);
Vue.component('SectionTwo', SectionTwo);

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

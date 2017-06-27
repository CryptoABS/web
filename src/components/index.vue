<template>
  <div class="hello">
    <h1>{{ $t('header') }}</h1>
    <h1>{{ $t('content', {'type': 'nice'}) }}</h1>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import Vue from 'vue';
import footer from './desktop/footer';

Vue.component('FooterComponent', footer);

export default {
  name: 'Home',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

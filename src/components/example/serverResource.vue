<template>
  <div class="container">
    <h1>{{ msg }}</h1>
    <h2>{{comment}}</h2>
    <ul v-if="sliceConfig && sliceConfig.length">
      <li v-for="config of sliceConfig">
        <p><strong>{{ config.id }}</strong></p>
        <p>{{ config.filePathZh}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import sliceConfig from '../../../static/site/t1687/logo/slice';

export default {
  name: 'test',
  data() {
    return {
      msg: '後台資源',
      comment: '讀取後台/site/t1687/logo/slice的config',
      posts: [],
      postBody: '',
      postdata: {},
      sliceConfig,
      errors: [],
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

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.content {
  width: 400px;
  height: 300px;
  background: black;
  color: white;
  margin: 6px;
  padding: 3px 5px;
  overflow: auto;
}

.success {
  color: green;
}
</style>

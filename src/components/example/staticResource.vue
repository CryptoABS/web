<template>
  <div class="test">
    <h1>{{msg}}</h1>
    <h2>{{comment}}</h2>
    <img class="ui small image" :src="wechatpay">
    <img class="ui small image" :src="panda">
    <img class="ui small image" :src="nutcracker">
  </div>
</template>

<script>
import wechatpay from '../../../static/wechatpay.jpg';
import panda from '../../../static/panda.png';
import nutcracker from '../../../static/nutcracker.png';

export default {
  name: 'test',
  data() {
    return {
      msg: '測試讀取靜態資源',
      comment: '讀取../../../static/底下的圖片',
      wechatpay,
      panda,
      nutcracker,
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
  background: #3399ff;
  list-style-type: none;
  padding: 0;
}

li {
  background: #cce5ff;
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

/*.test {
  font-size: 40px;
  background: blue;
  color: white;
}*/
</style>

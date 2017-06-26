<template>
  <div class="container">
    <h1>{{ msg }}</h1>
    <h2>{{ comment }}</h2>
    <div>
      <button v-on:click="postPost">使用POST</button>
    </div>
    <div class="content">
      <div v-if="postdata.body && postdata.body.length">
        <div class="success">Success!</div>
        <p><strong>
          post.title: {{ postdata.body }}
        </strong></p>
        <p>
          post.body: {{ postdata.id }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'test',
  data() {
    return {
      msg: 'api資源',
      comment: '使用post接通http://jsonplaceholder.typicode.com/posts',
      posts: [],
      postBody: '',
      postdata: {},
      errors: [],
    };
  },

  // Fetches posts when the component is created.

  methods: {
    postPost() {
      axios.post('http://jsonplaceholder.typicode.com/posts', {
        body: 'pass data',
      })
      .then((response) => {
        this.postdata = response.data;
      })
      .catch((e) => {
        this.errors.push(e);
      });
    },
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

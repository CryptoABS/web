<template>
  <div class="test">
    <h1>{{ msg }}</h1>
    <h2>測試GET API: http://jsonplaceholder.typicode.com/posts</h2>
    <h2>{{ postdata.body }} {{ postdata.id }}</h2>
    <ul v-if="posts && posts.length">
      <li v-for="post of posts">
        <p><strong>{{ post.title }}</strong></p>
        <p>{{ post.body }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'test',
  data() {
    return {
      msg: 'vue 測試 GET預載',
      posts: [],
      postBody: '',
      postdata: {},
      errors: [],
    };
  },

  // Fetches posts when the component is created.
  created() {
    axios.get('http://jsonplaceholder.typicode.com/posts')
    .then((response) => {
      // JSON responses are automatically parsed.
      this.posts = response.data;
    })
    .catch((e) => {
      this.errors.push(e);
    });
  },

  methods: {
    getPost() {
      axios.get('http://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        // JSON responses are automatically parsed.
        this.posts = response.data;
      })
      .catch((e) => {
        this.errors.push(e);
      });
    },
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

<template>
  <div>
    <div>
      {{counter}}
    </div>
    <button v-on:click="add()">Click Me</button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        counter: 100,
      };
    },
    methods: {
      add() {
        this.counter += 1;
        /* eslint-disable */
        console.log('add', this.counter);
      },
    },
  };
</script>

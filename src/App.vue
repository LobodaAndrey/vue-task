<template>
  <div id="app">
    <div class="post" v-for="post in posts" :key="post.id">
      <h2>{{post.title}}</h2>
      <p>{{post.body}}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      posts: []
    }
  },
  async mounted() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
    const posts = await res.json();
    this.posts = posts;
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
  margin: 60px auto;
  width: 400px;
}
.post {
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 1rem;
}

</style>

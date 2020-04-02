<template>
<form @submit.prevent="submit">
  <input v-model="title" placeholder="title" type="text">
  <input v-model="body" placeholder="body" type="text">
  <button type="submit">Create Post</button>
  <hr>
</form>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  data() {
    return {
      title: '',
      body: ''
    }
  },
  methods: {
    ...mapMutations(['createPost']),
    submit() {
      this.createPost({
        title: this.title,
        body: this.body,
        id: Date.now()
      })
      this.title = this.body = '';
    }
  }
}
</script>

<style scoped>
input {
  display: block;
  width: 100%;
  border: 1px solid grey;
  padding: 10px;
  margin-bottom: 10px;
}
</style>
<template>
  <div>
    <h2>List of users</h2>
    <p style="text-align: left" :key="i" v-for="(item, i) of users.list">{{i}}:{{item['login']}}</p>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapState } from "vuex";

export default {
  computed: mapState(["users"]),
  methods: {
    ...mapActions(["fetchUsers"])
  },
  mounted() {
    this.fetchUsers();
  }
};
</script>

<style>
</style>
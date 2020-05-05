<template>
  <div id="app">
    <div class="flex align-center">
      <h1 class="page-heading">Super test app</h1>
      <el-button type="warning" plain v-if="user.isAuth" @click="logout">Logout</el-button>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import { mapActions, mapMutations, mapState } from "vuex";
import Login from "./views/login";

export default {
  name: "App",
  computed: mapState(["user"]),
  methods: {
    ...mapActions(["auth"]),
    ...mapMutations(["cleanUser"]),
    logout: function() {
      this.cleanUser();
      this.$router.push("/login");
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  max-width: 800px;
}
</style>

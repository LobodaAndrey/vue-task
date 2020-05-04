<template>
  <div>
    <h1>Please Login</h1>
    <el-form class="login-form" ref="form" label-width="120px">
      <el-form-item label="Login">
        <el-input v-model="login"></el-input>
      </el-form-item>
      <el-form-item label="Password">
        <el-input v-model="password" show-password></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">Sign in</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      login: "",
      password: ""
    };
  },
  
  methods: {
    ...mapActions(["signIn"]),
    async onSubmit() {
      const user = {
        login: this.login,
        password: this.password
      }
      await this.signIn(user);
      this.$router.push('/');
    }
  }
};
</script>

<style>
  .login-form {
    max-width: 400px;
    margin: 0 auto;
    padding-top: 20px;
  }
</style>
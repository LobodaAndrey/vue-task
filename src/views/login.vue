<template>
  <div>
    <h1>Please Login</h1>
    <small>Email: any valid email address. Password: 123</small>
    <el-form class="login-form" ref="form" label-width="120px">
      <el-form-item label="Login">
        <el-input v-model="login"></el-input>
      </el-form-item>
      <el-form-item label="Password">
        <el-input v-model="password" show-password></el-input>
      </el-form-item>
      <el-form-item>
        <el-button :loading="loading" type="primary" @click="onSubmit">Sign in</el-button>
      </el-form-item>
    </el-form>
    <span class="error-msg" v-if="error">{{error}}</span>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      login: "",
      password: "",
      loading: false,
      error: null
    };
  },

  methods: {
    ...mapActions(["signIn"]),
    validateEmail(email) {
      const data = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return data.test(email);
    },
    async onSubmit() {
      this.loading = true;
      this.error = null;
      try {
        if (!this.validateEmail(this.login)) {
          this.error = "Please put valid email address";
          return;
        }
        const user = {
          login: this.login,
          password: this.password
        };

        const res = await this.signIn(user);
        if (res && res.status !== 200) {
          throw new Error(res.message);
        }
        this.$router.push("/");
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
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
.error-msg {
  color: red;
  margin-left: 40px;
  font-size: 0.7rem;
}
</style>
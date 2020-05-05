<template>
  <div>
    <div class="flex align-center">
      <h2 class="page-heading">Single user page</h2>
      <el-button size="mini" type="info" plain @click="backToMain">Back to List</el-button>
      <div class="user-info">
        <div class="av-wrapper">
          <el-avatar v-if="userInfo['avatar_url']" :size="150" :src="userInfo['avatar_url']"></el-avatar>
        </div>
        <p class="text-left" :key="prop" v-for="(value, prop) in userInfo">
          <strong>{{prop}}:</strong>
          {{value || 'no data'}}
        </p>
      </div>
    </div>
    <h2 v-if="notFoundUser">User not found...</h2>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      userId: null,
      userInfo: {},
      notFoundUser: false
    };
  },
  computed: mapState(["users"]),
  methods: {
    ...mapActions(["fetchUsers"]),
    backToMain: function() {
      this.$router.go(-1);
    }
  },
  async created() {
    this.userId = this.$route.params.id;
    if (this.users.list.length < 1) {
      await this.fetchUsers();
    }
    this.userInfo =
      this.users.list.find(el => el.id.toString() === this.userId) || {};
    if (Object.keys(this.userInfo).length < 1) {
      this.notFoundUser = true;
    }
  }
};
</script>

<style>
.av-wrapper {
  max-width: 200px;
}
.align-center {
  align-items: center;
}
.page-heading {
  margin-right: 20px;
}
.text-left {
  text-align: left;
}
</style>
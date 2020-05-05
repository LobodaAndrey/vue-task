<template>
  <div>
    <h2>List of users</h2>
    <ul class="flex">
      <li :key="i" v-for="(item, i) of users.list" class="user-item" @click="goToSingle(item)">
        <div class="flex">
          <el-avatar :size="50" :src="item['avatar_url']"></el-avatar>
          <p class="user-name">{{item['login']}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapState } from "vuex";

export default {
  computed: mapState(["users"]),
  methods: {
    ...mapActions(["fetchUsers"]),
    goToSingle: function(user) {
      console.log(user);
      this.$router.push('/' + user.id);
    }
  },
  async mounted() {
    await this.fetchUsers();
  }
};
</script>

<style>
.flex {
  display: flex;
  flex-wrap: wrap;
}
.user-item {
  padding: 5px 10px;
  cursor: pointer;
  max-width: 250px;
  list-style-type: none;
  border-radius: 5px;
}
.user-item:hover {
  background-color: #d90;
  color: #fff;
  transition: all 0.5s;
}
.user-name {
  margin-left: 20px;
}
</style>
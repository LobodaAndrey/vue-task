export default {
  actions: {
    async fetchUsers(ctx, limit = '3') {
      const res = await fetch('https://api.github.com/search/users?q=repos:%3E12+followers:%3C1000&location:uk+language:python&page=1&per_page=10')
      const users = await res.json();
      if (users.items) {
        ctx.commit('updateUsersList', users.items)
      }
    }
  },
  mutations: {
    updateUsersList(state, list) {
      state.list = list;
    },
  },
  state: {
    list: []
  }
};
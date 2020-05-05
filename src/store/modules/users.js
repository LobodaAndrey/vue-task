import axios from 'axios';

export default {
  actions: {
    async fetchUsers(ctx, amount = '20') {
      const res = await axios.get(`https://api.github.com/search/users?q=repos:%3E12+followers:%3C1000&location:uk+language:python&page=1&per_page=${amount}`);
      if (res.status === 200 && res.data.items) {
        ctx.commit('updateUsersList', res.data.items)
      } else {
        throw new Error('Cant fetch request')
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
  },
  getters: {
    clearedList(state){
      return state.list.map(el => el.id)
    }
  }
};
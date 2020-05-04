export default {
  actions: {
    auth(ctx) {
      const user = localStorage.getItem('user');
      if (user) {
        ctx.commit('authUser', user);
      }
    },
    async signIn(ctx, user) {
      try {
        function fakeAuthRequest() {
          return new Promise((resolve) => {
            setTimeout(() => {
              if (user.login.includes('com')) {
                resolve({
                  username: 'user123',
                  token: '312u0u3'
                });
              }
              else {
                reject('wrong Login or Password')
              }
            }, 1000);
          });
        }
        const res = await fakeAuthRequest();
        if (res) {
          ctx.commit('signInUser', res);
        }
      } catch (error) {
        console.log('Error LOGIN', error)
      }
    },
  },
  mutations: {
    authUser(state, data) {
      if (data) {
        state.userData = JSON.parse(data);
        state.isAuth = true;
      }
    },
    signInUser(state, data) {
      localStorage.setItem('user', JSON.stringify(data));
      state.userData = data;
      state.isAuth = true;
    },
    cleanUser(state) {
      console.log('LOGGED OUT');
      localStorage.removeItem('user');
      state.userData = null;
      state.isAuth = false;
    }
  },
  state: {
    userData: null,
    isAuth: false
  },
}
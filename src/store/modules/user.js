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
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              if (user.password === '123') {
                resolve({
                  status: 200,
                  username: 'user123',
                  token: '123hjk89uja'
                });
              } else {
                reject({
                  status: 400,
                  message: 'Oops, invalid Login or password'
                })
              }
            }, 1500);
          });
        }
        const res = await fakeAuthRequest().catch(e => e);
        if (res && res.status === 200) {
          ctx.commit('signInUser', res);
        } else {
          return res;
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
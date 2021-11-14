export default {
  namespaced: true,
  state: {
    firebaseUser: { email: '', accessToken: '' },
  },
  getters: {
    firebaseUser(state) {
      return state.firebaseUser
    },
  },
  mutations: {
    UPDATE_FIREBASE_USER(state, firebaseUser) {
      state.firebaseUser = firebaseUser
    },
  },
  actions: {
    setFirebaseUser({ commit }, firebaseUser) {
      const userToSet = {
        email: firebaseUser.email,
        emailVerified: firebaseUser.emailVerified,
        uid: firebaseUser.uid,
      }
      commit('UPDATE_FIREBASE_USER', userToSet)
    },
  },
}
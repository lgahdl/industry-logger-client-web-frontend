import UserAdapter from '@/adapters/user.adapter'
import verifyIfUserIsAdmin from '@/helpers/admin-verifier'
import FirebaseService from '@/services/firebase.service'
import UserService from '@/services/user.service'

export default {
  namespaced: true,
  state: {
    me: null,
  },
  getters: {
    me(state) {
      return state.me
    },
  },
  mutations: {
    UPDATE_ME(state, me) {
      state.me = me
    },
  },
  actions: {
    async findMe(ctx) {
      const { commit } = ctx
      const user = await UserService.findMe()
      verifyIfUserIsAdmin(user)
      commit('UPDATE_ME', user)
      return user
    },
    async createMe(ctx, signedUpUser) {
      try {
        const { commit } = ctx
        const createdUser = await UserService.create(UserAdapter.convertFromSignUpToApi(signedUpUser))
        commit('UPDATE_ME', createdUser)
        return createdUser
      } catch (error) {
        console.error(error)
        console.debug(FirebaseService.verifyEmail)
        throw error
      }
    },
  },
}
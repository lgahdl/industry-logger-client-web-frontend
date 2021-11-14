<template>
  <!-- Coming soon page-->
  <div class="misc-wrapper">

    <div class="misc-inner p-2 p-sm-3">
      <div class="w-100 text-center">
        <logout-button @click="logout()" />
        <h2 class="mb-1">
          {{ $t("#NotAdmin Title") }}
        </h2>
        <p class="mb-3">
          {{ $t("#NotAdmin Description") }}
        </p>

        <b-img
          fluid
          :src="imgUrl"
          alt="Coming soon page"
        />
      </div>
    </div>
  </div>
  <!-- / Coming soon page-->
</template>

<script>
import FirebaseService from '@/services/firebase.service'
import store from '@/store'
import LogoutButton from '@/@core/layouts/components/app-navbar/components/LogoutButton'
import { mapGetters } from 'vuex'

export default {
  name: 'NotAdminVue',
  components: {
    LogoutButton,
  },
  data() {
    return {
      // eslint-disable-next-line global-require
      downImg: require('@/assets/images/pages/not-authorized.svg'),
    }
  },
  computed: {
    ...mapGetters({ user: 'user/me' }),
    imgUrl() {
      if (store.state.appConfig.layout.skin === 'dark') {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties,global-require
        this.downImg = require('@/assets/images/pages/not-authorized-dark.svg')
        return this.downImg
      }
      return this.downImg
    },
  },
  watch: {
    user(value) {
      if (value.isAdmin) {
        this.$router.push('/')
      }
    },
  },
  methods: {
    logout() {
      FirebaseService.signOut()
    },
  },
}
</script>

<style scoped>

</style>
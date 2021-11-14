import store from '@/store'
import router from '@/router'
import Vue from 'vue'

export default function onAuthStateChanged(user) {
  try {
    const currentPath = router.currentRoute.fullPath
    const currentPathIsLogin = currentPath.indexOf('/auth/login') >= 0
    const currentPathIsSignUp = currentPath.indexOf('/auth/sign-up') >= 0
    const currentPathIsValidatedEmail = currentPath.indexOf('/auth/validate-email?') >= 0
    const currentPathIsNotAuth = !currentPathIsLogin && !currentPathIsSignUp && !currentPathIsValidatedEmail
    const accessToken = Vue.$cookies.get('accessToken')
    if (currentPathIsValidatedEmail) {
      return
    }
    if (!user && currentPathIsNotAuth) {
      router.push('/auth/login').catch(() => {
      })
      return
    }
    if (user) {
      if (accessToken !== user.accessToken) {
        Vue.$cookies.set('accessToken', user.accessToken)
        if (currentPathIsNotAuth) {
          window.location.reload()
        }
      }
      store.dispatch('firebase/setFirebaseUser', user)
      store.dispatch('user/findMe')
      if (user.emailVerified && !currentPathIsNotAuth) {
        router.push('/').catch(() => {
        })
      } else if (!user.emailVerified && !currentPathIsSignUp) {
        router.push(`/auth/sign-up?step=validate-email&email=${user.email}`).catch(() => {
        })
      }
    }
  } catch (error) {
    console.error(error)
  }
}

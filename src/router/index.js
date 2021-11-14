import Vue from 'vue'
import VueRouter from 'vue-router'

// Components
import Device from '@/views/device'
import EmptyPage from '@/views/pages/empty-page'
// Routes

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/', name: 'home', component: EmptyPage, meta: { layout: 'full' },
    },
    {
      path: '/device/:macAddress', name: 'device', component: Device, meta: { layout: 'full' },
    },
    {
      path: '*',
      redirect: 'error-404',
    },
  ],
})

router.beforeEach((to, _, next) => next())

// ? For splash screen
// Remove afterEach hook if you are not using splash screen
router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = 'none'
  }
})

export default router

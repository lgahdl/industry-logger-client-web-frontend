import router from '@/router'

const redirect = () => {
  if (router.currentRoute.fullPath.indexOf('/auth') < 0) {
    router.push('/error/not-admin').catch(() => {
    })
  }
}

function verifyIfUserIsAdmin(user) {
  if (!user.isAdmin) {
    redirect()
  }
}

export default verifyIfUserIsAdmin
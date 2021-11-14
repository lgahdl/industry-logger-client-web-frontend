import Login from '@/views/auth/login'
import SignUp from '@/views/auth/sign-up'
import ValidateEmail from '@/views/auth/validate-email'

export default [
  {
    path: '/auth/login', name: 'login', component: Login, meta: { layout: 'full' },
  },
  {
    path: '/auth/sign-up', name: 'sign-up', component: SignUp, meta: { layout: 'full' },
  },
  {
    path: '/auth/validate-email', name: 'validate', component: ValidateEmail, meta: { layout: 'full' },
  },
]
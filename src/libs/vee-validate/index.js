import Vue from 'vue'
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import '@/@core/utils/validations/validations'

Vue.component('validation-provider', ValidationProvider)
Vue.component('validation-observer', ValidationObserver)

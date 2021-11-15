import Vue from 'vue'
import components from './index'

Object.values(components).forEach(value => {
  Vue.component(value.name, value)
})

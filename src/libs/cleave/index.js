import Cleave from 'cleave.js'
import Vue from 'vue'

Vue.directive('cleave', {
  inserted: (el, binding) => {
    const element = el
    element.cleave = new Cleave(el, binding.value || {})
  },
  update: (el, binding) => {
    const event = new Event('input', { bubbles: true })
    setTimeout(() => {
      const element = el
      element.cleave = new Cleave(el, binding.value || {})
      element.value = el.cleave.properties.result
      element.dispatchEvent(event)
    }, 100)
  },
})
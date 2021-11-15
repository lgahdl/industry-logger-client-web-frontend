<template>
  <div
    class="d-flex"
    style="background-color: #F3F3F3; border-radius: 18px; padding:2px; width: max-content"
    @click="handleInput"
  >
    <template v-for="(option, index) in options">
      <div
        :key="option.value"
        style="z-index:0; border-radius: 16px;
        display:flex; justify-content: center;
        align-items: center; padding: 13px; "
        :style="index===modelIndex ? {backgroundColor: 'white', boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.2)'}: {color:'#a4a4a4 !important'}"
      >
        <span class="font-weight-bolder">{{ option.label }}</span>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'SwitchButton',
  props: {
    options: {
      type: Array, // [{label: String, value: any}]
      required: true,
    },
    value: {
      type: undefined,
      required: true,
    },
  },
  data() {
    return {
      model: this.value,
    }
  },
  computed: {
    modelIndex() {
      return this.options.findIndex(option => option.value === this.model)
    },
    next() {
      if (this.options.length === this.modelIndex + 1) {
        return this.options[0].value
      }
      return this.options[this.modelIndex + 1].value
    },
  },
  methods: {
    handleInput() {
      this.model = this.next
      this.$emit('input', this.model)
    },
  },
}
</script>

<style scoped>

</style>
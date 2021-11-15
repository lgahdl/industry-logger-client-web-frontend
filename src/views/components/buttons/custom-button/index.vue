<template>
  <b-button
    style="border-radius:13px; width: 100%;
                     height: auto; font-size:15px;
                     padding: 0.2rem; box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);"
    :style="buttonStyle"
    :variant="variant"
    :to="route"
    @click="handleClick"
  >
    <slot name="button-content">
      <template v-if="icon">
        <feather-icon
          :icon="icon"
          class="mr-1"
        />
      </template>
      <span class="font-weight-bolder">{{ title }}</span>
      <template v-if="appendIcon">
        <feather-icon
          :icon="appendIcon"
          class="ml-1"
        />
      </template>
    </slot>
  </b-button>
</template>

<script>
export default {
  name: 'CustomButton',
  props: {
    icon: {
      type: String,
      required: false,
      default: null,
    },
    appendIcon: {
      type: String,
      required: false,
      default: null,
    },
    title: {
      type: String,
      required: false,
      default: '',
    },
    variant: {
      type: String,
      required: false,
      default: 'secondary',
    },
    buttonStyle: {
      type: undefined,
      required: false,
      default: null,
    },
    route: {
      type: undefined,
      required: false,
      default: null,
    },
  },
  methods: {
    handleClick() {
      this.$emit('click')
    },
  },
}
</script>

<style scoped>

</style>
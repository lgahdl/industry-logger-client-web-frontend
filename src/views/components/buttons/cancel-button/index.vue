<template>
  <b-button
    v-ripple.400="'rgba(186, 191, 199, 0.15)'"
    :type="type"
    :variant="variant"
    style="border-radius: 4px"
    @click="$emit('click')"
  >
    <feather-icon
      icon="XIcon"
      class="mr-1"
    />
    <b>Cancelar</b>
  </b-button>
</template>

<script>
export default {
  name: 'CancelButton',
  props: {
    type: {
      type: String,
      required: false,
      default: 'button',
    },
    variant: {
      type: String,
      required: false,
      default: 'outline-primary font-weight-bolder',
    },
  },
}
</script>

<style scoped>

</style>
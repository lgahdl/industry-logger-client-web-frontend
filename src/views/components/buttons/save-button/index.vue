<template>
  <b-button
    v-ripple.400="'rgba(255, 255, 255, 0.15)'"
    :variant="variant"
    :type="type"
    class="font-weight-bolder"
    style="border-radius: 4px"
    @click="$emit('click')"
  >
    <feather-icon
      icon="SaveIcon"
      class="mr-1"
    />
    <b>Salvar</b>
  </b-button>
</template>

<script>
export default {
  name: 'SaveButton',
  props: {
    variant: {
      type: String,
      required: false,
      default: 'secondary',
    },
    type: {
      type: String,
      required: false,
      default: 'submit',
    },
  },
}
</script>

<style scoped>

</style>
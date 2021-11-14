<template>
  <b-button variant="flat-dark-grey d-flex align-items-center font-weight-bolder">
    <feather-icon
      icon="HelpCircleIcon"
      class="mr-1"
      size="22"
    />
    <span>{{ $t("#Button Help") }}</span>
  </b-button>
</template>

<script>
export default {
  name: 'HelpButton',
}
</script>

<style scoped>

</style>

<template>
  <b-button
    variant="flat-dark-grey d-flex align-items-center font-weight-bolder"
    @click="$emit('click')"
  >
    <feather-icon
      icon="PowerIcon"
      class="mr-1"
      size="22"
    />
    <span>{{ $t("#Button Logout") }}</span>
  </b-button>
</template>

<script>
export default {
  name: 'LogoutButton',
}
</script>

<style scoped>

</style>

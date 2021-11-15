<template>
  <b-card
    no-body
    class="pl-5 pr-0 box-shadow-0 w-100 pr-md-3"
  >
    <div class="pl-1">
      <slot name="default" />
    </div>
  </b-card>
</template>

<script>
export default {
  name: 'PageContent',
}
</script>

<style scoped>

</style>
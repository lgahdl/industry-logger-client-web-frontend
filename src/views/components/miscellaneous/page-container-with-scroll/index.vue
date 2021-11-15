<template>
  <div
    class="d-flex flex-column"
    style="flex:1; overflow:hidden"
  >
    <perfect-scrollbar
      class="scroll-area flex-grow-1"
    >
      <slot name="default" />
    </perfect-scrollbar>
  </div>
</template>

<script>
export default {
  name: 'PageContainerWithScroll',
}
</script>

<style scoped>

</style>
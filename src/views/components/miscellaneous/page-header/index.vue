<template>
  <div class="w-100">
    <div class="pl-5 py-2 pb-3 w-100">
      <div class="pl-1 w-100">
        <h1 class="font-weight-bolder">
          {{ title }}
        </h1>
      </div>
    </div>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'PageHeader',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>

</style>
<template>
  <app-chart
    :option-data="option"
  />
</template>

<script>
import appChart from './app-chart'

export default {
  name: 'IndexVue',
  components: {
    appChart,
  },
  props: {
    option: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>

</style>

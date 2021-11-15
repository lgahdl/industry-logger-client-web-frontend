<template>
  <e-charts
    ref="line"
    autoresize
    :options="line"
    theme="theme-color"
    auto-resize
  />
</template>

<script>
import ECharts from 'vue-echarts'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import 'echarts/lib/chart/line'
import theme from './theme.json'

ECharts.registerTheme('theme-color', theme)

export default {
  components: {
    ECharts,
  },
  props: {
    optionData: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      line: {
        // Make gradient line here
        title: {
          ...this.optionData.title,
        },
        legend: { ...this.optionData.legend },
        grid: {
          left: '10%',
          right: '10%',
          bottom: '30px',
        },
        tooltip: {
          trigger: 'axis',
          ...this.optionData.tooltip,
        },
        xAxis: [{
          ...this.optionData.xAxis,
          type: 'category',
          boundaryGap: false,
        }],
        yAxis: {
          type: 'value',
          splitLine: { show: false },
        },
        series: this.optionData.series,
      },
    }
  },
}
</script>

<style lang="scss">

.echarts {
  width: 100% !important;
}

</style>

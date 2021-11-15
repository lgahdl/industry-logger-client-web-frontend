<template>
  <div
    v-if="tableField"
    style="width:100vw; border: 1px solid rgba(255,255,255,0.2); border-radius: 13px; padding: 2rem;"
  >
    <div class="d-flex justify-content-between">
      <h4>{{ tableField.name }}</h4>
      <div />
    </div>
    <hr>
    <div
      v-if="tableField.description"
      class="d-flex justify-content-between pt-1"
    >
      <h6>{{ tableField.description }}</h6>
      <div />
    </div>
    <hr v-if="tableField.description">
    <div class="d-flex justify-content-between pt-1">
      <h6>{{ tableField.prepend }}</h6>
      <div>
        <h6> {{ tableField.values[0] }} {{ tableField.append }}</h6>
      </div>
    </div>
    <hr>
    <div class="d-flex justify-content-between pt-1">
      <line-chart
        :option="optionLineChart"
      />
    </div>
  </div>
</template>

<script>
import LineChart from '@/views/components/charts/line-chart'
import echarts from 'echarts'

export default {
  name: 'IndexVue',
  components: { LineChart },
  props: {
    tableField: {
      type: undefined,
      required: true,
    },
  },
  computed: {
    optionLineChart() {
      const reversedDates = this.tableField.dates.slice().reverse()
      const reversedValue = this.tableField.values.slice().reverse()
      const xAxis = {
        data: reversedDates,
        type: 'date',
        boundaryGap: false,
        axisLabel: {
          formatter(value) {
            return echarts.format.formatTime('dd/MM/yyyy hh:mm:ss', value)
          },
        },
        nameLocation: 'middle',
        nameGap: 50,
        nameTextStyle: { fontSize: 12 },
        splitLine: {
          show: true,
        },
      }
      const series = [{ name: this.tableField.name, data: reversedValue, type: 'line' }]
      return {
        title: {
          text: this.tableField.name,
          left: 'center',
        },
        legend: {
          show: false,
        },
        tooltip: {
          trigger: 'item',
          formatter(params) {
            const dateFormatted = echarts.format.formatTime('dd/MM/yyyy hh:mm:ss', params.name)
            const name = params.seriesName
            const { value } = params
            return `${dateFormatted} <br/> ${name} : ${value}`
          },
        },
        xAxis,
        series,
        dataZoom: [{
          type: 'inside',
        }],
      }
    },

  },
}
</script>

<style scoped>

</style>
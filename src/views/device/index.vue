<template>
  <div style="height: 100vh; width: 100vw; overflow: hidden">
    <page-container-with-scroll
      v-if="deviceInfo"
      style="max-height:100vh; max-width: 100vw;"
    >
      <div class="m-2">
        <b-card no-body>
          <b-card-header><h1>Dados do Dispositivo {{ deviceInfo.name }}</h1></b-card-header>
          <b-card-body>
            <div class="d-flex justify-content-between">
              <span>Última Atualização:</span>
              <span v-if="deviceInfo.logs.length>0">
                {{ echarts.format.formatTime('dd/MM/yyyy hh:mm:ss', deviceInfo.logs[0].createdAt) }}
              </span>
            </div>
          </b-card-body>
        </b-card>
        <template v-for="table in deviceInfo.tables">
          <table-card
            :key="table.id"
            :table="table"
          />
        </template>
      </div>
    </page-container-with-scroll>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import echarts from 'echarts'
import TableCard from './components/table-card'

export default {
  name: 'IndexVue',
  components: {
    TableCard,
  },
  data() {
    return {
      echarts,
      macAddress: null,
      initialDate: '2020-10-10',
      finalDate: '2021-11-16',
      interval: null,
      /* initialDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(), */
      /* finalDate: new Date().toISOString(), */
    }
  },
  computed: {
    ...mapGetters({ deviceInfo: 'deviceInfo/deviceInfo' }),
  },
  beforeMount() {
    this.macAddress = this.$route.params.macAddress
    // this.interval = setInterval(() => {
    this.$store.dispatch('deviceInfo/findByMacAddress', {
      macAddress: this.macAddress,
      initialDate: this.initialDate,
      finalDate: this.finalDate,
    })
    // }, 1000)
  },
  methods: {},
}
</script>

<style scoped>

</style>
<template>
  <div>
    <b-card
      no-body
    >
      <b-card-header>
        <h1>{{ table.name }}</h1>
      </b-card-header>
      <b-card-body>
        <h5 class="pb-2">
          {{ table.description }}
        </h5>
        <template v-for="tableField in table.tableFields">
          <div
            :key="`tableField-${tableField.id}`"
            class="w-100 d-flex align-items-center justify-content-center pb-1"
          >
            <table-field-card
              :table-field="tableField"
            />
          </div>
        </template>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
import TableFieldCard from '../table-field-card'

export default {
  name: 'IndexVue',
  components: { TableFieldCard },
  props: {
    table: {
      type: undefined,
      required: true,
    },
  },
}
</script>

<style scoped>

</style>
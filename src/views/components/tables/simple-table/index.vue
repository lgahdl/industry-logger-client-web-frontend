<template>
  <table
    class="table-borderless table-responsive"
    style="display:table"
  >
    <thead>
      <th
        v-if="draggable"
        style="width:5%"
      />
      <template v-for="(header) in headers">
        <th
          :key="header.name"
          :style="{width:Math.floor(100/headers.length)+'%', ...header.style}"
          :class="header.class"
        >
          <slot
            :name="'header('+header.name+')'"
            :header="header"
          >
            {{ header.title !== null || header.title !== '' ? header.title : header.name }}
          </slot>
        </th>
      </template>
    </thead>
    <draggable
      :list="items"
      tag="tbody"
      :sort="draggable"
      @change="onDragChange"
      @end="onDragEnd"
    >
      <tr
        v-for="(item, index) in items"
        :key="item[keyFieldName]"
      >
        <td v-if="draggable">
          <div
            class="d-flex flex-row align-items-center justify-content-center"
            :style="dragCellStyle"
          >
            <feather-icon
              icon="AlignJustifyIcon"
              size="22"
            />
          </div>
        </td>
        <template v-for="(header) in headers">
          <td
            :key="[item[keyFieldName], header.name].join('-')"
            :class="header.cellClass ? header.cellClass : ''"
            :style="header.cellStyle"
          >
            <slot
              :name="'cell('+header.name+')'"
              :item="item"
              :index="index"
            >{{ at(item, [header.name])[0] }}
            </slot>
          </td>
        </template>
      </tr>
    </draggable>
  </table>
</template>

<script>
import _ from 'lodash'
import Draggable from 'vuedraggable'

export default {
  name: 'SimpleTable',
  components: { Draggable },
  props: {
    headers: {
      type: Array,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
    keyFieldName: {
      type: String,
      required: false,
      default: 'id',
    },
    draggable: {
      type: Boolean,
      required: false,
      default: false,
    },
    onDragEnd: {
      type: Function,
      required: false,
      default: () => {
      },
    },
    onDragChange: {
      type: Function,
      required: false,
      default: () => {
      },
    },
    dragCellStyle: {
      type: undefined,
      required: false,
      default: () => ({}),
    },
  },
  methods: {
    at(item, location) {
      return _.at(item, location)
    },
  },
}
</script>

<style scoped>

</style>
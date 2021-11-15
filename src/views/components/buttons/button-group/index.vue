<template>
  <b-button-group
    class="d-flex flex-row"
  >
    <template v-for="n in size">
      <div
        :key="n"
        :class="n==1 ?'firstButton' : n==size ? 'lastButton' : 'midButton'"
      >
        <slot
          :name="`button(${n})`"
        />
      </div>
    </template>
  </b-button-group>
</template>

<script>
export default {
  name: 'ButtonGroup',
  props: {
    size: {
      type: Number,
      required: true,
    },
  },
}
</script>

<style lang="scss">
.firstButton .btn {
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.25), 0px 2px 2px rgba(0, 0, 0, 0.1);
  border-radius: 13px 0 0 13px !important;

}

.lastButton .btn {
  width: 100%;
  border-radius: 0 13px 13px 0 !important;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.25), 0px 2px 2px rgba(0, 0, 0, 0.1);
}

.midButton .btn {
  borderRadius: 0 !important;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.25), 0px 2px 2px rgba(0, 0, 0, 0.1);
}

</style>
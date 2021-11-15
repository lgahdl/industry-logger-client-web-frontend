<template>
  <validation-provider
    #default="validationContext"
    :name="name"
  >
    <b-form-group
      :label="label"
    >
      <b-form-datepicker
        v-model="model"
        class="form-datepicker"
        :date-format-options="dateFormatOptions"
        :locale="locale"
        :right="right"
        :hide-header="hideHeader"
        :label-no-date-selected="$t('#FormDatePlaceholder No Date')"
        @context="getValidationState(validationContext)"
        @input="handleInput"
      />
      <span class="undermessage-error">
        {{ validationContext.errors[0] }}
      </span>
    </b-form-group>
  </validation-provider>
</template>

<script>
import i18n from '@/libs/i18n'

export default {
  name: 'FormDate',
  props: {
    value: {
      type: undefined,
      required: true,
    },
    locale: {
      type: String,
      required: false,
      default: i18n.locale,
    },
    dateFormatOptions: {
      type: undefined,
      required: false,
      default: () => ({
        year: 'numeric', month: '2-digit', day: '2-digit', format: 'dd/mm/yyyy',
      }),
    },
    getValidationState: {
      type: Function,
      required: false,
      default: () => (() => {
      }),
    },
    right: {
      type: Boolean,
      required: false,
      default: true,
    },
    hideHeader: {
      type: Boolean,
      required: false,
      default: true,
    },
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      model: this.value,
    }
  },
  methods: {
    handleInput() {
      this.$emit('input', this.model)
    },
  },
}
</script>

<style scoped>

</style>
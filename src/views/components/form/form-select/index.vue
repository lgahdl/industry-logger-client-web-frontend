<template>
  <validation-provider
    #default="validationContext"
    :name="name"
    :rules="rules"
  >
    <b-form-group
      :label="title"
      label-for="select"
    >
      <v-select
        :id="id"
        v-model="content"
        :taggable="taggable"
        :push-tags="pushTags"
        :multiple="multiple"
        :label="label"
        :options="options"
        :create-option="createOptions"
        :reduce="reduce"
        :placeholder="placeholder"
        :get-option-label="getOptionLabel"
        :filterable="filterable"
        :get-option-key="getOptionKey"
        @input="handleInput"
        @search="search"
      >
        <template #no-options="{}">
          {{ $t("#FormInputSelect No Options") }}
        </template>
      </v-select>
      <span
        class="undermessage-error"
      >
        {{ validationContext.errors[0] }}
      </span>
    </b-form-group>
  </validation-provider>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'FormSelect',
  props: {
    id: {
      type: String,
      required: false,
      default: 'select',
    },
    options: {
      type: undefined,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: false,
      default: undefined,
    },
    title: {
      type: undefined,
      required: true,
    },
    taggable: {
      type: Boolean,
      required: false,
      default: false,
    },
    multiple: {
      type: Boolean,
      required: false,
      default: false,
    },
    pushTags: {
      type: Boolean,
      required: false,
      default: false,
    },
    reduce: {
      type: Function,
      required: false,
      default: value => value,
    },
    createOptions: {
      type: Function,
      required: false,
      default: undefined,
    },
    rules: {
      type: String,
      required: false,
      default: '',
    },
    value: {
      type: undefined,
      required: true,
    },
    placeholder: {
      type: String,
      required: false,
      default: '',
    },
    search: {
      type: Function,
      required: false,
      default: value => value,
    },
    filterable: {
      type: Boolean,
      default: true,
    },
    getOptionKey: {
      type: Function,
      default(option) {
        if (option && option.id) {
          return option.id
        }
        if (option && option.value) {
          return option.value
        }
        return JSON.stringify(option)
      },
    },
  },
  data() {
    return { content: this.value }
  },
  methods: {
    handleInput() {
      this.$emit('input', this.content)
    },
    getOptionLabel(option) {
      const [result] = _.at(option, this.label)
      return result
    },
  },
}
</script>

<style scoped>

</style>
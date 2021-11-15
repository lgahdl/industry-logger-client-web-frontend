<template>
  <validation-provider
    #default="validationContext"
    :name="name"
    :rules="rules"
  >
    <b-form-group
      :label="title"
      label-for="text-input"
    >
      <b-form-input
        v-if="!!cleaveOptions"
        :id="id"
        v-model="fieldValue"
        v-cleave="cleaveOptions"
        :disabled="disabled"
        class="b-form-input"
        :state="getValidationState(validationContext)"
        trim
        :type="type"
        :placeholder="placeholder"
        @input="handleInput"
      />
      <b-form-input
        v-else
        :id="id"
        v-model="fieldValue"
        :disabled="disabled"
        class="b-form-input"
        :state="getValidationState(validationContext)"
        trim
        :type="type"
        :placeholder="placeholder"
        @input="handleInput"
      />
      <div style="height:29px">
        <b-form-invalid-feedback>
          {{ validationContext.errors[0] }}
        </b-form-invalid-feedback>
      </div>
    </b-form-group>
  </validation-provider>
</template>

<script>
export default {
  name: 'FormInput',
  props: {
    id: {
      type: String,
      required: false,
      default: null,
    },
    name: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: false,
      default: '',
    },
    title: {
      type: undefined,
      required: true,
    },
    rules: {
      type: undefined,
      required: false,
      default: '',
    },
    value: {
      type: undefined,
      required: true,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    type: {
      type: String,
      required: false,
      default: 'text',
    },
    cleaveOptions: {
      type: undefined,
      required: false,
      default: undefined,
    },
  },
  data() {
    return {
      fieldValue: this.value,
    }
  },
  methods: {
    getValidationState: ({
      dirty, validated, required: fieldRequired, changed, valid = null,
    }) => {
      const result = dirty || validated ? valid : null
      return !fieldRequired && !changed ? null : result
    },
    handleInput() {
      this.$emit('change', this.fieldValue)
      this.$emit('input', this.fieldValue)
    },
  },
}
</script>

<style scoped>

</style>
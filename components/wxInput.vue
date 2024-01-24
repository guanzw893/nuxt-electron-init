<template>
  <input
    class="w-48 h-9 text-sm border outline-none transition-all duration-200 focus:border-primary-500 text-gray-500 px-3 py-2 rounded focus:ring-primary-500"
    :name="props.name"
    :type="props.type"
    :autocomplete="props.autocomplete"
    :placeholder="props.placeholder"
    @input="
      $emit('update:modelValue', ($event.target as HTMLInputElement)?.value)
    "
    :value="props.modelValue"
  />
</template>

<script setup lang="ts">
type Props = {
  name?: string
  type?: 'text' | 'password'
  placeholder?: string
  modelValue?: string
  autocomplete?: 'on' | 'off'
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  placeholder: '请输入内容',
  autocomplete: 'on'
})
</script>

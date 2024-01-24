<template>
  <button
    :type="htmlType"
    :class="{
      'text-black': type === 'default',
      'text-green-500': type === 'primary',
      'text-red-500': type === 'danger'
    }"
    class="bg h-8 w-24 cursor-pointer rounded-sm bg-[#e9e9e9] text-center text-sm leading-8 hover:bg-zinc-300"
    @click="emit('click', $event)"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
type Props = {
  type?: 'default' | 'primary' | 'danger'
  htmlType?: 'submit' | 'reset' | 'button'
}

const { type, htmlType } = withDefaults(defineProps<Props>(), {
  type: 'default',
  htmlType: 'button'
})

const emit = defineEmits<{ click: [event: Event] }>()
</script>

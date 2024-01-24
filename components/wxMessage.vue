<template>
  <div
    class="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-44 shadow-md flex flex-col bg-white"
  >
    <div class="w-full text-center flex-1 flex items-center justify-center">
      {{ props.msg }}
    </div>
    <div class="flex-1 flex items-center justify-center">
      <slot v-if="$slots.default" />
      <wxButton type="primary" @click="emit('handleClick', $event)"
        >知道了</wxButton
      >
    </div>
  </div>
</template>

<script setup lang="ts">
type Props = {
  msg: string
  show?: boolean
}

const props = withDefaults(defineProps<Props>(), {})

const emit = defineEmits<{ handleClick: [event: Event] }>()
</script>

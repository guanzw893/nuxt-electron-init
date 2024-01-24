<template>
  <form @submit.prevent="emit('submit', $event)">
    <slot />
  </form>
</template>

<script setup lang="ts">
const emit = defineEmits<{ submit: [event: Event] }>()
</script>

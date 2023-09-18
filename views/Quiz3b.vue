<template>
  <div>
    <h3>Child Component</h3>

    <!-- 1. Using Props -->
    <p>{{ message }}</p>
    
    <!-- 3. Using Slots -->
    <slot>This message is from Child</slot>
  </div>
</template>

<script setup>
import { defineProps, onMounted, defineEmits } from 'vue';

// 1. Prop in child component
const { message } = defineProps(['message']);

// 2. Using Events [$emit]
const emits = defineEmits();

onMounted(() => {
  emits('message-to-child', 'Message from Child'); // Emitting an event back to the parent
});
</script>

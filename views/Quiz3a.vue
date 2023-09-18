<template>
    <div>
      <h3>Parent Component</h3>
  
      <!-- 1. Using Props -->
      <ChildComponent :message="messageFromParent" />
  
      <!-- 2. Using Events [$emit] -->
      <button @click="sendMessageToChild">Send Message to Child</button>
  
      <!-- 3. Using Slots -->
      <ChildComponent>
        <!-- Slot Content -->
        <p>This content is passed through a slot.</p>
      </ChildComponent>
    </div>
  </template>
  
  <script setup>
  import { ref, defineEmits } from 'vue';
  import ChildComponent from './Quiz3b.vue';
  
  const messageFromParent = ref('Hello from Parent');
  
  // 2. Using Events [$emit]
  const sendMessageToChild = () => {
    // Emit an event to the child component
    defineEmits().messageToChild('Message from Parent');
  };
  </script>
  
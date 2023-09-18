<template>
    <div>
      <p>{{ message }}</p>
      <button @click="updateMessage">Change Message</button>
    </div>
</template>
  
<script setup>
  import { ref, watch } from 'vue';
  
  const messages = ['Hello World!', 'Random Message 1', 'Random Message 2', 'Another Message'];
  const messageIndex = ref(0);
  
  const message = ref(messages[messageIndex.value]);
  
  const updateMessage = () => {
    // Generate a random index to select a message from the array
    const randomIndex = Math.floor(Math.random() * messages.length);
    
    // Update the message index with the randomly selected index
    messageIndex.value = randomIndex;
  };
  // Using watchers
  watch(messageIndex, (newValue) => {
    // Update the message with the text at the new index
    message.value = messages[newValue];
  });
</script>
  
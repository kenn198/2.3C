<style>
button{
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
}
.space{
    margin: 0.2rem;
}
</style>
<template>
    <div>
        <!-- Inline Event Handler -->
        <button @click="inlineClickHandler">Inline Click Handler</button>
        Click Count: {{ clickCount }}
        <!-- Method Event Handler -->
        <button @click="methodClickHandler">Method Click Handler</button>
        <!-- Text Input -->
        <input class="space" type="text" v-model="textInput" />

        <!-- Checkbox -->
        <input class="space" type="checkbox" v-model="isChecked" />

        <!-- Radio Buttons -->
        <input class="space" type="radio" id="radioOption1" value="Option 1" v-model="selectedOption" />
        <label class="space" for="radioOption1">Option 1</label>

        <input class="space" type="radio" id="radioOption2" value="Option 2" v-model="selectedOption" />
        <label class="space" for="radioOption2">Option 2</label>

        <!-- Select Dropdown -->
        <select v-model="selectedItem">
        <option value="Option 1">Option 1</option>
        <option value="Option 2">Option 2</option>
        <option value="Option 3">Option 3</option>
        </select>

        <!-- Textarea -->
        <textarea class="space" v-model="textAreaInput"></textarea>

        <!-- Input with .lazy modifier -->
        <input class="space" type="text" v-model.lazy="lazyInput" />

        <!-- Input with .number modifier -->
        <input class="space" type="number" v-model.number="numericInput" />

        <!-- Input with .trim modifier -->
        <input class="space" type="text" v-model.trim="trimmedInput" />
    </div>
</template>
  
<script setup>
    // Import the `ref` function from Vue
    import { ref } from 'vue';

    // Define a ref for tracking the click count
    const clickCount = ref(0);
    // Form Inputs
    const textInput = ref('');
    const isChecked = ref(false);
    const selectedOption = ref('');
    const selectedItem = ref('');
    const textAreaInput = ref('');

    // Input Modifiers
    const lazyInput = ref('');
    const numericInput = ref(0);
    const trimmedInput = ref('');

    // Inline Event Handler
    const inlineClickHandler = () => {
        alert('Inline Click Handler');
        clickCount.value++; // Update the click count
    };

    // Method Event Handler
    const methodClickHandler = () => {
        alert('Method Click Handler');
        clickCount.value++; // Update the click count
    };
</script>
  
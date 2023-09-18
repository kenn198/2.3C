<style>
.button{
  background-color:aqua;
  block-size: 40%;
  margin : 10px;
}
</style>

<template>
  <div id="app">
    <!-- a.text interpolation -->
    <p>{{ message }}</p>
    <!-- b.raw HTML -->
    <p v-html="rawHTML"></p>
    <!-- c.attributes binding -->
    <button class="button" v-bind:id="buttonID">Button</button>
    <!-- d.javascript expressions -->
    <p>The sum of 3 + 3 = {{ sum }} - 1 = {{ sum - 1 }}</p>
    <!-- methods -->
    <!-- <p>Methods {{ sayHello() }}</p> -->
    <!-- Reactive Data using ref() -->
    <p>Counter: {{ counter }}</p>

    <!-- Computed Property -->
    <p>Computed Double: {{ doubleCounter }}</p>
    
    <!-- Button to Increment Counter -->
    <button class="button" @click="incrementCounter">Increment</button>

    <!-- Bind class using v-bind -->
    <div v-bind:class="myClass">This div has a dynamic class</div>
    
    <!-- Bind style using v-bind -->
    <div v-bind:style="myStyle">This div has dynamic styles</div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
//Text interpolation 
const message = ref("Text interpolation");
//Raw HTML
const rawHTML = ref('<span style="color:red">This should be red.</span>');   
//Attributes binding
const buttonID = ref('buttonID');
//javascript expressions
const sum = computed(() => 3 + 3);
// Create a reactive data property using ref()
const counter = ref(0);


// Data properties for class and style binding
const myClass = ref('highlight');
const myStyle = ref({ color: 'blue', fontSize: '18px' });

// Create a computed property using computed()
const doubleCounter = computed(() => counter.value * 2);
//Method to say hello with an alert
const sayHello = () => {
    alert('Hello! this is an alert')
};
// Method to increment the counter
const incrementCounter = () => {
  counter.value++;
};
</script>

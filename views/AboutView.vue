<template>
  <div>
    <!-- a. v-for with an Object -->
    <ul>
      <li v-for="(value, key) in user" :key="key">
        {{ key }}: {{ value }}
      </li>
    </ul>

    <!-- b. v-for with a Range -->
    <ul>
      <li v-for="number in range(1, 5)" :key="number">
        {{ number }}
      </li>
    </ul>

    <!-- c. v-for on <template> -->
    <ul>
      <template v-for="item in items" :key="item.id">
        <li>{{ item.name }}</li>
        <hr v-if="item.separator" />
      </template>
    </ul>

    <!-- d. v-for with v-if -->
    <ul>
      <li v-for="item in activeItems" :key="item.id">
        {{ item.name }}
      </li>
    </ul>

    <!-- e. v-for with a Component -->
    <ul>
      <my-component
        v-for="item in items"
        :key="item.id"
        :data="item"
      ></my-component>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// a. v-for with an Object
const user = ref({
  name: 'John',
  age: 30,
  email: 'john@example.com',
});

// b. v-for with a Range
const range = (start, end) => {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
};

// c. v-for on <template>
const items = ref([
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2', separator: true },
  { id: 3, name: 'Item 3' },
]);

// d. v-for with v-if
const itemsWithActiveFlag = ref([
  { name: 'Item 1', active: true },
  { name: 'Item 2', active: false },
  { name: 'Item 3', active: true },
]);
const activeItems = computed(() => itemsWithActiveFlag.value.filter(item => item.active));

// e. v-for with a Component
const itemsForComponent = ref([
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
]);
</script>


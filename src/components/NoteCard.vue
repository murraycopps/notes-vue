<template>
  <div class="card bg-yellow-300 shadow-lg rounded-md p-8 text-center">
    <h1 class="text-2xl font-bold text-gray-800 mb-4">{{ name }}</h1>
    <p class="text-lg text-gray-700">{{ text }}</p>
  </div>
</template>
  
<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
}
</script>
  
<style>
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
.card{
  width: clamp(300px, 50%, 500px);
  min-height: 300px;
}
</style>
  
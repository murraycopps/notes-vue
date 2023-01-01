<template>
  <div id="app">
    <div class="fixed m-4 flex flex-col gap-4">
      <router-link v-if="$route.path !== '/'" to="/" class="py-2 px-8 bg-yellow-300 rounded-lg">Home</router-link>
      <router-link v-if="$route.path !== '/create'" to="/create" class="py-2 px-8 bg-yellow-300 rounded-lg">Create</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
</style>
  
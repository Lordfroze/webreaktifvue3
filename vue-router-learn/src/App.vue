<script setup>
import { RouterView } from 'vue-router'; // import RouterView dari vue-router
import Nav from './component/Nav.vue'; // import Nav dari component/Nav.vue
</script>

<template>
  <Nav /> <!-- Tampilkan Nav -->
  <main>
    <RouterView />
  </main>
</template>
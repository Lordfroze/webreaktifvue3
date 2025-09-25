<script setup>
import {RouterLink} from 'vue-router'; // import RouterLink dari vue-router
</script>

<template>
    <div>
        <a href="/">Home</a>
        <a href="/about">About</a>
        |
        <RouterLink to="/">Home</RouterLink>  <!-- RouterLink ke halaman Home -->
        <RouterLink to="/about">About</RouterLink>

    </div>
</template>

<style scoped>
div {
    display: flex;
    justify-content: left;
    padding: 10px;
    gap: 10px;
    background-color: #f2f2f2;
}
</style>
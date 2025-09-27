<script setup>
import { useRoute } from 'vue-router'; // mengimport useRoute dari vue-router
import products from '../data/products.json'; // mengimport data products.json

const route = useRoute(); // mengimport useRoute dari vue-router
const {owner} = products.find( (p) => p.id === parseInt(route.params.id)); // mencari owner dengan id yang sesuai
</script>

<template>
    <div>
        <h1>Owner</h1>
        <p>{{ owner.name }}</p>
        <p>{{ owner.email }}</p>
    </div>
</template>
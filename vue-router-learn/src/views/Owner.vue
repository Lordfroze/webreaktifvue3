<script setup>
import { useRoute } from 'vue-router'; // mengimport useRoute dari vue-router
import products from '../data/products.json'; // mengimport data products.json

const route = useRoute(); // mengimport useRoute dari vue-router
const {owner} = products.find( (p) => p.id === parseInt(route.params.id)); // mencari owner dengan id yang sesuai
</script>

<template>
    <div v-if="owner"> <!-- jika const {owner} bernilai true maka tampilkan-->
        <h1>Owner</h1>
        <p>{{ owner.name }}</p>
        <p>{{ owner.email }}</p>
    </div>
    <div v-else> <!-- jika const {owner} bernilai false maka tampilkan owner not found-->
        <h1>Owner not found</h1>
        <p>Owner dengan id {{ route.params.id }} tidak ditemukan</p>
    </div>
</template>
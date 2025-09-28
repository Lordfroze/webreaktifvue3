<script setup>
import { useRoute,useRouter ,RouterView } from "vue-router"; // mengimport useRoute, RouterView dari vue-router
import products from "../data/products.json"; // mengimport data products.json
import Owner from "./Owner.vue";

const route = useRoute(); // mengimport useRoute dari vue-router
const router = useRouter();  // mengimport useROuter 
const productId = parseInt(route.params.id); // mencari product dengan id yang sesuai
// console.log(route); // menampilkan route
// console.log(router); // menampilkan router
// console.log(route.params.id)

const product = products.find( // mencari product dengan id yang sesuai
    (product) => product.id === productId // mencari product dengan id yang sesuai
);

// fungsi menampilkan owner
function showOwner() {
    router.push({name:"owner", params: {id: productId} }); // owner diperoleh dari vue-router-learn/src/router/index.js 18
}
</script>

<template>
    <div v-if="product"> <!-- jika nilai const product bernilai true maka tampilkan-->
        <h1>Product</h1>
        <div>
        <h2>{{ product.name }} - {{ product.price }}</h2> <!-- menampilkan nama dan harga product -->
        <p>year: {{ product.year }}</p> <!-- menampilkan tahun product -->
        </div>
        <button @click="showOwner">Show owner</button>
        <RouterView />
    </div>
    <div v-else> <!-- jika nilai const product bernilai false maka tampilkan product not found-->
        <h1>Product not found</h1>
        <p>Product dengan id {{ productId }} tidak ditemukan</p>
    </div>
</template>
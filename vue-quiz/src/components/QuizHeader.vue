<script setup>
import { defineProps } from 'vue'; // mengimport defineProps dari vue
const  {questionPage} = defineProps(['questionPage']); // mendefinisikan props questionPage dengan destructuring
</script>

<template>
    <header>
        <h4>Qustion {{questionPage}}</h4> <!-- menampilkan nomor halaman pertanyaan -->
        <div class="bar">
            <div class="bar-progress"></div>
        </div>
    </header>
</template>

<style scoped>
header {
    margin-top: 20px;
}

header h4 {
    font-size: 30px;
}

.bar {
    width: 100%;
    height: 50px;
    border: 3px solid #adf7b6;
}

.bar-progress {
    height: 100%;
    width: 50%;
    background-color: #adf7b6;
}
</style>
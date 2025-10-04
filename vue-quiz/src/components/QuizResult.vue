<script setup>
import { defineProps } from 'vue'; // mengimpor defineProps dari vue
import { RouterLink } from 'vue-router'; // mengimpor RouterLink dari vue-router

//  mendefinisikan props quizQuestionLength dan numberOfCorrectAnswers
const {quizQuestionLength, numberOfCorrectAnswers} = defineProps ([
    'quizQuestionLength',
    'numberOfCorrectAnswers'
])
</script>

<template>
    <section class="result">
        <p>Score : </p>
        <h1>{{ numberOfCorrectAnswers }} dari {{ quizQuestionLength }} pertanyaan dengan benar.</h1> <!-- menampilkan jumlah jawaban benar dari total pertanyaan -->
        <RouterLink to="/">Ulangi Ujian</RouterLink>
    </section>
</template>

<style scoped>
.result {
    margin-top: 30px;
}

.result p {
    font-size: 20px;
    font-weight: bold;
}

.result h1 {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 20px;
}

.result RouterLink {
    font-size: 20px;
    font-weight: bold;
    padding: 10px 20px;
    background-color: #a0ced9;
    color: #fff;
    border-radius: 5px;
}
</style>
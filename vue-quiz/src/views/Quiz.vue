<script setup>
import QuizContent from '@/components/QuizContent.vue';
import QuizHeader from '@/components/QuizHeader.vue';
import { useRoute } from 'vue-router'; // mengimport useRoute dari vue-router
import quizes from '../data/quizes.json'; // mengimport data quizes dari file json
import {ref, watch} from 'vue'; // mengimport ref dari vue

const route = useRoute(); // mengambil parameter id dari url
const quizId = parseInt(route.params.id); // mengubah parameter id menjadi integer
const quiz = quizes.find((q) => q.id === quizId); // mencari quiz dengan id yang sesuai pada quizes.json 

const currentQuestionIndex = ref(0); // membuat ref untuk menyimpan index pertanyaan yang sedang ditampilkan
console.log(quiz); // menampilkan quiz yang sedang ditampilkan

// membuat ref untuk menyimpan nomor halaman pertanyaan
const questionPage = ref(` 
    ${currentQuestionIndex.value + 1} / ${quiz.questions.length}
`);

// menggunakan fungsi watch untuk memantau perubahan nilai currentQuestionIndex dan mengupdate nilai questionPage.value
watch(
    () => currentQuestionIndex.value,
    () => {
        questionPage.value = `
        ${currentQuestionIndex.value + 1} / ${quiz.questions.length}
        `;
    }
);
</script>


<template>

    <QuizHeader :question-page="questionPage" /> <!-- menampilkan nomor halaman pertanyaan -->
    <QuizContent :question="quiz.questions[currentQuestionIndex]" />    <!-- menampilkan pertanyaan dengan request data ke QuizContent.vue -->
    <!-- menampilkan tombol next jika panjang pertanyaan lebih dari currentQuestionIndex -->
    <button @click="currentQuestionIndex++"
    :disabled="currentQuestionIndex >= quiz.questions.length - 1">Next</button>
</template>

<style scoped>
</style>
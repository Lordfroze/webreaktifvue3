<script setup>
import QuizContent from '@/components/QuizContent.vue';
import QuizHeader from '@/components/QuizHeader.vue';
import { useRoute } from 'vue-router'; // mengimport useRoute dari vue-router
import quizes from '../data/quizes.json'; // mengimport data quizes dari file json
import {ref, computed} from 'vue'; // mengimport ref dan computed dari vue

const route = useRoute(); // mengambil parameter id dari url
const quizId = parseInt(route.params.id); // mengubah parameter id menjadi integer
const quiz = quizes.find((q) => q.id === quizId); // mencari quiz dengan id yang sesuai pada quizes.json 

const currentQuestionIndex = ref(0); // membuat ref untuk menyimpan index pertanyaan
console.log(quiz); // menampilkan quiz yang sedang ditampilkan

// Menggunakan computed untuk menampilkan halaman
const questionPage = computed(() => {
    return `${currentQuestionIndex.value + 1} / ${quiz.questions.length}`;
});

// Membuat progres bar
const barPercentage = computed(() => {
    return `${(currentQuestionIndex.value + 1) / quiz.questions.length * 100}%`;
});
</script>


<template>

    <QuizHeader :question-page="questionPage" :bar-percentage="barPercentage" /> <!-- menampilkan nomor halaman pertanyaan dan bar percentage ke QuizHeader -->
    <QuizContent :question="quiz.questions[currentQuestionIndex]" />    <!-- menampilkan pertanyaan dengan request data ke QuizContent.vue -->
    <!-- menampilkan tombol next jika panjang pertanyaan lebih dari currentQuestionIndex -->
    <button @click="currentQuestionIndex++"
    :disabled="currentQuestionIndex >= quiz.questions.length - 1">Next</button>
</template>

<style scoped>
</style>
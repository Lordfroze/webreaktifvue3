<script setup>
import QuizContent from '@/components/QuizContent.vue';
import QuizHeader from '@/components/QuizHeader.vue';
import { useRoute } from 'vue-router';
import quizes from '../data/quizes.json';
import {ref} from 'vue';

const route = useRoute(); // mengambil parameter id dari url
const quizId = parseInt(route.params.id); // mengubah parameter id menjadi integer
const quiz = quizes.find((q) => q.id === quizId); // mencari quiz dengan id yang sesuai

const currentQuestionIndex = ref(0); // membuat ref untuk menyimpan index pertanyaan yang sedang ditampilkan
console.log(quiz); // menampilkan quiz yang sedang ditampilkan
</script>


<template>

    <QuizHeader/>
    <QuizContent :question="quiz.questions[currentQuestionIndex]" />    <!-- menampilkan pertanyaan yang sedang ditampilkan -->
</template>

<style scoped>
</style>
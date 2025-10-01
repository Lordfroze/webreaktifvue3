<script setup>
import QuizContent from '@/components/QuizContent.vue';
import QuizHeader from '@/components/Quizheader.vue';
import { useRoute } from 'vue-router';
import quizes from '../data/quizes.json';
import {ref} from 'vue';

const route = useRoute();
const quizId = parseInt(route.params.id);
const quiz = quizes.find((q) => q.id === quizId);

const currentQuestionIndex = ref(0);
console.log(quiz);
</script>


<template>

    <QuizHeader/>
    <QuizContent :question="quiz.questions[currentQuestionIndex]" />    
</template>

<style scoped>
</style>
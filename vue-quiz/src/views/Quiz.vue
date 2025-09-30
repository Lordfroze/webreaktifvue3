<script setup>
import QuizContent from '@/components/QuizContent.vue';
import QuizHeader from '@/components/Quizheader.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
</script>


<template>

    <QuizHeader/>
    <QuizContent/>    
</template>

<style scoped>
</style>
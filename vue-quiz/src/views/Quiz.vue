<script setup>
import QuizContent from '@/components/QuizContent.vue'; // mengimport QuizContent.vue
import QuizHeader from '@/components/QuizHeader.vue'; // mengimport QuizHeader.vue
import QuizResult from '@/components/QuizResult.vue'; // mengimport QuizResult.vue

import { useRoute } from 'vue-router'; // mengimport useRoute dari vue-router
import quizes from '../data/quizes.json'; // mengimport data quizes dari file json
import { ref, computed } from 'vue'; // mengimport ref dan computed dari vue

const route = useRoute(); // mengambil parameter id dari url
const quizId = parseInt(route.params.id); // mengubah parameter id menjadi integer
const quiz = quizes.find((q) => q.id === quizId); // mencari quiz dengan id yang sesuai pada quizes.json 
console.log(quiz); // menampilkan quiz yang sedang ditampilkan

const currentQuestionIndex = ref(0); // membuat ref untuk menyimpan index pertanyaan
const numberOfCorrectAnswers = ref(0); // membuat ref untuk menyimpan jumlah jawaban yang benar
const showResult = ref(false); // membuat ref untuk menyimpan apakah sudah menampilkan hasil atau belum

// Menggunakan computed untuk menampilkan halaman pertanyaan
const questionPage = computed(() => {
    return `${currentQuestionIndex.value + 1} / ${quiz.questions.length}`;
});

// Membuat progres bar
const barPercentage = computed(() => {
    return `${(currentQuestionIndex.value + 1) / quiz.questions.length * 100}%`;
});

// Membuat fungsi untuk menambah jumlah jawaban yang benar dan berpindah ke pertanyaan berikutnya
function onSelectOption(option) {
    if (option.correct) {
        numberOfCorrectAnswers.value++;
    }

    // Jika sudah sampai pada pertanyaan terakhir, maka set showResult true
    if (currentQuestionIndex.value === quiz.questions.length - 1) {
        showResult.value = true;
        return;
    }
    
    currentQuestionIndex.value++; // menambah jumlah halaman pertanyaan
    
}
</script>


<template>

    <!-- menampilkan nomor halaman pertanyaan dan bar percentage ke QuizHeader -->
    <QuizHeader :question-page="questionPage" :bar-percentage="barPercentage" />

    <!-- menampilkan pertanyaan dengan request data ke QuizContent.vue dan menampilkan pertanyaan jika showResult false -->
    <QuizContent v-if="!showResult" :question="quiz.questions[currentQuestionIndex]" @selectOption="onSelectOption" /> 
    <!-- menampilkan hasil jika showResult true -->
    <QuizResult v-else
    :quizQuestionLength="quiz.questions.length"
    :numberOfCorrectAnswers="numberOfCorrectAnswers" />
</template>

<style scoped></style>
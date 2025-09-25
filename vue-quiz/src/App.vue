<script setup>
import { ref, watch } from 'vue'; // mengimport ref,watch dari vue
import srcQuiz from './data/quizes.json' // mengimpor data quizes dari file json
import Quizcard from './components/Quizcard.vue'

const quizes = ref(srcQuiz); // menginisialisasi data quizes dengan data dari file json
const search = ref("");

watch(search, () => { // memanggil watcher search
  quizes.value = srcQuiz.filter((quiz) => { // memfilter data dari srcQuiz
    return quiz.title.toLowerCase().includes(search.value.toLowerCase()); // mengembalikan nilai title yang sesuai dengan search
  });
});
</script>

<template>
  <main>
    <header>
      <h1 id="title">Vue Quiz</h1>
      <input v-model.trim="search" type="text" id="search-input" />
    </header>
    <section id="quiz-container">
      <!-- card -->
       <!--
      <div v-for="quiz in quizes" :key="quiz.id" class="card"> <!-- perulangan untuk menampilkan setiap quiz berdasarkan id
        <img
          :src="quiz.img" :alt="quiz.title"> <!-- menampilkan gambar quiz berdasarkan data img
        <div class="card-body">
          <h2>{{ quiz.title }}</h2> <!-- menampilkan judul quiz berdasarkan data title
          <p>{{ quiz.questions.length }}</p> <!-- menampilkan jumlah pertanyaan quiz berdasarkan data questions
        </div>
      </div>
      <!-- end card -->
      <Quizcard v-for="quiz in quizes" :key="quiz.id" :quiz="quiz"/> <!-- mengirim props quiz ke component Quizcard -->
    </section>
  </main>
</template>

<style scoped>
main {
  max-width: 900px;
  margin: 0 auto;
}

header {
  margin-top: 30px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}

#title {
  font-weight: bold;
  border-right: 20px;
}

#search-input {
  border: none;
  background-color: #c9c9c9a9;
  margin-left: 10px;
  padding: 10px;
  border-radius: 5px;
}

#quiz-container {
  display: flex; 
  flex-wrap: wrap;
  margin-top: 20px;
}
</style>
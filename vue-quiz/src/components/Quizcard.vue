<script setup>
const {quiz} = defineProps(["quiz"])  // destructure props quiz yang didapat dari props quiz App.vue line34
console.log(quiz)
</script>


<template>
     <!-- card -->
      <div class="card"> <!-- perulangan untuk menampilkan setiap quiz berdasarkan id-->
        <img
          :src="quiz.img" :alt="quiz.title"> <!-- menampilkan gambar quiz berdasarkan data img-->
        <div class="card-body">
          <h2> {{quiz.title}}</h2> <!-- menampilkan judul quiz berdasarkan data title-->
          <p>{{ quiz.questions.length }} Question</p> <!-- menampilkan jumlah pertanyaan quiz berdasarkan data questions-->
        </div>
      </div>
      <!-- end card -->
</template>

<style scoped>
.card {
  width: 270px;
  margin-right: 30px;
  margin-bottom: 30px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

.card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin: 0;
}


.card-body {
  padding: 0 15px;
}

.card-body h2 {
  font-weight: bold;
}
</style>
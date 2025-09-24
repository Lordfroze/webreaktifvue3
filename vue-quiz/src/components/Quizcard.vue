<template>
     <!-- card -->
      <div class="card"> <!-- perulangan untuk menampilkan setiap quiz berdasarkan id-->
        <img
          src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="quiz.title"> <!-- menampilkan gambar quiz berdasarkan data img-->
        <div class="card-body">
          <h2> Programming</h2> <!-- menampilkan judul quiz berdasarkan data title-->
          <p>2 Question</p> <!-- menampilkan jumlah pertanyaan quiz berdasarkan data questions-->
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
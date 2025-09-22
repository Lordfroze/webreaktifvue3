<script setup>
import { ref } from "vue";
const showForm = ref(false) // state untuk menampilkan form modal
const newMemo = ref("") // state untuk menyimpan inputan memo
const memos = ref([]) // array untuk menyimpan memo

function addMemo() { // function untuk menambah memo
  memos.value.push({ // tambah memo ke array memos
    id: Date.now(),  // membuat id unik untuk setiap memo dari tanggal sekarang
    memo: newMemo.value, // isi memo dari inputan user
    date: new Date().toLocaleDateString("id-ID"), // tanggal memo dibuat
    backgroundColor: getRandomColor(), // warna background memo acak
  })
  newMemo.value = "" // clear inputan memo setelah ditambahkan
  showForm.value = false // hide form modal setelah ditambahkan
}

function getRandomColor() { // function untuk membuat warna background acak
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}
</script>

<template>
  <main>
    <!-- memo -->
     {{ memos }} <!-- menampilkan array memos -->
    <div class="container">
      <header>
        <h1 class="header-title">Memo</h1>
        <button @click="showForm = true" class="header-button">+</button>   <!-- tombol tambah memo -->
      </header>
      <!-- card memo -->
      <div class="card-container">
        <div class="card">
          <p class="card-content">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam totam eveniet harum
            dolores, nihil maiores delectus earum quod non tempore dolor a rerum error rem animi? Aspernatur id ipsum
            totam.</p>
          <p class="card-date">2023-08-20</p>
        </div>

        <div class="card">
          <p class="card-content">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam totam eveniet harum
            dolores, nihil maiores delectus earum quod non tempore dolor a rerum error rem animi? Aspernatur id ipsum
            totam.</p>
          <p class="card-date">2023-08-20</p>
        </div>
      </div>
      <!--end card memo -->
    </div>
    <!-- end memo -->

    <!-- form input memo / form modal -->
    <div v-show="showForm" class="form-overlay">
      <div class="form-modal">
        <button @click="showForm = false" class="form-close-btn">&times;</button>  <!-- tombol close form -->
        <textarea name="memo" id="memo" cols="30" rows="10" v-model="newMemo"></textarea>
        <button @click="addMemo" class="form-save-btn">Save</button> <!-- tombol save memo untuk memanggil fungsi addMemo -->
      </div>
    </div>
    <!-- end form input memo / end form modal -->
  </main>
</template>


<!-- style card memo -->
<style scoped>
main {
  height: 100vh;
  width: 100vh;
}

.container {
  max-width: 900px;
  padding: 10px;
  margin: 0 auto;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-title {
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 25px;
  color: #495a7d;
}

.header-button {
  border: none;
  padding: 10px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  border-radius: 100%;
  background-color: #495a7d;
  color: white;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.card {
  width: 225px;
  height: 225px;
  padding: 10px;
  background-color: #6e54cc;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.form-overlay {
  position : absolute; /** agar posisi diatas semua elemen */
  top: 0; /** posisi dari atas */
  left: 0; /** posisi dari kiri */
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.77);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
}

.form-modal {
  width: 420px;
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  position: relative;
  display: flex;
  flex-direction: column;
}

.form-save-btn {
  padding: 10px 20px;
  font-size : 20px;
  width: 100%;
  background-color: #495a7d;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 15px;
  color: white;
}

.form-close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  border: none;
  background-color: transparent;
  cursor: pointer;
}



</style>
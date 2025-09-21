<script setup>
import { ref } from "vue";
const showForm = ref(true)
</script>

<template>
  <main>
    <!-- memo -->
    <div class="container">
      <header>
        <h1 class="header-title">Memo</h1>
        <button class="header-button">+</button>
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

    <!-- form input memo -->
    <div v-if="showForm" class="overlay">
      <div class="form-modal">
        <button class="form-close-btn">&times;</button>
        <textarea name="memo" id="memo" cols="30" rows="10"></textarea>
        <button class="form-save-btn">Save</button>
      </div>
    </div>
    <!-- end form input memo -->
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

.overlay {
  position : absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.77);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
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


</style>
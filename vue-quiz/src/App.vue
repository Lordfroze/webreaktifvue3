<template>
  <main>
    <header>
      <h1 id="title">Vue Quiz</h1>
      <input type="text" id="search-input" />
    </header>
    <section id="quiz-container">
      <!-- card -->
      <div class="card">
        <img
          src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="programming">
        <div class="card-body">
          <h2>Programming</h2>
          <p>Questions</p>
        </div>
      </div>


      <div class="card">
        <img
          src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="programming">
        <div class="card-body">
          <h2>Programming</h2>
          <p>Questions</p>
        </div>
      </div>

      <!-- end card -->
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
<script setup>
import {ref} from "vue"
const count = ref(1);
</script>

<template>
  <main>
        <h1>Counter</h1>
        <span id="value">{{count}}</span>
        <div>
            <button @click="count--" id="decrease">-</button>
            <button @click="count++"id="increase">+</button>
        </div>
    </main>
</template>

<style scoped>
main {
    text-align: center;
    background-color: #622105;
    padding: 50px;
    border-radius: 5px;
}

#value {
    font-size: 70px;
}

button {
    font-size: 50px;
    margin : 0 5px;
    background-color: #333333;
    color : white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    transform: scale(0.95);
    background-color: #6b6565;
}

button:active {
    animation: pulse 0.5s ease-in-out;
}

@keyframes pulse {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
}
</style>

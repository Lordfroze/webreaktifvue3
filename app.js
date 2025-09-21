// Select elements
const countValue = document.getElementById('value');
const countDecrease = document.getElementById('decrease');
const countIncrease = document.getElementById('increase');
let count = 0;

countValue.textContent = count; // Initialize count value
countIncrease.addEventListener('click', () => { // Increase count
    count++;
    countValue.textContent = count;
});
countDecrease.addEventListener('click', () => { // Decrease count
    count--;
    countValue.textContent = count;
});
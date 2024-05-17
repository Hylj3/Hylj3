const fruits = ['🍒', '🍋', '🍉', '🍍', '🍇', '🍌', '🍎'];const spinButton = document.getElementById('spinButton');
const resultDiv = document.getElementById('result');

spinButton.addEventListener('click', () => {
const result = [];
for (let i = 0; i < 3; i++) {
const randomIndex = Math.floor(Math.random() * fruits.length);
result.push(fruits[randomIndex]);
}
resultDiv.textContent = result.join(' ');

if (result[0] === result[1] && result[1] === result[2]) {
resultDiv.style.color = 'green';
resultDiv.textContent += ' Voitit!';
} else {
resultDiv.style.color = 'red';
}
});
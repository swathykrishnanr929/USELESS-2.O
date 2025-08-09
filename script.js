function flipCoin() {
  const coin = document.getElementById('coin');
  const result = document.getElementById('result');

  // Reset: hide result, show coin
  result.textContent = '';
  coin.classList.remove('hidden');

  // Start flipping animation (coin.gif)
  coin.src = 'coin2.gif';

  // After 2 seconds, show the result
  setTimeout(() => {
    coin.classList.add('hidden');
    result.textContent = 'Procrastinate!🤑🤑';
  }, 25000); // Adjust if your gif duration is longer
}

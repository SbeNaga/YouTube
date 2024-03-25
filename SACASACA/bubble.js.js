function sortExchange() {
    const input = document.getElementById('input').value.trim();
    const numbers = input.split(',').map(num => parseInt(num.trim()));
  
    for (let i = 0; i < numbers.length - 1; i++) {
      for (let j = 0; j < numbers.length - i - 1; j++) {
        if (numbers[j] > numbers[j + 1]) {
          // Swap numbers
          const temp = numbers[j];
          numbers[j] = numbers[j + 1];
          numbers[j + 1] = temp;
        }
      }
    }
  
    document.getElementById('output').innerText = 'Отсортированный массив: ' + numbers.join(', ');
  }
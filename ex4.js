/*4*/
const submitBtn = document.getElementById('submitBtn');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const respDiv = document.getElementById('respose');


submitBtn.addEventListener('click', function() {
  const number1 = Number(input1.value);
  const number2 = Number(input2.value)

  if (number1 >= 100 && number1 <= 300 && number2 >= 100 && number2 <= 300 /* && !isNaN(number1) && !isNaN(number2) */) {
    fetch(`https://picsum.photos/${number1}/${number2}`)
    .then(response => {
      respDiv.innerHTML = `<img src="${response.url}">`;
    })
    .catch(error => console.error(error));
  } else {
    respDiv.innerText = 'одно из чисел вне диапазона от 100 до 300';
  }
});

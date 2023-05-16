// 3
const input = document.getElementById('input');
const submitButton = document.getElementById('submit-button');
const resultDiv = document.getElementById('result');

submitButton.addEventListener('click', function() {
  const number = Number(input.value);

  if (isNaN(number) || number < 1 || number > 10) {
      resultDiv.innerText = 'Число вне диапазона от 1 до 10';
  } else {
      const xhr = new XMLHttpRequest();
      
      xhr.open('GET', `https://picsum.photos/v2/list?limit=${number}`, true);

      xhr.onload = function() {
          if (this.status === 200) {
              const response = JSON.parse(this.responseText);
              resultDiv.innerHTML = ''; 

              // создаем и добавляем img на страницу
              response.forEach(function(item) {
                  const img = document.createElement('img');
                  img.src = item.download_url;
                  resultDiv.appendChild(img);
              });
          } else {
              resultDiv.innerText = 'Произошла ошибка при загрузке данных';
          }
      }

      xhr.onerror = function() {
          resultDiv.innerText = 'Произошла ошибка при загрузке данных';
      }

      xhr.send();
  }
});

// variant 2
/* function useRequest(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  
  xhr.onload = function() {
    if (xhr.status != 200) {
      resultDiv.innerText = 'Произошла ошибка при загрузке данных';
    } else {
      const result = JSON.parse(xhr.response);
      if (callback) {
        callback(result);
      }
    }
  };
  
  xhr.onerror = function() {
    resultDiv.innerText = 'Произошла ошибка при загрузке данных';
  };
  
  xhr.send();
};


function displayResult(apiData) {
  let cards = '';
  apiData.forEach(item => {
    const cardBlock = `
      <div class="card">
        <img
          src="${item.download_url}"
          class="card-image"
        />
        <p>${item.author}</p>
      </div>
    `;
    cards = cards + cardBlock;
  });
     
  resultDiv.innerHTML = cards;
}


submitButton.addEventListener('click', function() {
  const number = Number(input.value);

  if (isNaN(number) || number < 1 || number > 10) {
      resultDiv.innerText = 'Число вне диапазона от 1 до 10';
    } else {
  useRequest(`https://picsum.photos/v2/list?limit=${number}`, displayResult);
  }
})
 */
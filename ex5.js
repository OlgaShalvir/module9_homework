// 5 
const pageNum = document.getElementById('pageNum');
const limitInput = document.getElementById('limitInput');
const requestBtn = document.getElementById('requestBtn');
const imgList = document.getElementById('imgList');

 
requestBtn.addEventListener('click', () => {
  const page = parseInt(pageNum.value);
  const limit = parseInt(limitInput.value);
  let condition1 = page >= 1 && page <= 10;
  let condition2 = limit >= 1 && limit <= 10;

  if (!condition1 && condition2) {
    imgList.textContent = 'Номер страницы и лимит вне диапазона от 1 до 10'; 
  } else if (!condition1) {
    imgList.innerHTML = 'Лимит вне диапазона от 1 до 10';
  } else if (!condition2){
    imgList.innerHTML = 'Номер страницы вне диапазона от 1 до 10';
  } else {
    const url = `https://picsum.photos/v2/list?page=${page}&limit=${limit}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        let img = '';
        data.forEach(image => {
          img += `<img src="${image.download_url}" width="300">`;
        });
        imgList.innerHTML = img;
        localStorage.setItem('lastRequest', url);
      })
      .catch(() => {
        imgList.innerHTML = 'Ошибка при выполнении запроса';
      });
  }
});

// verifyng local storage
const lastRequest = localStorage.getItem('lastRequest');
    
if (lastRequest) {
      fetch(lastRequest)
      .then(response => response.json())
      .then(data => {
        let img = '';
        data.forEach(image => {
         img += `<img src="${image.download_url}" width="300">`;
        });
        imgList.innerHTML = img;
      })
      .catch(error => {
  imgList.innerHTML = 'Ошибка при выполнении запроса';
});
}

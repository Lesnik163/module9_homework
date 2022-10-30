const button = document.querySelector('button');
const par = document.querySelector('p');

const numImagesAvailable = 5; // количество фото, которое берут  из коллекции
const randomNumber = Math.floor(Math.random() * numImagesAvailable);

function checkNumAndMakeRequest() {       
    let imageWidth = document.querySelector('.inp1').value;
    let imageHeight = document.querySelector('.inp2').value;
    
    if((imageWidth>500 || imageWidth<100) || (imageHeight>500 || imageHeight<100)) {
        par.style.display = 'block';
        setTimeout(()=>{        // через 5 сек убирает подсказку
            par.style.display = 'none';
        },5000)
        return
    }
    // const reqUrl = `https://source.unsplash.com/collection/928423/${imageWidth}x${imageHeight}/?sig=${randomNumber}`; 
    // ссылка выше не работает - а точнее возвращает не обьект json, а картинку, поэтому
    // я создаю просто колонку кортинок
    const reqUrl = `https://source.unsplash.com/collection/928423/${imageWidth}x${imageHeight}/?sig=${randomNumber}`;
    
    for(let i = 0; i < randomNumber; i++ ) {
        const finalPicture = document.createElement('img');
        finalPicture.setAttribute('src',reqUrl);
        document.querySelector('body').appendChild(finalPicture);
    }
    document.querySelector('.inp1').value = '';//очищаю строку ввода
    document.querySelector('.inp2').value = '';//очищаю строку ввода
    localStorage.setItem('lastUrl',reqUrl);
    localStorage.setItem('randomNumber',randomNumber);   
}
button.addEventListener('click',checkNumAndMakeRequest)
function reopenLastResult() { // открывает картинки из последнего успешно выполненного запроса
   const lastUrl= localStorage.getItem('lastUrl');
   // так как API предоставляет по одной и той же ссылке рандомные картинки, то через localStorage сохраняется только количество отрисовываемых фото 
   const randomNumber = localStorage.getItem('randomNumber')
   if (lastUrl) {
    for(let i = 0; i < randomNumber; i++ ) {
        const finalPicture = document.createElement('img');
        finalPicture.setAttribute('src',lastUrl);
        document.querySelector('body').appendChild(finalPicture);
    }
   }
}
reopenLastResult()
// При нажатии на каждую картинку в блоке section, в .images-container
// отображать соответствующую картинку, т.е ту картинку, на которую
// кликнули, ту и надо отобразить в .images-container

const imagesBlock = document.querySelectorAll('img');
const mainImage = document.querySelector('.images-container');

function handleClick (e) {
    console.log(imagesBlock);
    mainImage.setAttribute('src', e.target.currentSrc);
}

[...imagesBlock].forEach(el => el.addEventListener('click', handleClick));
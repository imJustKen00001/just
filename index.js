const swiper = new Swiper('.image-slider', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    slidesPerView: 'auto',
    spaceBetween: 16,
    loop: true


});


let menuWindow = document.querySelector('.menu__list');
let openButton = document.querySelector('.open-button');

openButton.addEventListener('click', function(){
    if(document.querySelector('.menu__list--full')){
        menuWindow.classList.remove('menu__list--full')
        openButton.querySelector('p').textContent = 'Показать все';
        let arrowPic = openButton.querySelector('.open-button-icon');
        arrowPic.src = 'icons/open-arrow.svg';
        arrowPic.alt = 'open full menu';

    } else {
        menuWindow.classList.add('menu__list--full')
        openButton.querySelector('p').textContent = 'Скрыть';
        let arrowPic = openButton.querySelector('.open-button-icon');
        arrowPic.src = 'icons/close-arrow.svg';
        arrowPic.alt = 'close full menu';
    }
})
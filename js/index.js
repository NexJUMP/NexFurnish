const button = document.querySelector('.menu__button');

button.addEventListener('click', ()=>{
    const list = document.querySelector('.menu__list');
    list.classList.toggle('menu__list--active');
})
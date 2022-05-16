const buttonsSort = document.querySelectorAll('.categorie__sort-by div');

buttonsSort.forEach((button) =>{
    button.addEventListener('click', ()=>{
        console.log('click');
    });
});
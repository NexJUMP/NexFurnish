const moneys = document.querySelectorAll('.categorie__wrapper-money');
let arr = []

moneys.forEach((money)=>{
    const text = money.textContent.split('lei');
    const numberMoney = Number(text[0]);
    money.setAttribute('data-price', numberMoney);
    arr.push(money)
})



const buttonsSort = document.querySelectorAll('.categorie__sort-by div');


buttonsSort.forEach((button) => {
    button.addEventListener('click', () => {
        console.log('click');
    });
});


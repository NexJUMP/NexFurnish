const moneys = document.querySelectorAll('.categorie__wrapper-money');
const cards = Array.from(document.querySelectorAll('.categorie__wrapper-item'));
const cardsDefault = [...cards];

moneys.forEach((money) => {
	const text = money.textContent.split('lei');
	const numberMoney = Number(text[0]);
	money.setAttribute('data-price', numberMoney);
});

const arrLower = cards.map(card => card).sort((cardA, cardB) => {
	const moneyA = cardA.querySelector('.categorie__wrapper-money');
	const numberMoneyA = moneyA.getAttribute('data-price');

	const moneyB = cardB.querySelector('.categorie__wrapper-money');
	const numberMoneB = moneyB.getAttribute('data-price');
	return numberMoneyA - numberMoneB;
});
const arrHiwgher = cards.map(card => card).sort((cardA, cardB) => {
	const moneyA = cardA.querySelector('.categorie__wrapper-money');
	const numberMoneyA = moneyA.getAttribute('data-price');

	const moneyB = cardB.querySelector('.categorie__wrapper-money');
	const numberMoneB = moneyB.getAttribute('data-price');
	return numberMoneB - numberMoneyA;
});

const arrPopularity = cards.map(card => card).sort((cardA, cardB) => {
	const moneyA = cardA.querySelector('.categorie__wrapper-money');
	const numberMoneyA = moneyA.getAttribute('data-price');

	const moneyB = cardB.querySelector('.categorie__wrapper-money');
	const numberMoneB = moneyB.getAttribute('data-price');
	return numberMoneB + numberMoneyA;
});





const buttonsSort = document.querySelectorAll('.categorie__sort-by div');

buttonsSort[0].addEventListener('click', () => {
	const wrapper = document.querySelector('.categorie__wrapper');
	wrapper.innerHTML = '';
	cardsDefault.forEach(element => {
		element.style.display = "";
		wrapper.appendChild(element);
	});
});

buttonsSort[1].addEventListener('click', () => {
	const wrapper = document.querySelector('.categorie__wrapper');
	wrapper.innerHTML = '';
	arrPopularity.forEach(element => wrapper.appendChild(element));
});

buttonsSort[2].addEventListener('click', () => {
	const wrapper = document.querySelector('.categorie__wrapper');
	wrapper.innerHTML = '';
	arrHiwgher.forEach(element => wrapper.appendChild(element));
});

buttonsSort[3].addEventListener('click', () => {
	const wrapper = document.querySelector('.categorie__wrapper');
	wrapper.innerHTML = '';
	arrLower.forEach(element => wrapper.appendChild(element));
});

const buttonsSortColor = document.querySelectorAll('.categorie__sort-color div');

buttonsSortColor[0].addEventListener('click', () => {
	const arrColorWhite = cards.map(card => {
		const div = card.querySelector('.categorie__wrapper-money');
		const color = div.getAttribute('data-color');
	
		if (color == 'white') {
			card.style.display = "";
		}else {
			card.style.display = "none";
		}
	});
});

buttonsSortColor[1].addEventListener('click', () => {
	const arrColorGray = cards.map(card => {
		const div = card.querySelector('.categorie__wrapper-money');
		const color = div.getAttribute('data-color');
	
		if (color == 'purple') {
			card.style.display = '';
		}else {
			card.style.display = 'none';
		}
	});
}); 

buttonsSortColor[2].addEventListener('click', () => {
	const arrColorGray = cards.map(card => {
		const div = card.querySelector('.categorie__wrapper-money');
		const color = div.getAttribute('data-color');
	
		if (color == 'green') {
			card.style.display = '';
		}else {
			card.style.display = 'none';
		}
	});
}); 

buttonsSortColor[3].addEventListener('click', () => {
	const arrColorGray = cards.map(card => {
		const div = card.querySelector('.categorie__wrapper-money');
		const color = div.getAttribute('data-color');
	
		if (color == 'pink') {
			card.style.display = '';
		}else {
			card.style.display = 'none';
		}
	});
}); 
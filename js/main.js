'use strict'

let burderBtn = document.querySelector('.burger-btn-block');
let navBar = document.querySelector('nav');
let body = document.querySelector ('body');
let closeBlock = document.querySelector('.close-block');
let closeBtn = document.querySelector('.close-btn-block');



burderBtn.addEventListener('click', () => {
	burderBtn.classList.add('active');
	body.classList.add('locked');
	navBar.classList.add('active');
});
closeBlock.addEventListener('click', () => {
	burderBtn.classList.remove('active');
	body.classList.remove('locked');
	navBar.classList.remove('active');
});
closeBtn.addEventListener('click', () => {
	burderBtn.classList.remove('active');
	body.classList.remove('locked');
	navBar.classList.remove('active');
});


let listBlock = document.querySelector('.list-block');
let arrowBtnsArr = [...listBlock.querySelectorAll('.ico-arrow')];
let itemBodysArr = [...listBlock.querySelectorAll('.item-body-block')];
let innerItemsArr = [...listBlock.querySelectorAll('.inner-body-block')];
let listItemsArr = [...listBlock.querySelectorAll('.list-item-block')];
console.log(innerItemsArr);


let getItemHeight = (item) => {
	let computedStyle = getComputedStyle(item);
	let height = Number(computedStyle.paddingTop.replace('px', '')) 
	+ Number(computedStyle.paddingBottom.replace('px', '')) 
	+ item.clientHeight;
	console.log(Number(computedStyle.paddingTop.replace('px', '')), Number(computedStyle.paddingBottom.replace('px', '')), item.offsetHeight);
	return height
}

arrowBtnsArr.forEach(arrow => {
	arrow.addEventListener('click', () => {
		arrow.classList.toggle('active');
		for (let i = 0; i < innerItemsArr.length; i++) {
			if (arrowBtnsArr.indexOf(arrow) == i) {
				innerItemsArr[i].classList.toggle('active');
				let bodyHeight = getItemHeight(innerItemsArr[i]) + 'px';
				console.log(innerItemsArr[i].offsetHeight);
				console.log(bodyHeight);
				itemBodysArr[i].classList.toggle('active');
				if (itemBodysArr[i].classList.contains('active')) {
					itemBodysArr[i].style.height = bodyHeight;
					listItemsArr[i+1].style.marginTop = '-20px';
				}else {
					itemBodysArr[i].style.height = 0;
					listItemsArr[i+1].style.marginTop = '10px';
				}
			}
		}
	})
})


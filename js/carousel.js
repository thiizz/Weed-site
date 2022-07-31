const imgs = document.getElementById('img-shop-categories');
const img = document.querySelectorAll('#img-shop-categories');


let idx = 0;

function carrossel(){
	idx++;
	if(idx > img.length - 1){
		idx = 0;
	}
	imgs.style.transform = 'translateX($(-idx * 400)px)';
}

setInterval(carrossel, 1800)
let close = document.querySelector('.close img');
let cancel = document.querySelector('#cancel img')
let reset = document.querySelector('#reset img');


close.addEventListener('mouseover',function(){
	const newSrc = './img/play_close_hl.png';
	if(close.getAttribute('src') !== newSrc){
		close.setAttribute('src', newSrc);
	}
})
close.addEventListener('mouseout', function(){
	let oldSrc = './img/play_close_nor.png';
	if(close.getAttribute('src') !== oldSrc){
		close.setAttribute('src', oldSrc);
	}
})

cancel.addEventListener('mouseover',function(){
	let newSrc = './img/play_cancel_hl.png';
	if(cancel.getAttribute('src')!=newSrc){
		cancel.setAttribute('src',newSrc);
	}
})
cancel.addEventListener('mouseout',function(){
	let oldSrc = './img/play_cancel_nor.png';
	if(cancel.getAttribute('src')!=oldSrc){
		cancel.setAttribute('src',oldSrc);
	}
})

reset.addEventListener('mouseover',function(){
	let newSrc = 'img/play_reset_hl.png';
	if(reset.getAttribute('src')!=newSrc){
		reset.setAttribute('src',newSrc);
	}
})
reset.addEventListener('mouseout',function(){
	let oldSrc = 'img/play_reset_nor.png';
	if(reset.getAttribute('src')!=oldSrc){
		reset.setAttribute('src',oldSrc);
	}
})

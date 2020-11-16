let body = document.querySelector('body');
let mainContent = body.querySelector('.main');
let addNewBook = mainContent.querySelector('.card');

let myLibrary = [];

function Book(title, author, page) {
  this.title = title;
  this.author = author;
  this.page = page;
}
function addBookToLibrary(obj) {
	if(obj.author!=this.author&&obj.title!=this.title&&obj.page!=this.page){
		myLibrary.unshift(obj);
	}else{
		alert("this book is on bookshelf");
	}
	
}
function render(){
	//add obj into DOM first
		
	myLibrary.forEach(function(books){
		
		let addNewBook = document.createElement('div');
		addNewBook.id = myLibrary.length;
		addNewBook.classList.add('book');
		
		let left = document.createElement('div');
		left.classList.add('left');
		let right = document.createElement('div');
		right.classList.add('right');
		
		let title = document.createElement('div');
		title.classList.add('title');
		
		let book = document.createElement('label');
		book.classList.add('tab');
		book.textContent="Book:";
		
		let titleContent = document.createElement('label');
		titleContent.classList.add('content');
		titleContent.textContent= books.title;
		
		//add book and titleContent into title div
		title.appendChild(book);
		title.appendChild(titleContent);
		
		let author = document.createElement('div');
		author.classList.add('author');
		
		let aut = document.createElement('label');
		aut.classList.add('tab');
		aut.textContent="Author:";
		
		let authorContent = document.createElement('label');
		authorContent.classList.add('content');
		authorContent.textContent=books.author;
		
		//add two aut and authorContent into author div
		author.appendChild(aut);
		author.appendChild(authorContent);
		
		let page = document.createElement('div');
		page.classList.add('page');
	
		let pag = document.createElement('label');
		pag.classList.add('tab');
		pag.textContent="Page:";
		
		let pageContent = document.createElement('label');
		pageContent.classList.add('content');
		pageContent.textContent=books.page;
		
		//add pag and pageContent into page div
		page.appendChild(pag);
		page.appendChild(pageContent);
		
		left.appendChild(title);
		left.appendChild(author);
		left.appendChild(page);
		
		
		
		let readState = document.createElement('img');
		readState.id = myLibrary.length-1;
		readState.classList.add('condition');
		readState.setAttribute('src',checked());
		readState.addEventListener('click',function(){
			let oldSrc = './img/read_button.png';
			let newSrc = './img/unread_button.png';
			if(readState.getAttribute('src') == oldSrc){
				readState.setAttribute('src',newSrc);
			}else{
				readState.setAttribute('src',oldSrc);
			}
		})
		
		
		let del = document.createElement('img');
		del.classList.add('delete');
		del.setAttribute('src','./img/delete.png');
		del.addEventListener('click',deleteBook);
		
		right.appendChild(readState);
		right.appendChild(del);
		
		addNewBook.appendChild(left);
		addNewBook.appendChild(right);
		mainContent.appendChild(addNewBook);
	})
	
	
	
	
	
}
function checked(){
	let read = document.getElementById('read');
	if(read.checked){
		return './img/read_button.png';
	}else{
		return './img/unread_button.png';
	}
}
let getCLosestClass = function(elem, classSelector) {
    for( ; elem && elem !== document; elem = elem.parentNode) {
        if(elem.classList.contains(classSelector)) return elem
    }
    return null
}


function deleteBook(e) {
    let parentElement = getCLosestClass(e.target, "book")
    const index = parentElement.getAttribute("id")
    parentElement.innerHTML = ''
    myLibrary.splice(index-1, 1);
	let elem = document.getElementById(index);
	elem.parentNode.removeChild(elem);
    render();
}

let text = document.getElementsByClassName('text');
let read = document.querySelector('#read');
let unread = document.querySelector('#unread');
let submit = document.getElementById('submit');

//click add img to open up form
addNewBook.addEventListener('click', function(){
	let mask = document.getElementById('mask');
	mask.style.display="block";
	for(let i = 0; i<text.length; i++){
		text[i].value="";
	}
});

let close = document.getElementById('close');
close.addEventListener('click',function(){
	let mask = document.getElementById('mask');
	mask.style.display="none";
})





submit.addEventListener('click',function(){
	
	let book = new Book(text[0].value,text[1].value,text[2].value);
	addBookToLibrary(book);
	render();
	let mask = document.getElementById('mask');
	mask.style.display="none";
})



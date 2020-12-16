const clear = document.getElementById('clear');
let input = document.getElementById("single");
let history = document.getElementById("all");
const back = document.getElementById('back');
const sign = document.getElementById('sign');
const dot = document.getElementById('dot');
const digits = document.getElementsByClassName('int');
const operators = document.getElementsByClassName('op');
const equal = document.getElementById('equal');

clear.addEventListener('click', function(){
	input.textContent = "";
	history.textContent = "";
});

back.addEventListener('click',function(){
	input.textContent = input.textContent.substring(0,input.textContent.length-1);
});

sign.addEventListener('click', function(){
	input.textContent = parseFloat(input.textContent)*(-1);
	
});

dot.addEventListener('click', function(){
	input.textContent.indexOf(".")==-1? input.textContent=input.textContent.concat(".") : input.textContent;
});


for(let i = 0; i<digits.length; i++){
	digits[i].addEventListener('click', function(){
		if(input.textContent.length < 18){
			input.textContent = input.textContent.concat(digits[i].innerHTML);
		}else{
			alert("cannot excess the limit");
		}
		
	})
}


for(let i = 0; i<operators.length-1; i++){
	operators[i].addEventListener('click', function(){
		let arr = [];
		arr.push(parseFloat(input.textContent));
		arr.push(operators[i].innerHTML);
		input.textContent="";
		if(history.textContent[0]=="0"){
			history.textContent="";
		}
		
		if(history.textContent.length < 30){
		
		history.textContent = history.textContent.concat(arr.join(""));
		}else{
			alert("cannot excess the limit! ONLY one 'equal sign'");
		}
	})
}

equal.addEventListener('click',function(){
	if(history.textContent.indexOf("=")==-1){
		history.textContent = history.textContent.concat(input.textContent,"=");
	}
	
	let newArr = [];
	for(let i = 0; i<history.textContent.length-1;i++){
		if(isNaN(history.textContent[i])){
			newArr.push(history.textContent[i]);
		}else{
			newArr.push(parseFloat(history.textContent[i]));
		}
		
	}
	
	for(let j = 0; j<newArr.length; j++){
		if(newArr[j]=='*'){
			input.textContent = newArr[j-1]*newArr[j+1];
		}else if(newArr[j]=='/' && newArr[j+1]!=0){
			input.textContent = newArr[j-1]/newArr[j+1];
		}else if(newArr[j] == "+"){
			input.textContent = newArr[j-1]+newArr[j+1];
		}else if(newArr[j] == "-"){
			input.textContent = newArr[j-1]-newArr[j+1];
		}else{
			;
		}
	}
})















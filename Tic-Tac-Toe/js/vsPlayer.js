
let gameBoard = document.querySelectorAll('.game div');
let red = document.querySelector('.tic p').textContent;
let tac = document.querySelector('.tac p').textContent;
let blue = document.querySelector('.toe p').textContent;
let reset = document.querySelector('#reset img');

function Score(red, tac, blue){
	return {tic:red,tac:tac,toe:blue};
}
function Player(mark){
	return {mark:mark, move: false, moves:[]};
}
let score = new Score(red,tac,blue);

let startFromRed = ()=>{
	let p1 = new Player('x');
	let p2 = new Player('o');
	p1.move = true;
	for(let i = 0; i<gameBoard.length; i++){
		gameBoard[i].addEventListener('click',function(){
			if(p1.moves.length>=5||p2.moves.length>=5){
				score.tac++;
				document.querySelector('.tac p').textContent = score.tac;
				clearBoard(p1);
				clearBoard(p2);
			}else if(p1.move == true && p2.move ==false){
				let red = document.createElement('img');
				red.classList.add('img');
				red.setAttribute('src','./img/play_x_nor.png');
				gameBoard[i].appendChild(red);
				p1.moves.push(i+1);
				// console.log(p1.moves);
				if(checkWin(p1.moves)){
					score.tic++;
					document.querySelector('.tic p').textContent = score.tic;
					alert("Red side win, yeahhhh!~@")
					clearBoard(p1);
					clearBoard(p2);
					// console.log(p1.moves);
					
				}
			}else if (p1.move ==false && p2.move ==true){
				let blue = document.createElement('img');
				blue.classList.add('img');
				blue.setAttribute('src','./img/play_circle_nor.png');
				gameBoard[i].appendChild(blue);
				p2.moves.push(i+1);
				// console.log(p2.moves);
				if(checkWin(p2.moves)){
					score.toe++;
					document.querySelector('.toe p').textContent = score.toe;
					alert("Blue side win, yeahhhh!~@")
					clearBoard(p1);
					clearBoard(p2);
					// console.log(p2.moves);
				}
			}
		
			
			
			function reverseP1(){
				p1.move==true? p1.move = false : p1.move = true;
			}
			
			reverseP1();
			function reverseP2(){
				p1.move==true? p2.move=false:p2.move=true;
			}
			reverseP2();
			
		});
		
		
		reset.addEventListener('click',function(){
			score = new Score(red,tac,blue);
			document.querySelector('.tac p').textContent = score.tac;
			document.querySelector('.tic p').textContent = score.tic;
			document.querySelector('.toe p').textContent = score.toe;
			clearBoard(p1);
			clearBoard(p2);
		})
	}

			
			
		
		
	
	
	
};



let checkWin = (winArr)=>{
	let win = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,8],[1,5,9],[3,5,7]];
	for(let i = 0; i<win.length; i++){
		if(win[i].every(isInArray)==true){
			return true;
		}
	}
	
		
	function isInArray(item){
		return winArr.indexOf(item)!=-1;
	}
	return false;
}

const clearBoard = (obj)=>{
	gameBoard.forEach((item)=>{
		if(item.hasChildNodes()){
			item.removeChild(item.lastChild);
		}
		
	})
	if(obj.hasOwnProperty('moves')){
		while(obj.moves.length>0){
			obj.moves.pop();
		}
	}
	
}





startFromRed();



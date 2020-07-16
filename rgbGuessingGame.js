var colors = generateRandomColors(numSquares);
var numSquares = 9;
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var win = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("resetB");
var eB = document.getElementById("eB");
var hB = document.getElementById("hB");


eB.addEventListener("click", function(){
	eB.classList.add("select");
	hB.classList.remove("select");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	win.textContent = pickedColor;
	h1.style.background = "#009999";
	messageDisplay.textContent = "";
	
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
		squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}
	
});

hB.addEventListener("click", function(){
	hB.classList.add("select");
	eB.classList.remove("select");
	h1.style.background = "#009999";
	numSquares = 9;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	win.textContent = pickedColor;
	messageDisplay.textContent = "";
	
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
		
	}
});

resetButton.addEventListener("click", function() {

	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();

	win.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
	}
	h1.style.backgroundColor = "#009999";
	messageDisplay.textContent = "";
	
});



win.textContent = pickedColor;


	
	for(var i = 0; i < squares.length; i++ ){
		
		//initial colors for squares
		squares[i].style.backgroundColor = colors[i];
		
		
		//click events for squares
		squares[i].addEventListener("click", function(){
				
				//grab the color of the clicked square
			var clickedSquare = this.style.backgroundColor;
			
		if(clickedSquare === pickedColor){
			messageDisplay.textContent = "YOU GOT IT!";
			changeColors(clickedSquare);
			h1.style.backgroundColor = clickedSquare;
		}
		else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
		});
	}
 function changeColors(arg){
	 for( var i = 0; i < squares.length; i++)
		 squares[i].style.backgroundColor = arg;
 }
 
 function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(arg){
	var arr = []
	
	for(var i = 0; i < arg; i++)
		arr.push(randomColor());
	return arr;
}

function randomColor(){
	
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
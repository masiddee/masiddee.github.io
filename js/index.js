$(document).ready(function(){
	$('#rock').click(function(){
		playGame('rock');
	});
	$('#paper').click(function(){
		playGame('paper');
	});
	$('#scissors').click(function(){
		playGame('scissors');
	});

	function playGame(userInput){
		
		var compSelection = getCompPlay();

		$('#userPlay').removeClass('rock paper scissors winner');
		$('#userPlay').addClass(userInput);

		$('#compPlay').removeClass('rock paper scissors winner');
		$('#compPlay').addClass(compSelection);

		if ((userInput == 'rock') && (compSelection == 'paper')){

			$('#compPlay').addClass('winner');

		}else if ((userInput == 'rock') && (compSelection == 'scissors')){

			$('#userPlay').addClass('winner');

		}else if ((userInput == 'paper') && (compSelection == 'rock')){
			
			$('#userPlay').addClass('winner');

		}else if ((userInput == 'paper') && (compSelection == 'scissors')){
			
			$('#compPlay').addClass('winner');

		}else if ((userInput == 'scissors') && (compSelection == 'paper')){
			
			$('#userPlay').addClass('winner');

		}else if ((userInput == 'scissors') && (compSelection == 'rock')){
			
			$('#compPlay').addClass('winner');

		}else{
			console.log("No one wins");
		}
	}

	function getCompPlay(){

		// Set computer options in JavaScript array
		var compOptions = ['rock','paper','scissors'];
		// Using Math.floor(), select a random value from the array and assign to the variable
		var compPlay = compOptions[Math.floor(compOptions.length*Math.random())];

		// Return this value to whatever variable called me...
		return compPlay;
	}
});
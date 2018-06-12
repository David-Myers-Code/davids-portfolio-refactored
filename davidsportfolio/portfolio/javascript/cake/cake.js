$(document).ready(function() {

	var cakeAmount;	//create global variables to be accessed by all functions
	var playerOne;
	var playerTwo;
	var submitValue;

	
	
$("#reset").click(function(){  //clears all text fields and span areas with reset button click
	$("span").text("");
	$("input:text").val("");
	$("#play").val("");
	$("#cakeOutput").val("");
	submitValue = false;

});

$("#submit").click(function(){		//submits the information to the game with the start button

	$("span").text("");		//clears the error messages
	var oneValid = true;		//creates a true/false variable to start game when it returns true
	var twoValid = true;
	var numValid = true;
	
	
	playerOne = $("#playerOne").val();		//get name of player one

	if(playerOne.length == 0){			//returns error message if player one is blank
	$("#oneError").text("Must enter a name for player one");
	oneValid = false;
	}
	else{			
		oneValid = true;
		}
	
	
	
	playerTwo = $("#playerTwo").val();		//get name of player two
	
	if(playerTwo.length == 0){		//returns error message if player two is blank
	    
     $("#twoError").text("Must enter a name for player two");
	 twoValid = false;
	}
	else if(playerOne == playerTwo  && playerOne.length != 0 && playerTwo.length != 0){	//makes sure that players don't have the same name
	$("#oneError").text("Players must have different names");
	$("#twoError").text("Players must have different names");
	twoValid = false;
	}
	else{
	twoValid = true;
	}

	
    cakeAmount = $("#cakeAmount").val();	//gets number of cakes
	 
	if(cakeAmount > 50 || cakeAmount < 10){		//checks to make sure cake number is between 10 and 50
		$("#cakeError").text("Must be a number between 10 and 50");		//error for number of cakes if not between 10 and 50
		numValid = false;
		}
	else if (cakeAmount == "cat"){		//if player enters cat amount of cakes, error message with meow
	$("#cakeError").text("Meow,  Must be a number between 10 and 50");
	numValid = false;
	}
	
	else if(isNaN(cakeAmount)){		//returns an error if number of cakes is not a number
	$("#cakeError").text("Not a real number");
	numValid = false;
	}
	else{
	numValid = true;
	}
	

	
	if(oneValid == true && twoValid == true && numValid == true ){		//if all conditions are met with no errors
	$("#cakeOutput").val(cakeAmount);		//output amount of cakes
	submitValue = true;				//creates true variable so buttons are activated
	$("#play").val("How many cakes will you eat?");

	}

	
});

$("#oneCake").click(function(){		//one cake button clicked
	if(cakeAmount - 1 == 0 && submitValue == true){		//if there is only one cake left player loses
	$("#play").val("You lose!");
	}
	else if(submitValue != true){		//makes sure all information is submitted
	$("#play").val("Enter the information first.");
	}
	else{		//player ate one cake and runs computers turn function
	cakeAmount = cakeAmount - 1;
	$("#cakeOutput").val(cakeAmount);
	$("#play").val("You ate one cake.");
	setTimeout(gamePlay , 2000);
	}


});
$("#twoCakes").click(function(){		//two cakes button clicked
	if(cakeAmount - 2 == 0 && submitValue == true){		//if the player eats the last two cakes, player loses
	$("#play").val("You lose!");
	}
	else if(submitValue != true){		//makes sure all information is submitted
	$("#play").val("Enter the information first.");
	}
	else if(cakeAmount - 2 < 0 && submitValue == true){		//makes sure player doesn't eat more cakes than are left
	$("#play").val("There's less than two cakes left to eat!");
	
	}
	else{		//player eats two cakes and runs computer turn function
	cakeAmount = cakeAmount - 2;
	$("#cakeOutput").val(cakeAmount);
	$("#play").val("You ate two cakes.");
	setTimeout(gamePlay , 2000);
	}


});
$("#threeCakes").click(function(){		//three cakes button clicked
	if(cakeAmount - 3 == 0 && submitValue == true){		//if player eats last three cakes, player loses
	$("#play").val("You lose");
	}
	else if(submitValue != true){		//makes sure all information is submitted
	$("#play").val("Enter the information first.");
	}
	else if(cakeAmount - 3 < 0 && submitValue == true){		//if player tries to eat more cakes than are left
	$("#play").val("There's less than three cakes left to eat!");
	
	}
	else{		//player eats three cakes
	cakeAmount = cakeAmount - 3;
	$("#cakeOutput").val(cakeAmount);
	$("#play").val("You ate three cakes.");
	setTimeout(gamePlay , 2000);		//run computer turn function
	}


});

var gamePlay = function(){		//function for game play

	var computerTurn = Math.floor((Math.random()*100)+1)%3;		//create random number for computer turn 0 - 2
	computerTurn = computerTurn + 1;		//adds one so that computer number is 1 - 3
	
	if(cakeAmount == 1){		//if computer eats last cake
	$("#play").val(playerTwo + " loses!");
	}
	else if(cakeAmount == 2){		//if there are two cakes left computer only eats one cake
	cakeAmount = cakeAmount - 1;
	$("#play").val(playerTwo +" ate one cake.");
	$("#cakeOutput").val(cakeAmount);
	}
	else if(cakeAmount == 3){		//if there are three cakes left computer only eats two
	$("#play").val(playerTwo + " ate two cakes.");
	cakeAmount = cakeAmount - 2;
	$("#cakeOutput").val(cakeAmount);
	}
	else{		//computer eats random amount of cakes
	cakeAmount = cakeAmount - computerTurn;
	$("#play").val(playerTwo +" ate " +computerTurn+ " cakes.");
	$("#cakeOutput").val(cakeAmount);
	
	}
	}
	





});
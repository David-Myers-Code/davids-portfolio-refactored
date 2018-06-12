$(document).ready(function(){
$("#win").hide();		//hides the win condition



$("td").click(function(){				//function that runs on each td click
	$("#win").hide();
	var boxValue = ($(this).index())+1;		//creates a variable that will allow acces to the surrounding td elements
	$(this).toggleClass("blueBox redBox");	//toggles between blue and red class
	$(this).next().toggleClass("blueBox redBox");		//changes the next td element
	$(this).prev().toggleClass("blueBox redBox");		//changes the previous td element
	$(this).parent().next().children(":nth-child("+boxValue+")").toggleClass("blueBox redBox");	//selects the td below the selected td
	$(this).parent().prev().children(":nth-child("+boxValue+")").toggleClass("blueBox redBox");	//selects the td above the selected td
	
	var numRed = $(".redBox").size();  //create variable from number of boxes that are red
	
	if(  numRed == 16 ){	//if loop that checks for all boxes being red
	//alert("You win!");

	$("td").toggleClass("blueBox redBox", 3000);	//resets the game board

	
	$("#win").fadeIn(3000);		//fades in win banner

	}
	
	});
	
$("#random").click(function(){  //radomize button
	$("#win").hide();	//hides the win baner
	
	var i = 1;				//create a variable for looping through the td elements
	
	while( i < 16 ){			//loop through the td elements
	
	var random = Math.random();			//create random number each time it loops
	
	if( random < .5 ){		//if random number is less than .5 change the button to red
		$("td").eq(i).toggleClass("blueBox redBox", 500)
		}
	i = i + 1;
	
	}
	
	
	});



	



});
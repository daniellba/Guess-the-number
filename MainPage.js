
var MainPage = function()	//moduling the appliction
{  
	
var randomNum = Math.floor((Math.random() * 100) + 1); //randomize a number
var results = {game:[]};	//json

function GuessingGame()	//main function
{	
	$("#popup").hide();
	var UserInput = document.getElementById("textArea").value; //taking the user's input
	const display = document.querySelector('.display');	//defines the display
	
	if(UserInput < 1 || UserInput > 100)
	{
		$("#popup").show(0);
	}
		
	
	if(randomNum == UserInput)
	{
		$("#D_area").show(100);
	}
	
	if(UserInput < randomNum)
	{
		var temp = {'guess': UserInput , 'Bigger':false};	
		//chaning data to json array
		$("#Table").append("<tr><td>"+UserInput+"</td><td>"+"Smaller"+"</tr>"); 
		//inserting to the table
	}
	
	if(UserInput > randomNum)
	{
		var temp = {'guess': UserInput , 'Bigger':true};
		//chaning data to json array
		$("#Table").append("<tr><td>"+UserInput+"</td><td>"+"Bigger"+"</tr>");
		//inserting to the table
	}
	results.game.push(temp);	
}

function NewGame()
{
	window.location.reload(true);
}

var onLoad = function(){	
//loading the page, in case a button is pressed it goes to the relavnet function
	console.log("da");
	$("#D_area").hide();
	$("#popup").hide();
	$("#guessBTN").click(GuessingGame);
	$("#NewGameBTN").click(NewGame);
	
}
var getResults = function(){	//json call
	return results;
}
return {
onLoad : onLoad,
getResults : getResults
};
}();

$(document).ready(
function(){
	MainPage.onLoad();
});


var input=0;

function changeBG(input){
	/*
	This function will implement several boolean rules to determine which bg image to add to "body"
	For example, if user inputs NeW York/NYC/New York City, it will remove all existing class in body and
	add .nyc class to display the appropriate bg images
	*/
	if (input=="New York"||input=="NYC"||input=="New York City"){
		$('body').removeClass();
		$('body').addClass('nyc');
		console.log('change to NY');
	} else if (input=="San Francisco"||input=="SF"||input=="Bay Area"){
		$('body').removeClass();
		$('body').addClass('sf');
		console.log('change to SF');
	} else if (input=="Los Angeles"||input=="LA"||input=="LAX"){
		$('body').removeClass();
		$('body').addClass('la');
		console.log('change to LA');
	} else if (input=="Austin"||input=="ATX"){
		$('body').removeClass();
		$('body').addClass('austin');
		console.log('change to Austin');
	} else if (input=="Sydney"||input=="SYD"){
		$('body').removeClass();
		$('body').addClass('sydney');
		console.log('change to Sydney');
	}
};


$(document).ready(function(){
	/*
	Pseudocode:
	1) Setup an onclick listener for the submit button
	2) When it is click, prevent the default action of form tag from refreshing the page 
	3) Get value of user's input using .val() and store it in a local variable, city
	4) Call changeBG(city) so that the function knows what the input parameter is
	5) Function will add specific pre-defined classes which will change bg image accordingly
	*/
	var city=0;
	$('#submit-btn').click(function(event){
		event.preventDefault();
		city=$('#city-type').val();
		changeBG(city);
		//console.log("click is working");
	});
});
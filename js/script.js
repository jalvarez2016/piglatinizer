// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an ay, or if a word
// begins with a vowel you just add ay to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkay.
// CREATE THE FUNCTIONS BELOW
/* global $*/
// Document Ready Function. All of your jQuery should go in here.

function wordToPigLatin(){
	var word = $("#word").val().toLowerCase();
	var checker = word.charAt(0);
	if( checker === "a" || checker === "e" || checker === "i" || checker === "o" || checker === "u" ){
		var pig = word+"ay";
		console.log(pig);
		$("#result").html(pig);
	} else {
		var first = word.charAt(0);
		var why = word.slice(1) + first + "ay";
		console.log(word);
		console.log(word.charAt(0));
		console.log(word.slice(1));
		$("#result").html(why);
	}
}

function PigLatinToword(){
	var word = $("#inverse").val().toLowerCase();
	console.log(word.slice(-2));
	if( word.slice(-2) === "ay" ){
		$("#result").html(" ");
		var pig = word.split("");
		console.log(pig);
		pig.pop();
		pig.pop();
		console.log(pig);
		for( var i = 0; i < pig.length + 1; i ++){
			$("#result").append(pig[i]);
			console.log(pig[i]);
		}
	} else {
		$("#result").html("Invalid input");
	}
}

$( document ).ready(function() {
  $("#submit").click(function(){
  	wordToPigLatin();
  });
  $("#translate").click(function(){
  	PigLatinToword();
  });


});


// Create the wordToPigLatin function that takes a word as a parameter and returns a transfromed word. 






// Create the sentenceToPigLatin function that takes a sentence as a parameter
	//Loops through all the words in the sentence and transforms each word
	//It should return a transfromed sentance



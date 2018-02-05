// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an ay, or if a word
// begins with a vowel you just add ay to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkay.
// CREATE THE FUNCTIONS BELOW
/* global $*/
// Document Ready Function. All of your jQuery should go in here.

var dogs = ["DOGS ARE THE BEST"]

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

function SentencetoPiglatin() {
	$("#result").html("");
	var word = $("#word").val().toLowerCase();
	var sentence = word.split(' ');
	for(var i = 0; i<sentence.length; i ++){
		var each = sentence[i];
		var checker = each.charAt(0);
		var second = each.charAt(1);
		var third = each.charAt(2);
		var clusty = checker + second + third;
		var cluster = checker + second;
		if( checker === "a" || checker === "e" || checker === "i" || checker === "o" || checker === "u" ){
			$("#result").append(sentence[i] + "ay ");
		} else if(cluster === "ch" || cluster === "th" || cluster === "sh"){
			var please = each.slice(2) + cluster + "ay ";
			$("#result").append(please);
		} else if(clusty === "str" ){
			var three = each.slice(3) + clusty + "ay ";
			$("#result").append(three);
		} else{
			var why = each.slice(1) + checker +"ay ";
			$("#result").append(why);
		}
	}
}

function PigLatinToSentence(){
	$("#result").html("");
	var word = $("#inverse").val().toLowerCase();
	var sentence = word.split(" ");
	for(var i = 0; i < sentence.length; i++){
		var each = sentence[i];
		if(each.slice(-2) === "ay"){
			var pig = each.split("");
			console.log(pig);
			pig.pop();
			pig.pop();
			console.log(pig);
			for( var a = 0; a < pig.length + 1; a ++){
				$("#result").append(pig[a]);
			}
		} else {
			$("#result").html("Invalid input");
		}
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

function SentencetoCode(){
	$("#show").html("");
	var word = $("#extend").val().toLocaleLowerCase();
	console.log(word);
	var why = word.split("");
	console.log(why);
	var letters = why;
	console.log(letters);
	for(var i = 0; i<letters.length; i++){
		var now = letters[i];
		if(now === "a" || now === "e" || now === "i" || now === "o" || now === "u"){
			var save = " DOG" + now + "S AR" + now+ now+ now+ now+ now + "E THE BEST" + now;
			$("#show").append(save + " ");
		} else {
			$("#show").append(now);
		}
	}
}

function CodetoSentence(){
	$("#show").html("");
	var word = $("#shrink").val();
	console.log(word);
	var why = word.split("");
	var cut = dogs.split("");
	for(var i = 0; i<why.length ; i++){
		var now = why[i];
		var select = cut[i];
		if(now === select){
			
		} else {
			$("")
		}
	}
}

$( document ).ready(function() {
  $("#clear").click(function(){
  	$("#result").html("");
  });
  
  $("#submit").click(function(){
  	SentencetoPiglatin();
  });
  
  $("#translate").click(function(){
  	PigLatinToSentence();
  });
  
  $("#encode").click(function(){
  	SentencetoCode();
  });
  
  $("#decode").click(function(){
  	CodetoSentence();
  });

});


// Create the wordToPigLatin function that takes a word as a parameter and returns a transfromed word. 






// Create the sentenceToPigLatin function that takes a sentence as a parameter
	//Loops through all the words in the sentence and transforms each word
	//It should return a transfromed sentance



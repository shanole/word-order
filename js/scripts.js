function wordCounter(arr) {
	let wordList = [];
	let numberList = [];

  arr.forEach(function(wordRaw) {
		const word = wordRaw.toLowerCase();

    if (wordList.includes(word) === false) {
      // add the new word to the list with a counter of 1
			wordList.push(word);
			numberList.push(1);
    }
    else {
			// do not re-add the word but increase counter +1
			const index = wordList.findIndex(function(element) {
				return element === word;
			});

			numberList[index] += 1;
    }
	});
  let wordAndCountList = [];
	for (let i=0; i < wordList.length; i+=1) {
		wordAndCountList.push(wordList[i]+" "+ numberList[i]);
  }
  return wordAndCountList;
}

$(document).ready(function() {
	$("form#userInputForm").submit(function(event) {
		event.preventDefault();
    const userInputArray = $("input#userInput").val().split(" ");
    const finalWordCount = wordCounter(userInputArray);

    finalWordCount.forEach(function(element) {
      $("ul#resultsList").append("<li>"+element+"</li>");
    })
    $("#results").show();
	});
});

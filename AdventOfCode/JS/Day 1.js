answer = 0;
mapping = { "1": "1", "2": "2", "3": "3", "4": "4", "5": "5", "6": "6", "7": "7", "8": "8", "9": "9", "one": "1", "two": "2", "three": "3", "four": "4", "five": "5", "six": "6", "seven": "7", "eight": "8", "nine": "9" };
document.getElementsByTagName('PRE')[0].innerText.split('\n').forEach((line) => {
    if (line == "") return;
    searchTerms = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    foundPositions = {};

    searchTerms.forEach((term) => {
        var position = line.indexOf(term);
        if (position > -1) {
            foundPositions[position.toString()] = term;
            while (position > -1 && position < line.length) {
                position = line.indexOf(term, position + 1);            
                if (position > -1) {
                    foundPositions[position.toString()] = term;
                }
            }
        }
    });
    console.log(line);
    var orderedKeys = Object.keys(foundPositions).sort(function(a, b){return b-a});    
    console.log("   Ordered Keys:" + orderedKeys);
    var lastPosition = orderedKeys[0];
    var firstPosition = orderedKeys[orderedKeys.length - 1];
    console.log("   Keys: " + firstPosition +" "+ lastPosition);
    var firstValue = foundPositions[firstPosition];
    var lastValue = foundPositions[lastPosition];
    console.log("   Values: " + firstValue +" "+ lastValue);
    var firstMapped = mapping[firstValue];
    var lastMapped = mapping[lastValue];
    console.log("   Mapped: " + firstMapped +" "+ lastMapped);
    var lineAnswer  = parseInt(firstMapped + lastMapped);
    console.log("   Line Answer: " + lineAnswer);
    answer += lineAnswer
    console.log("Answer: " + answer);

});
console.log(answer);


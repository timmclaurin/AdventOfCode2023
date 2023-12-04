answer = 0;
mapping = { "1": "1", "2": "2", "3": "3", "4": "4", "5": "5", "6": "6", "7": "7", "8": "8", "9": "9", "one": "1", "two": "2", "three": "3", "four": "4", "five": "5", "six": "6", "seven": "7", "eight": "8", "nine": "9" };
document.getElementsByTagName('PRE')[0].innerText.split('\n').forEach((line) => {
    if (line == "") return;
    matches = [...line.matchAll(/(?=(one|two|three|four|five|six|seven|eight|nine|\d))/g)];
    answer += parseInt(mapping[matches[0][1]] + mapping[matches[matches.length - 1][1]]);

});
console.log(answer);


answer = 0;

document.getElementsByTagName('PRE')[0].innerText.split('\n').forEach((line) => {
    if (line == "") return;
    matches = [...line.matchAll(/(?=(one|two|three|four|five|six|seven|eight|nine|\d))/g)];
    answer += parseInt(mapping[matches[0][1]] + mapping[matches[matches.length - 1][1]]);

});
console.log(answer);


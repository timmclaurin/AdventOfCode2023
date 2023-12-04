answer = 0;
totalgamePower = 0;
lineNumber = 0;
lineData = [];
document.getElementsByTagName('PRE')[0].innerText.split('\n').forEach((line) => {
    if (line == "") return;
    lineData[lineNumber] = {
        line: line,
        symbols: [...line.matchAll(/([^\d\.])/g)],
        digits: [...line.matchAll(/(\d{1,})/g)],
        partMatchesAfter: [...line.matchAll(/((\d{1,})[^\.\d])/g)],
        partMatchesBefore: [...line.matchAll(/([^\.\d](\d{1,}))/g)],
        partNumbers: []
    }
    lineNumber += 1;
});

for (i = 0; i < lineData.length; i++) {
    console.log('Line ' + (i+1) + ' of ' + lineData.length);
    thisLine = lineData[i];
    previousLine = i > 0 ? lineData[i - 1] : null;
    nextLine = lineData[i + 1];

    inLinePartNumbers = thisLine.partNumberMatches;

    inLinePartNumbers.forEach((partNumber) => {
        if (partNumber[2] != undefined) {
            thisLine.partNumbers.push(partNumber[2] );
        }
        if (partNumber[4] != undefined) {
            thisLine.partNumbers.push(partNumber[4]);
        }      
        
    });

    for (j = 0; j < thisLine.digits.length; j++) {
        var thisDigit = thisLine.digits[j];
        var symbolRangeStart = thisDigit.index > 0 ? thisDigit.index - 1 : thisDigit.index;
        var symbolRangeEnd = thisDigit.index + thisDigit[0].length + 1;
     
        if (previousLine) {
            previousLine.symbols.forEach((symbol) => {
                if (symbol.index >= symbolRangeStart && symbol.index <= symbolRangeEnd) thisLine.partNumbers.push(thisDigit[0]);
            });
        }
        if (nextLine) {
            nextLine.symbols.forEach((symbol) => {
                if (symbol.index >= symbolRangeStart && symbol.index <= symbolRangeEnd) thisLine.partNumbers.push(thisDigit[0]);
            });
        }
    }
    console.log(thisLine.partNumbers);
    const sum = thisLine.partNumbers.reduce((partialSum, a) => partialSum + parseInt(a), 0);
    console.log(sum);
    answer += sum;
};

console.log(answer);
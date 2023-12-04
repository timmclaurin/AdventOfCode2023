answer = 0;
totalgamePower = 0;
document.getElementsByTagName('PRE')[0].innerText.split('\n').forEach((line) => {
    if (line == "") return;
    var inputData = [...line.matchAll(/Game (\d{1,}):(.*)/g)];
    var gameNumber = inputData[0][1];
    var gameData = inputData[0][2].split(";");

    console.log("Game# " + gameNumber);
    console.log("   rolls: " + gameData.length);
    var invalidGame = false;
    var minBlue = 0;
    var minGreen = 0;
    var minRed = 0;
    var gamePower = 0;

    gameData.forEach((rollsStr) => {
        var rolls = rollsStr.split(",");
        rolls.forEach((roll) => {
            var cube = roll.trim().split(" "),
                cubeCount = parseInt(cube[0]),
                cubeColor = cube[1];
            //console.log(cube);
            if ((cubeColor == "red" && cubeCount > 12) ||
                (cubeColor == "green" && cubeCount > 13) ||
                (cubeColor == "blue" && cubeCount > 14)) {
                invalidGame = true;
                console.log("   invalid game");
            }
            if (cubeColor == "red" && cubeCount > minRed) {
                minRed = cubeCount;
            }

            if (cubeColor == "green" && cubeCount > minGreen) {
                minGreen = cubeCount;
            }

            if (cubeColor == "blue" && cubeCount > minBlue) {
                minBlue = cubeCount;
            }
        });
    });
    gamePower = minRed * minGreen * minBlue;
    totalgamePower += gamePower;
    if (!invalidGame) {
        answer += parseInt(gameNumber);
        console.log("   Sum of ID: " + answer);
    }
    
});
console.log("Total Game power: " + totalgamePower);
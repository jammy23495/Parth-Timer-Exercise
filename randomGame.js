function randomGame() {
    let counter = 0;
    var timer = setInterval(function () {
        //Get the random number
        var randomNumber = Math.random();
        if (randomNumber > 0 && randomNumber < 0.75) {
            counter = counter + 1;

            console.log("Value is : " + randomNumber + " and Counter reaches : " + counter)
        } else {
            clearInterval(timer)
            console.log("Value is : " + randomNumber)
        }
    }, 1000)
}

randomGame()
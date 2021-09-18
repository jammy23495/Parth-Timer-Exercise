//Declaring the function
function countdown(n) {
    console.log(n)
    var timer = setInterval(function () {
        //Decrement by 1
        n = n - 1;
        //Check if the value reaches 0
        if (n == 0) {
            console.log("Done")
            clearInterval(timer)
        } else {
            console.log(n)
        }
    }, 1000);
}

//Calling the function
countdown(5)
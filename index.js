let secretNum = 50

let numOfTries = 0

let btn = document.querySelector("#btn")

btn.addEventListener("click", function() {

    let cardDisplay = document.querySelector("#card-handler")

    let output = document.querySelector("#output")

    let input = document.querySelector(".input").value

    let tries = document.querySelector("#tries")

    let btnClear = document.querySelector("#btn-2");
    btnClear.disabled = true;

    let closeBtn = document.querySelector("#button")
    closeBtn.addEventListener("click", function() {
        cardDisplay.style.display = "none"
    })


   do {

    if (input == secretNum) {
        output.innerHTML = `Correct! ${input} is the number I chose` 
        numOfTries++
        tries.innerHTML = `It took you ${numOfTries} try/tries to guess the correct number.`
        btnClear.disabled = false;
    }
    else if (input == "") {
        cardDisplay.style.display = "block"
    }
    else if (input > secretNum) {
        output.innerHTML = `Try again, the number ${input} is to high!`
        numOfTries++
    }
    else if (input < secretNum) {
        output.innerHTML = `Try again, the number ${input} is to small!`
        numOfTries++
    }

} while(false)
});






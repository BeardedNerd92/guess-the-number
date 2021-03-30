let secretNum = Math.floor(Math.random() * 50)

let numOfTries = 0

let playerNameCard = document.querySelector("#player-name-card")

let cardDisplay = document.querySelector("#card-handler")

let mainClass = document.querySelector("#main_class")

let welcome = document.querySelector(".welcome")


let btn = document.querySelector("#btn")
btn.addEventListener("click", function() {

    let output = document.querySelector("#output")

    let input = document.querySelector("#users-input").value

    let tries = document.querySelector("#tries")

    let btnClear = document.querySelector("#btn-2");
    btnClear.disabled = true;

   do {

    if (input == secretNum) {
        output.innerHTML = `Correct! ${input} is the number I am looking for.` 
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


let closeBtn = document.querySelector("#button")
closeBtn.addEventListener("click", function() {
     cardDisplay.style.display = "none"
})

let playGameBtn = document.querySelector("#play-game-btn")
playGameBtn.addEventListener("click", function() {
    let playerName = document.querySelector("#player-name").value
    playerNameCard.style.display = "none"
    mainClass.style.display = "block"
    if (playerName !== "")
        welcome.innerHTML = `Welcome ${playerName}`.toUpperCase()
    if (playerName == "")
        welcome.innerHTML = "Welcome Player"
})





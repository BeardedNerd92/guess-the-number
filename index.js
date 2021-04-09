let secretNum = Math.floor(Math.random() * 50)

let numOfTries = 0

let playerNameCard = document.querySelector("#player-name-card")

let cardDisplay = document.querySelector("#card-handler")

let mainClass = document.querySelector("#main_class")

let welcome = document.querySelector(".welcome")

let loadGame = document.querySelector("#load-game")



let btn = document.querySelector("#btn")
btn.addEventListener("click", function() {


    let invalidInput = document.querySelector('#invalid-input')

    let output = document.querySelector("#output")

    let input = document.querySelector("#users-input").value

    let tries = document.querySelector("#tries")

    let btnClear = document.querySelector("#btn-2");

    let invalidSign = document.querySelector('#invalid-sign')

    let border = document.querySelector('#border')


    

   do {

        if (input == secretNum) {
            output.innerHTML = `Correct! ${input} is the number I am looking for.` 
            numOfTries++
            tries.innerHTML = `It took you ${numOfTries} try/tries to guess the correct number.`
            btnClear.style.display = 'block';
        }
        if (input === "") {
            invalidInput.style.display = 'block'
            output.style.display = 'none'
            invalidSign.style.display = 'block'
        }
        if(input !== ''){
            output.style.display = 'block'
            invalidInput.style.display = 'none'
            invalidSign.style.display = 'none'
        }
        if (input > secretNum) {
            output.innerHTML = `Try again, the number ${input} is too high!`
            numOfTries++
        }
        if (input < secretNum) {
            output.innerHTML = `Try again, the number ${input} is too small!`
            numOfTries++
        }

    } while(false)

});






let toggleOn = document.querySelector('#toggle-on')
toggleOn.addEventListener('click', function(){
    
    let darkMode = document.body
    darkMode.classList.toggle("dark-mode")
    
})
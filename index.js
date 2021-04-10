// Toggle switch for dark mode.

let toggleOn = document.querySelector('#toggle-on')
toggleOn.addEventListener('click', function()
{
    
    let darkMode = document.body
    darkMode.classList.toggle("dark-mode")
    
})




// Variables for btn logic

let secretNum = Math.floor(Math.random() * 50)

let numOfTries = 1

let gameOver = 8





// Submit btn logic

let btn = document.querySelector("#btn")
btn.addEventListener("click", function() 
{
    let outputForTries = document.querySelector('#output-for-tries')

    let invalidInput = document.querySelector('#invalid-input')

    let output = document.querySelector("#output")

    let input = document.querySelector("#users-input").value

    let tries = document.querySelector("#tries")

    let btnClear = document.querySelector("#btn-2");

    let invalidSign = document.querySelector('#invalid-sign')

    let gameOverDisplay = document.querySelector('#game-over')


    

   do {

        if (input == secretNum) 
        {
            outputForTries.style.display = 'none'
            output.innerHTML = `Correct! ${input} is the number I am looking for.` 
            tries.innerHTML = `It took you ${numOfTries} try/tries to guess the correct number.`
            btn.style.display = 'none'
            btnClear.style.display = 'block';
        }

        if (input === "")
        {
            invalidInput.style.display = 'block'
            output.style.display = 'none'
            invalidSign.style.display = 'block'
        }

        if (input !== '')
        {
            output.style.display = 'block'
            invalidInput.style.display = 'none'
            invalidSign.style.display = 'none'
        }

        if (input > secretNum) 
        {
            outputForTries.innerHTML = `Number of guesses: ${numOfTries++}`
            output.innerHTML = `Try again, the number ${input} is too high!`
        }

        if (input < secretNum) 
        {
            outputForTries.innerHTML = `Number of guesses: ${numOfTries++}`
            output.innerHTML = `Try again, the number ${input} is too small!`
        }

        if (numOfTries === gameOver) 
        {
            btn.style.display = 'none'
            output.style.display = 'none'
            gameOverDisplay.style.display = 'block'
            btnClear.style.display = 'block';
        }

    } while(false)

});
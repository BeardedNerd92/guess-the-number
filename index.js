let secretNum = 50
let numOfTries = 0
let btn = document.querySelector("#btn")

btn.addEventListener("click", function() {

    let output = document.querySelector("#output")
    let warning = document.querySelector(".warning")
    let input = document.querySelector(".input").value
    let tries = document.querySelector("#tries")
    let btnClear = document.querySelector("#btn-2");
    btnClear.disabled = true;

    function timeDelay() {
        setTimeout(delay, 3000)
    }
     
   do {

    if (input == secretNum) {
        output.innerHTML = `Correct!` 
        numOfTries++
        tries.innerHTML = `The total number of tries = ${numOfTries}`
        btnClear.disabled = false;
    }
    else if (input == "") {
        alert("Warning: Input field must not be empty!")
        
    }
    else if (input > secretNum) {
        output.innerHTML = "Try again, number inputed was to high!"
        numOfTries++
    }
    else if (input < secretNum) {
        output.innerHTML = "Try again, number inputed was to small!"
        numOfTries++
    }

} while(false)
});



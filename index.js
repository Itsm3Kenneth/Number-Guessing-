let answer = Math.floor(Math.random() * 100 + 1)
let hint = document.getElementById("hint")
console.log(answer)

function enter(){
    console.log("button clicked")
    let guess = document.getElementById("user-input").value;
    if (guess < answer){
        hint.textContent = "Number is to low"
    }
    else if (guess > answer){
        hint.textContent = "Number is to high"
    }
    else if (guess == answer){
        hint.textContent = "Correct"
    }
    else if (guess === "seth the cat"){
        hint.textContent = "😡😡😡😡😡😡😡"
    }
    else{
        hint.textContent = "Invaild input"
    }
}

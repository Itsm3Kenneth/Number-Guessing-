let answer = Math.floor(Math.random() * 100 + 1)

console.log(answer)

function enter(){
    console.log("button clicked")
    let guess = document.getElementById("user-input").value;
    if (guess < answer){
        document.getElementById("hint").textContent = "Number is to low"
    }
    else if (guess > answer){
        document.getElementById("hint").textContent = "Number is to high"
    }
    else if (guess == answer){
        document.getElementById("hint").textContent = "Correct"
    }
    else if (guess === "seth the cat"){
        document.getElementById("hint").textContent = "😡😡😡😡😡😡😡"
    }
    else{
        document.getElementById("hint").textContent = "Invaild input"
    }
}

const theForm = document.getElementById("form");
const theInput = document.querySelector("input");
const btn = document.getElementById("btn")
const player = document.getElementById("pChoice");
const computer = document.getElementById("cChoice");

let clickStop = 0;

let rpsArray = ["Rock", "Paper", "Scissors"]

const computerChoice = (ind) =>{
    return rpsArray[ind]
}

btn.addEventListener("click", (e) => {
    e.preventDefault();
    const ind = Math.floor(Math.random() * 3);
    console.log(`The computer chose ${computerChoice(ind)}`)
    let val = theInput.value;
    let playerChoice = document.createElement("h1");
    let compChoice = document.createElement("h1");
    while(clickStop < 1){
        clickStop += 1
        playerChoice.innerHTML = val;
        compChoice.innerHTML = computerChoice(ind);
        player.appendChild(playerChoice);
        computer.appendChild(compChoice);
        if(val === "Rock" && computerChoice(ind) === "Scissors"){
        console.log("You win!")
    }
    }
    
})




const theForm = document.getElementById("form");
const theInput = document.querySelector("input");
const btn = document.getElementById("btn")
let player = document.getElementById("pChoice");
let computer = document.getElementById("cChoice");

let clickStop = 0;

let rpsArray = ["Rock", "Paper", "Scissors"]



const computerChoice = (ind) =>{
    return rpsArray[ind]
}

//while(clickStop < 4){
    function game(e){
        
            e.preventDefault();
            player.innerHTML = ""
            computer.innerHTML = ""
            const ind = Math.floor(Math.random() * 3);
            console.log(`The computer chose ${computerChoice(ind)}`)
            let val = theInput.value;
            let playerChoice = document.createElement("h1");
            let compChoice = document.createElement("h1");
            
            
            let whoa = playerChoice.innerHTML = val;
            let hmm = computerChoice(ind);
            player.innerHTML = whoa
            computer.innerHTML = hmm
            //player.appendChildChild(playerChoice);
            //computer.appendChild(compChoice);
            if(val === "Rock" && computerChoice(ind) === "Scissors"){
                console.log("You win!")
            }
            }
            
            clickStop += 1
            
        
    

btn.addEventListener("click", game )





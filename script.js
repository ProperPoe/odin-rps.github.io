const theForm = document.getElementById("form");
const theInput = document.querySelector("input");
const btn = document.getElementById("btn")
let player = document.getElementById("pChoice");
let computer = document.getElementById("cChoice");
const pScore = document.getElementById("pScore");
const cScore = document.getElementById("cScore");
const result = document.getElementById("result");

let clickStop = 0;
let playScore = 0;
let compScore = 0;

let rpsArray = ["Rock", "Paper", "Scissors"]



const computerChoice = (ind) =>{
    return rpsArray[ind]
}

//while(playScore !== 5){
    function game(e){
        
            e.preventDefault();
            
            const ind = Math.floor(Math.random() * 3);
            let val = theInput.value;
            let hmm = computerChoice(ind);
            player.innerHTML = val
            computer.innerHTML = hmm
            //player.appendChildChild(playerChoice);
            //computer.appendChild(compChoice);
            if(val === "Rock" && computerChoice(ind) === "Scissors"){
                playScore += 1
                pScore.innerHTML = playScore
            }else if(val === "Scissors" && computerChoice(ind) === "Rock"){
                compScore += 1
                cScore.innerHTML = compScore;
            }
            if(val === "Paper" && computerChoice(ind) === "Rock"){
                playScore += 1
                pScore.innerHTML = playScore
            }else if(val === "Rock" && computerChoice(ind) === "Paper"){
                compScore += 1
                cScore.innerHTML = compScore;
            }
            if(val === "Scissors" && computerChoice(ind) === "Paper"){
                playScore += 1
                pScore.innerHTML = playScore
            }else if(val === "Paper" && computerChoice(ind) === "Scissors"){
                compScore += 1
                cScore.innerHTML = compScore;
            }
            
            if(playScore === 5){
                result.innerHTML = "You win!"
                pScore.innerHTML = 0
            }else if(compScore === 5){
                result.innerHTML = "Computer wins"
                cScore.innerHTML = 0
            }
            
    }
            
//}
            
        
    

btn.addEventListener("click", game )





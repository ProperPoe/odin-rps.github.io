const theForm = document.getElementById("form");
const theInput = document.querySelector("input");
const rockBtn = document.getElementById("rockBtn")
const paperBtn = document.getElementById("paperBtn")
const scizBtn = document.getElementById("scizBtn")
const reset = document.getElementById("resetBtn")
const player = document.getElementById("pChoice");
const computer = document.getElementById("cChoice");
const pScore = document.getElementById("pScore");
const cScore = document.getElementById("cScore");
const result = document.getElementById("result");

let playScore = 0;
let compScore = 0;

let gameActive = true;

let rpsArray = ["Rock", "Paper", "Scissors"]



const computerChoice = (ind) =>{
    return rpsArray[ind]
}  


const game = (btnValue) => {
    const ind = Math.floor(Math.random() * 3);
    let val = btnValue;
    let compVal = computerChoice(ind);
    player.innerHTML = val;
    computer.innerHTML = compVal;

    if(val){
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
            gameActive = false
        }else if(compScore === 5){
            result.innerHTML = "Computer wins"
            gameActive = false
        }
    }  
}
    
rockBtn.addEventListener("click", ()=> {
    if(gameActive){
        game(rockBtn.value)
    }
    
})  
paperBtn.addEventListener("click", ()=> {
    if(gameActive){
        game(paperBtn.value)
    }
    
})  
scizBtn.addEventListener("click", ()=> {
    if(gameActive){
        game(scizBtn.value)
    }
    
})  

reset.addEventListener("click", () => {
    player.innerHTML = "";
    computer.innerHTML = "";
    pScore.innerHTML = "0";
    cScore.innerHTML = "0";
    result.innerHTML= "";
    playScore = 0;
    compScore = 0;
    gameActive = true;
})
            
          
        













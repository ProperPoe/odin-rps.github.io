const theForm = document.getElementById("form");
const theInput = document.querySelector("input");
const btn = document.getElementById("btn")



let rpsArray = ["Rock", "Paper", "Scissors"]

const computerChoice = (ind) =>{
    return rpsArray[ind]
}

btn.addEventListener("click", (e) => {
    e.preventDefault();
    const ind = Math.floor(Math.random() * 3);
    console.log(`The computer chose ${computerChoice(ind)}`)
    let val = theInput.value;
    if(val === "Rock" && computerChoice(ind) === "Scissors"){
        console.log("You win!")
    }
})




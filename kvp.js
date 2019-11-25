
// Tämä on KPS vol. 2. 
// vol.2 versiossa AI ei arvo "asetta" vaan tekee päätökset logiikan avulla. 
// Jos AI häviää. Se ottaa seuraavaan peliin sen käden, joka voittaisi äskisen voittajan.
// Jos AI voittaa. Se valitsee sen käden joka voittaisi äskisen "voittaja-käden."
// Nappeja ja muuta määrittelyä.
//

var startBtn = document.getElementById("newBtn");
var rockChoice = document.getElementById("rockBtn");
var paperChoice = document.getElementById("paperBtn");
var scissorsChoice = document.getElementById("scissorsBtn");
var choicePic = document.getElementById("choicePic");
var winnerTxt = document.getElementById("winnerTxt");
var pointsTxt = document.getElementById("pointsTxt");
var choiceTxt = document.getElementById("choiceTxt");
var bigLineTxt = document.getElementById("bigLineTxt");
var gameArea = document.getElementById("gameArea");

var count = 0;
var playerPoints = 0;
var aiPoints = 0;
var aiStatus = 1;
var pStatus = 1;
var playerChoice2;
var aiChoice2;
var lastUsedP;
var lastUsedAi;
var playerChoice;

// Määrittelyä.
//

if(playerChoice === "SCISSORS" && AI_Choice === "ROCK"){
    pStatus = 0;
    aiStatus = 2;
}
else if(playerChoice === "SCISSORS" && AI_Choice === "PAPER"){
    pStatus = 2;
    aiStatus = 0;   
}
else if(playerChoice === "SCISSORS" && AI_Choice === "SCISSORS"){
    pStatus = 1;
    aiStatus = 1;   
}
else if(playerChoice === "PAPER" && AI_Choice === "ROCK"){
    pStatus = 2;
    aiStatus = 0;   
}
else if(playerChoice === "PAPER" && AI_Choice === "PAPER"){
    pStatus = 1;
    aiStatus = 1;   
}
else if(playerChoice === "PAPER" && AI_Choice === "SCISSORS"){
    pStatus = 0;
    aiStatus = 2;   
}
else if(playerChoice === "ROCK" && AI_Choice === "ROCK"){
    pStatus = 1;
    aiStatus = 1;   
}
else if(playerChoice === "ROCK" && AI_Choice === "PAPER"){
    pStatus = 0;
    aiStatus = 2;   
}
else if(playerChoice === "ROCK" && AI_Choice === "SCISSORS"){
    pStatus = 2;
    aiStatus = 0;   
}


if( playerChoice() === "ROCK"){
    playerChoice2 = 1;
}
else if( playerChoice() === "SCISSORS"){
    playerChoice2 = 2;
}
else if( playerChoice() === "PAPER"){
    playerChoice2 = 0;
}
if( AI_Choice() === "ROCK"){
    aiChoice2 = 1;
}
else if( AI_Choice() === "SCISSORS"){
    aiChoice2 = 2;
}
else if( AI_Choice() === "PAPER"){
    aiChoice2 = 0;
}


// Pelin uudelleen aloittaminen.
//

window.onload = function(){
    reStart();
}

function reStart(){
    bigLineTxt.innerHTML = "Ultimate way to solve every problem!";
    choiceTxt.innerHTML = "Start by choosing your move!"
    playerPoints = 0;
    aiPoints = 0;
    pointsTxt.innerHTML = "";
    gameArea.style.display = "initial";
    startBtn.style.display = "none";
    winnerTxt.innerHTML = "Good luck!";
    count = 0;
    aiStatus = 1;
    pStatus = 1;
}



startBtn.addEventListener("click", function(){
    reStart();
});

// Lasketaan nappien klikkaukset.
//

rockChoice.onclick = function() {
  count += 1;
  console.log(count);
};
paperChoice.onclick = function() {
    count += 1;
    console.log(count);
  };
scissorsChoice.onclick = function() {
    count += 1;
    console.log(count);
  };


rockChoice.addEventListener("click", function(){
    playerChoice("ROCK");
    
});
paperChoice.addEventListener("click", function(){
    playerChoice("PAPER");
    
});
scissorsChoice.addEventListener("click", function(){
    playerChoice("SCISSORS");
    
});

function playerChoice(playerChoice){
    var aichoice = AI_Choice();
    choiceTxt.innerHTML = "Player choose" + " " + playerChoice + ". AI choose " + " " + aichoice;
    choiceCompare(playerChoice, aichoice);
}

// AI algorithm.
// algoritmi perustuu tutkittuun pelityyliin.
//

function AI_Choice(){

        if(count === 1){
            var rollNumber = Math.floor(Math.random()*3);    
            console.log("arvonta " + rollNumber);
            if(rollNumber === 0) {
                console.log("AI Debug: " + aiStatus);
                console.log("PL Debug: " + pStatus); 
                choicePic.src = "rock.jpg.jpg"
                return "ROCK";
                              
            }
            else if(rollNumber === 1) {
                console.log("AI Debug: " + aiStatus);
                console.log("PL Debug: " + pStatus);
                choicePic.src = "paper.jpg.jpg"
                return "PAPER";
                            
            }
            else {
                console.log("AI Debug: " + aiStatus);
                console.log("PL Debug: " + pStatus);
                choicePic.src = "scissors.jpg.jpg"
                return "SCISSORS";
                        
            }
        }

        else{
        
            if(playerPoints >= aiPoints && lastUsedP === "ROCK"){
                console.log("AI Debug: " + aiStatus);
                console.log("PL Debug: " + pStatus); 
                choicePic.src = "paper.jpg.jpg"
                return "PAPER";
                
            }
            else if(playerPoints >= aiPoints && lastUsedP === "PAPER"){
                console.log("AI Debug: " + aiStatus);
                console.log("PL Debug: " + pStatus); 
                choicePic.src = "scissors.jpg.jpg"
                return "SCISSORS";
                
            }
            else if(playerPoints >= aiPoints && lastUsedP === "SCISSORS"){
                console.log("AI Debug: " + aiStatus);
                console.log("PL Debug: " + pStatus);
                choicePic.src = "rock.jpg.jpg"
                return "ROCK"; 
            }

        
        
            else if(playerPoints <= aiPoints && lastUsedAi === "ROCK"){
                console.log("AI Debug: " + aiStatus); 
                choicePic.src = "paper.jpg.jpg"
                return "PAPER";
            }
            else if(playerPoints <= aiPoints && lastUsedAi === "PAPER"){
                console.log("AI Debug: " + aiStatus);
                console.log("PL Debug: " + pStatus); 
                choicePic.src = "scissors.jpg.jpg"
                return "SCISSORS";
            }
            else if(playerPoints <= aiPoints && lastUsedAi === "SCISSORS"){
                console.log("AI Debug: " + aiStatus);
                console.log("PL Debug: " + pStatus); 
                choicePic.src = "rock.jpg.jpg"
                return "ROCK";
            }
            else if(lastUsedP === "ROCK" && lastUsedAi === "ROCK"){
                console.log("AI Debug: " + aiStatus);
                console.log("PL Debug: " + pStatus);
                choicePic.src = "paper.jpg.jpg"
                return "PAPER";
            }
            else if(lastUsedP === "PAPER" && lastUsedAi === "PAPER"){
                console.log("AI Debug: " + aiStatus);
                console.log("PL Debug: " + pStatus);
                choicePic.src = "scissors.jpg.jpg"
                return "SCISSORS";
            }
            else if(lastUsedP === "SCISSORS" && lastUsedAi === "SCISSORS"){
                console.log("AI Debug: " + aiStatus);
                console.log("PL Debug: " + pStatus);
                choicePic.src = "rock.jpg.jpg"
                return "ROCK";
            }
        }
    
}


// Vertaillaan kumpi saa pisteitä, pelaaja vai AI.
//

function choiceCompare(pchoice, achoice){
    if(pchoice === "ROCK" && achoice === "ROCK"){
            lastUsedP = "ROCK";
            lastUsedAi = "ROCK";
            winnerTxt.innerHTML = "Even round no points!";
            pStatus = 1;
            aiStatus = 1;
    }
    else if(pchoice === "PAPER" && achoice === "PAPER"){
            lastUsedP = "PAPER";
            lastUsedAi = "PAPER";
            winnerTxt.innerHTML = "Even round no points!";
            pStatus = 1;
            aiStatus = 1;
    }
    else if(pchoice === "SCISSORS" && achoice === "SCISSORS"){
            lastUsedP = "SCISSORS";
            lastUsedAi = "SCISSORS";
            winnerTxt.innerHTML = "Even round no points!";
            pStatus = 1;
            aiStatus = 1;
    }

    
    else if(pchoice === "ROCK"){
        if(achoice === "SCISSORS"){
            lastUsedP = "ROCK";
            lastUsedAi = "SCISSORS";
            winnerTxt.innerHTML = "Player win and get one point!";
            pointResult(1,0);
            pStatus = 2;
            aiStatus = 0;
        }
        else {
            lastUsedP = "ROCK";
            lastUsedAi = "PAPER";
            winnerTxt.innerHTML = "AI win and get one point!";
            pointResult(0,1);
            pStatus = 0;
            aiStatus = 2;
        }
    }
    else if(pchoice === "PAPER"){
        if(achoice === "ROCK"){
            lastUsedP = "PAPER";
            lastUsedAi = "ROCK";
            winnerTxt.innerHTML = "Player win and get one point!";
            pointResult(1,0);
            pStatus = 2;
            aiStatus = 0;
        }
        else {
            lastUsedP = "PAPER";
            lastUsedAi = "SCISSORS";
            winnerTxt.innerHTML = "AI win and get one point!";
            pointResult(0,1);
            pStatus = 0;
            aiStatus = 2;
        }
    }
    else if(pchoice === "SCISSORS"){
        if(achoice === "PAPER"){
            lastUsedP = "SCISSORS";
            lastUsedAi = "PAPER";
            winnerTxt.innerHTML = "Player win and get one point!";
            pointResult(1,0);
            pStatus = 2;
            aiStatus = 0;
        }
        else {
            lastUsedP = "SCISSORS";
            lastUsedAi = "ROCK";
            winnerTxt.innerHTML = "AI win and get one point!";
            pointResult(0,1);
            pStatus = 0;
            aiStatus = 2;
        }
    }
}

// Pisteiden laskeminen ja loppupisteet.
// 

function pointResult(ppoints, apoints){
    playerPoints += ppoints;
    aiPoints += apoints;
    pointsTxt.innerHTML = playerPoints + " player points <br>" + aiPoints + " AI points <br>";
    if(playerPoints > 2 || aiPoints > 2){
        if(playerPoints >= aiPoints){
            scoreBoard("Player win the game!");   
        }
        else{
            scoreBoard("AI win the game!");
        }
    }
}
function scoreBoard(winText){
    bigLineTxt.innerHTML = winText;
    gameArea.style.display = "none";
    choiceTxt.innerHTML = "Total points: <br> Player point's " + playerPoints + " <br> AI point's " + aiPoints;
    startBtn.style.display = "initial" ;
    winnerTxt.innerHTML = "Game over";

}

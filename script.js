//Functional module

let score = 0;
let highestScore = 0;
let waychv = 0; //for achivement 
let lowestchv = 0;
let highestchv = 0;

const decreaseScore = document.getElementById("decreaseScore");
const resetScore = document.getElementById("resetScore");
const increaseScore = document.getElementById("increaseScore");

const myScore = document.getElementById("myScore")

const currentScore = document.getElementById("currentScore");
const recordScore = document.getElementById("HighestScore");
const resetHighest = document.getElementById("resetHighest");

decreaseScore.onclick = function(){
    if(score > -50){
        score--;
        waychv++;
        scoreUpdate(score);
        colorUpdate(score);
        animationTriggerDecrease(score);
        textUpdate(score);
        AchivementTrackerRepeat(score);
    }
}

resetScore.onclick = function(){
    score = 0;
    scoreUpdate(score);
    colorUpdate(score);
    textUpdate(score);
}

increaseScore.onclick = function(){
    score++;
    waychv++;
    scoreUpdate(score);
    colorUpdate(score);
    animationTriggerIncrease(score);
    textUpdate(score);

    AchivementTracker100n1000(score);
    AchivementTrackerRepeat(score);
}

function scoreUpdate(score){
    myScore.textContent = `${score}`;
    currentScore.textContent = `Current Score : ${score}`;

    if(score > highestScore){
        highestScore = score;
        recordScore.textContent = `Highest Score : ${highestScore}`;
    }

    AchivementTrackerBalance(score, highestScore);

}

resetHighest.onclick = function() {
    highestScore = 0;
    recordScore.textContent = `Highest Score : ${highestScore}`;
}

//Visual module

const gameWindow = document.getElementsByClassName("game")[0];
const buttons = document.getElementsByClassName("buttons");
const sideWindow = document.getElementsByClassName("side")[0];

const decorSide = document.getElementsByClassName("decorSide")[0];
const decorMain = document.getElementsByClassName("decorMain");

function colorUpdate(score){
    switch(true){
        case score >= -50 && score <= -40 :
            gameWindow.style.backgroundColor = "#C267D4";

            for(i=0; i< buttons.length; i++) {
                buttons[i].style.backgroundColor = "#C267D4";
            }

            for(i=0; i<decorMain.length; i++){
                decorMain[i].style.backgroundColor = "#C267D4";
                decorMain[i].style.color = "#512d58";
            }

            sideWindow.style.backgroundColor = "#67d496";
            decorSide.style.backgroundColor = "#67d496";
            decorSide.style.color = "#2d5840";

            break;
        case score >= -39 && score <= -25 :
            gameWindow.style.backgroundColor = "#D572D5";

            for(i=0; i< buttons.length; i++) {
                buttons[i].style.backgroundColor = "#D572D5";
            }

            for(i=0; i<decorMain.length; i++){
                decorMain[i].style.backgroundColor = "#D572D5";
                decorMain[i].style.color = "#794379";
            }

            sideWindow.style.backgroundColor = "#72d5ad";
            decorSide.style.backgroundColor = "#72d5ad";
            decorSide.style.color = "#437963";

            break;
        case score >= -24 && score <=9 :
            gameWindow.style.backgroundColor = "#DE77D5";

            for(i=0; i< buttons.length; i++) {
                buttons[i].style.backgroundColor = "#DE77D5";
            }

            for(i=0; i<decorMain.length; i++){
                decorMain[i].style.backgroundColor = "#DE77D5";
                decorMain[i].style.color = "#5f395b";
            }

            sideWindow.style.backgroundColor = "#77debe";
            decorSide.style.backgroundColor = "#77debe";
            decorSide.style.color = "#395f54";

            break;
        case score >= 10 && score <=29 :
            gameWindow.style.backgroundColor = "#e87bc6";

            for(i=0; i< buttons.length; i++) {
                buttons[i].style.backgroundColor = "#e87bc6";
            }

            for(i=0; i<decorMain.length; i++){
                decorMain[i].style.backgroundColor = "#e87bc6";
                decorMain[i].style.color = "#47213b";
            }

            sideWindow.style.backgroundColor = "#7be8de";
            decorSide.style.backgroundColor = "#7be8de";
            decorSide.style.color = "#214744";

            break;
        case score >= 30 && score <= 49 :
            gameWindow.style.backgroundColor = "#ED77A4";

            for(i=0; i< buttons.length; i++) {
                buttons[i].style.backgroundColor = "#ED77A4";
            }

            for(i=0; i<decorMain.length; i++){
                decorMain[i].style.backgroundColor = "#ED77A4";
                decorMain[i].style.color = "#532738";
            }

            sideWindow.style.backgroundColor = "#77d3ed";
            decorSide.style.backgroundColor = "#77d3ed";
            decorSide.style.color = "#274a53";

            break;
        case score >= 50 && score <= 69 :
            gameWindow.style.backgroundColor = "#F07594";

            for(i=0; i< buttons.length; i++) {
                buttons[i].style.backgroundColor = "#F07594";
            }

            for(i=0; i<decorMain.length; i++){
                decorMain[i].style.backgroundColor = "#F07594";
                decorMain[i].style.color = "#53222e";
            }

            sideWindow.style.backgroundColor = "#75c5f0";
            decorSide.style.backgroundColor = "#75c5f0";
            decorSide.style.color = "#224253";

            break;
        case score >= 70 && score <= 89 :
            gameWindow.style.backgroundColor = "#F27F79";

            for(i=0; i< buttons.length; i++) {
                buttons[i].style.backgroundColor = "#F27F79";
            }

            for(i=0; i<decorMain.length; i++){
                decorMain[i].style.backgroundColor = "#F27F79";
                decorMain[i].style.color = "#582320";
            }

            sideWindow.style.backgroundColor = "#79a3f2";
            decorSide.style.backgroundColor = "#79a3f2";
            decorSide.style.color = "#203358";

            break;
        case score >= 90 && score <= 99 :
            gameWindow.style.backgroundColor = "#f2977c";

            for(i=0; i< buttons.length; i++) {
                buttons[i].style.backgroundColor = "#f2977c";
            }

            for(i=0; i<decorMain.length; i++){
                decorMain[i].style.backgroundColor = "#f2977c";
                decorMain[i].style.color = "#4f2316";
            }

            sideWindow.style.backgroundColor = "#7c90f2";
            decorSide.style.backgroundColor = "#7c90f2";
            decorSide.style.color = "#16204f";

            break;
        case score >= 100 :
            gameWindow.style.backgroundColor = "#F2B977";

            for(i=0; i< buttons.length; i++) {
                buttons[i].style.backgroundColor = "#F2B977";
            }

            for(i=0; i<decorMain.length; i++){
                decorMain[i].style.backgroundColor = "#F2B977";
                decorMain[i].style.color = "#563510";
            }

            sideWindow.style.backgroundColor = "#8877f2";
            decorSide.style.backgroundColor = "#8877f2";
            decorSide.style.color = "#191056";

            break;
    }
}

//Animation Control
const AnimationPulse = document.querySelector(".Animation");


function animationTriggerIncrease(score){
    if(score == -39 || score == -24 || score == 10 || score == 30 || score == 50 || score == 70 || score == 90 || score == 100){
        AnimationPulse.classList.add("pulse");

        setTimeout(() => {
            AnimationPulse.classList.remove("pulse");
        }, 1900);
    }
}

function animationTriggerDecrease(score){
    if(score == -40 || score == -25 || score == 9 || score == 29 || score == 49 || score == 69 || score == 89 || score == 99){
        AnimationPulse.classList.add("pulse");

        setTimeout(() => {
            AnimationPulse.classList.remove("pulse");
        }, 1900);
    }
}

//Decorations module

const Hype = document.getElementById("Hype");
const FunFact = document.getElementById("FunFact");

function textUpdate(score){
    switch(true){
        case score >= -50 && score <= -40 :
            Hype.textContent = `And the rock bottom it is!`;
            FunFact.textContent = `Venus is the only planet to spin clockwise.`;
            break;
        case score >= -39 && score <= -25 :
            Hype.textContent = `Nooo, the other way!`;
            FunFact.textContent = `Over sixty percent of the world’s lakes are located in Canada.`;
            break;
        case score >= -24 && score <=0 :
            Hype.textContent = `Let's go, the way is up!`;
            FunFact.textContent = `The average golf ball has 336 dimples.`;
            break;
        case score >=1 && score <=9 :
            Hype.textContent = `Baby steps towards glory~`;
            FunFact.textContent = `A group of owls is called a parliament.`;
            break;
        case score >= 10 && score <=29 :
            Hype.textContent = `Not-so baby steps, but not quite there yet`;
            FunFact.textContent = `Competitive art used to be an Olympic sport.`;
            break;
        case score >= 30 && score <= 49 :
            Hype.textContent = `Warmer! Almost half way there`;
            FunFact.textContent = `Lemons float in water, but limes sink.`;
            break;
        case score >= 50 && score <= 69 :
            Hype.textContent = `Aaand we hit the middle! Keep going~`;
            FunFact.textContent = `It would take 19 minutes to fall to the center of the Earth.`;
            break;
        case score >= 70 && score <= 89 :
            Hype.textContent = `Warmer, warmer, getting closer to the finish line!`;
            FunFact.textContent = `The tiny pocket in jeans was designed to store pocket watches.`;
            break;
        case score >= 90 && score <= 99 :
            Hype.textContent = `The last bit of effort! Just a bit more!!`;
            FunFact.textContent = `“The Terminator” script was sold for $1.`;
            break;
        case score >= 100 :
            Hype.textContent = `And we have a winner!! Want more challenge? Check ou the achivements~`;
            FunFact.textContent = `There were active volcanoes on the moon when dinosaurs were alive.`;
            break;
    }
}

//Achivements 

const achv100 = document.getElementById("achv100");
const achv1000 = document.getElementById("achv1000");
const achvCLICK = document.getElementById("achvCLICK");
const achvREPEAT = document.getElementById("achvREPEAT");
const achvBALANCE = document.getElementById("achvBALANCE");

const GuideDropdown = document.getElementById("GuideDropdown");
const DropdownButton = document.getElementById("DropdownButton");

DropdownButton.onclick = function(){
    GuideDropdown.style.display = "block";
    event.stopPropagation(); // Prevent click from reaching window
}

window.onclick = function() {
    if (GuideDropdown.style.display == "block" && event.target !== DropdownButton) {
        GuideDropdown.style.display = "none";
    }
} 

function AchivementTracker100n1000(score){
    if(score == 100){
        achv100.style.filter = "none";
    }
    if(score == 1000){
        achv1000.style.filter = "none";
    }
}

achvCLICK.onclick = function(){
    achvCLICK.style.filter = "none";
}

function AchivementTrackerBalance(score, highestScore){
    if(score == -50 && highestScore == 50){
        achvBALANCE.style.filter = "none";
    }
}

function AchivementTrackerRepeat(score){
    if(score == -50){
        lowestchv++;
        console.log(`lowest is ${lowestchv}, highest is ${highestchv}, way is ${waychv}`);
    }
    else if(score == 100){
        highestchv++;
        console.log(`lowest is ${lowestchv}, highest is ${highestchv}, way is ${waychv}`);
    }

    if(lowestchv >= 3 && highestchv >= 3 && waychv >= 450){
        achvREPEAT.style.filter = "none";
    }
}
const stageTitle = document.querySelector(".stage-title");
const gameMachine = document.querySelector(".form-machinenumber");
const gameUser = document.querySelector(".form-usernumber");
const numberMaxData = document.querySelector(".form-machinenumber input");
const gameBtnMachine = document.querySelector(".btn-machinenumber");
const gameBtnplay = document.querySelector(".btn-play");
const numberUser = document.querySelector(".usernumber");
const gameDataMachine = document.querySelector(".machinenumber_data");
const gameDataUser = document.querySelector(".usernumber_data");
const gameBtnWin = document.querySelector(".btn-win");
const gameBtnLose = document.querySelector(".btn-lose");
let userNumberList=[];
let numberMax;
let machineNumber;
let userNumber;
let chances;
let clickScore = 1; 

stageTitle.innerHTML = `${localStorage.getItem("username")} leave your destiny to chance.`;

function handleSubmitGame(event){
    event.preventDefault(); 
    numberMax = numberMaxData.valueAsNumber;
    machineNumber = machineChose(numberMax);
    chances = handelChances();
    gameDataMachine.innerHTML = `The machine specified a number. You have ${chances} chances.`;
    gameBtnMachine.classList.add("hidden");
};

function machineChose(max){
    min = 1;
    max = Math.floor(max)+1;
    return Math.floor(Math.random()*(max-min)+min);
};

function handelChances(){
    if(numberMax === 20){
        chances = 3;
    }else if(numberMax === 40){
        chances = 4;
    }else if(numberMax === 60){
        chances = 5;
    }else if(numberMax === 80){
        chances = 6;
    }else if(numberMax === 100){
        chances = 7;
    };
    return chances;
};

function textHidden(){
    gameBtnplay.classList.add("hidden");
    gameDataUser.classList.add("hidden");
}

function textWin(){
    gameBtnWin.innerHTML=`Win! MachineNumber = ${machineNumber}. You have used your ${clickScore}/${chances} chances`;
}

function checkAnswer(){       
    userNumberList.push(userNumber);
    if(clickScore === chances && userNumber !== machineNumber){
        gameBtnLose.innerHTML=`Lose! You have used your ${chances} chances. MachineNumber = ${machineNumber}. Your Numbers = ${userNumberList}`;        
        gameBtnLose.classList.remove("hidden");      
        textHidden();    
    }else if(clickScore === chances && userNumber === machineNumber){
        gameBtnWin.classList.remove("hidden"); 
        textWin();
        textHidden();       
    }else if(userNumber === machineNumber){
        gameBtnWin.classList.remove("hidden");
        textWin();
        textHidden();
    }else{        
        if(userNumber > machineNumber){
            gameDataUser.innerHTML = `Less than ${userNumber} || chances = ${clickScore}/${chances} `;
        }else{
            gameDataUser.innerHTML = `More than ${userNumber} || chances = ${clickScore}/${chances} `;
        }
        clickScore = clickScore+1;
    } 
};

function checkUsernumber(){
    if(userNumber > numberMax){
        alert(`Please put the value between 1 and ${numberMax}`);
        return;
    }else{        
        checkAnswer();       
    }
};

function handelCheckAnswer(event){
    event.preventDefault();
    userNumber = numberUser.valueAsNumber;
    checkUsernumber();
};

gameMachine.addEventListener("submit", handleSubmitGame);
gameUser.addEventListener("submit", handelCheckAnswer);








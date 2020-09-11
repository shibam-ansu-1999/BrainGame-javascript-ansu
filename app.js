let cont = document.querySelector('.container1');
cont.style.display = "None";

let time = document.querySelector('.time');
let start = document.querySelector('.start');
let input = document.querySelector('.user_input');
let answer = 8,score = 0;
let fNum,sNum,operator;
let fNumUi = document.querySelector('.firstNum');
let sNumUi = document.querySelector('.secondNum');
let opUi = document.querySelector('.operator');
let scoreUi = document.querySelector('.score_display');
let responseUi = document.querySelector('.response');
let finalScoreUi = document.querySelector('.finalScore');
finalScoreUi.style.display = "None";

const op = ["+","-","*","/","%"];


start.addEventListener('click',function (){

    cont.style.display = "block";
    document.querySelector('.start').style.display = "None";
    scoreUi.textContent = 0;
    finalScoreUi.style.display = "None";
    responseUi.textContent = "";

    timer();
});

input.addEventListener('keypress',function (e){
    if(e.which === 13){
        if(answer === Number(input.value)){
            score += 3;
            responseUi.innerHTML = "<h1 class='text-success' style='font-size: 70%'>Correct</h1>";
        }
        else{
            score -= 1;
            responseUi.innerHTML = "<h1 class='text-danger' style='font-size: 70%'>Wrong</h1>";
        }
        input.value = "";
        fNum = Math.floor(Math.random() * 30);
        sNum = Math.floor(Math.random() * 30);
        operator = op[Math.floor(Math.random() * op.length)];

        fNumUi.textContent = fNum;
        sNumUi.textContent = sNum;
        opUi.textContent = operator;

        if(operator === "+"){
            answer = fNum + sNum;
        }
        else if(operator === "-"){
            answer = fNum - sNum;
        }
        else if(operator === "*"){
            answer = fNum * sNum;
        }
        else if(operator === "/"){
            answer = fNum / sNum;
        }
        else if(operator === "%"){
            answer = fNum % sNum;
        }

        scoreUi.textContent = score;


    }
})

function timer(){

    let x = setInterval(function (){
        if(time.textContent > 0){
            let newTime = time.textContent - 1;
            time.textContent = newTime;
        }
        else{
            clearInterval(x);
            cont.style.display = "None";
            time.textContent = 60;
            start.style.display = "block";
            finalScoreUi.style.display = "block";
            document.querySelector('.finalSpan').textContent = score;
            score = 0;
        }
    },1000)
}

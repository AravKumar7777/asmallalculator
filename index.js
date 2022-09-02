const num1 = Math.ceil(Math.random()*9);
const num2 = Math.ceil(Math.random()*9);
const questionEl = document.querySelector("#question");
const fomrEl = document.querySelector("#form");
const inputEl = document.querySelector("#input");
const scoreEl = document.querySelector("#score");
let score = JSON.parse(localStorage.getItem("score"));
if(!score){
 score = 0;
}
questionEl.innerText = ` What's the multiply of ${num1} and ${num2} `;
const correctAns = num1*num2;
fomrEl.addEventListener("submit",()=>{
    const userAns = +inputEl.value;
    console.log(userAns , typeof userAns);
    if(userAns === correctAns){
        score++
        updateLocalStorage()
    }else{
        score--
        updateLocalStorage()
    }
} );
scoreEl.innerText = `Score : ${score}`;
function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score));
}
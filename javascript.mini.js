let state=!1;var score;let time=60;let correctValue;var startbtn=document.getElementById("start");let countDown=document.getElementById("timer");let timerValue=document.getElementById("timeValue");let question=document.getElementById("crossDisplay");let crossValue=document.getElementById("crossValue");var scorevalue=document.getElementById("scorevalue");var finalScore=document.getElementById("finalScore");var gameOver=document.getElementById("gameover");var scorevalue=document.getElementById("scorevalue");var correct=document.getElementById("correct");var tryagain=document.getElementById("tryagain");function startBtn(){if(state){location.reload()}else{state=!0;score=0;scorevalue.innerHTML=score;countDown.style.display="block";startbtn.innerHTML="Reset Game";timerValue.innerHTML=time;startCounter();generateQ();for(let j=1;j<=4;j++){document.getElementById("choice"+j).addEventListener("click",checkAnswer)}}}
function checkAnswer(){if(this.innerHTML==correctValue){correct.style.display="block";setTimeout(function(){correct.style.display="none"},1000);score++;scorevalue.innerHTML=score;generateQ()}else{tryagain.style.display="block";setTimeout(function(){tryagain.style.display="none"},1000)}}
function generateQ(){let x=Math.round(9*Math.random()+1);let y=Math.round(9*Math.random()+1);let xy=`${x}x${y}`;crossValue.innerHTML=xy;correctValue=x*y;fillBox(correctValue)}
function fillBox(correctValue){let ans=[correctValue];correctPos=Math.round(3*Math.random()+1);document.getElementById("choice"+correctPos).innerHTML=correctValue;for(let i=1;i<=4;i++){if(i!=correctPos){let wrongAnswer;do{wrongAnswer=Math.round(99*Math.random()+1)}while(ans.indexOf(wrongAnswer)>-1)
document.getElementById("choice"+i).innerHTML=wrongAnswer;ans.push(wrongAnswer)}}}
function startCounter(){timer=setInterval(function(){time-=1;timerValue.innerHTML=time;if(time==0){stopTimer()}},1000)}
function stopTimer(){clearInterval(timer);for(let l=1;l<=4;l++){document.getElementById("choice"+l).removeEventListener("click",checkAnswer)}
finalScore.innerHTML=score;gameOver.style.display="block";scorevalue.innerHTML=score;countDown.style.display="none";startbtn.innerHTML="Start Game"}
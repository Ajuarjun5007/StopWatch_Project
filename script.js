const display = document.getElementById("timerDisplay");
const startBtn = document.getElementById("startBtn");
const lapBtn = document.getElementById("lapBtn");
const resetBtn = document.getElementById("resetBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetLapsBtn=document.getElementById("resetLapsBtn");
let hrDisplay = document.getElementById("hr");
let minDisplay = document.getElementById("min");
let secDisplay = document.getElementById("sec");
let milliSecDisplay = document.getElementById("millisec");
let lapList= document.querySelector(".lapList");
let hr = 0;
let min =0;
let sec =0;
let milliSec =0;
let count=0;
let time;
let intervalId;
let lapCount=0;
startBtn.addEventListener('click',()=>{
    time=true;
    intervalId = setInterval(startWatch,10);
})
lapBtn.addEventListener('click',()=>{
    getTimer();
    console.log(getTimer());
    lapTimer();
})
pauseBtn.addEventListener('click',()=>{
  time=false;
 })
resetBtn.addEventListener('click',()=>{
   resetWatch();
})
resetLapsBtn.addEventListener('click',()=>{
    lapList.innerHTML='';
 })

function startWatch() {
    if (time) {
        milliSec++;
        if(milliSec==100){
            sec++;
            milliSec=0;
        }
        if (sec ==60) {
            min++;
            sec=0;
            milliSec=0;
            if (min==60) {
                hr=1;
                min=0;
                sec=0;
                milliSec=0;
            }
        }
        hrDisplay.innerHTML =(hr<10)?("0"+hr+" :"):(hr+":"); 
        minDisplay.innerHTML =(min<10)?("0"+min):(""+min); 
        secDisplay.innerHTML = (sec<10)?(": 0"+sec):(": "+sec);
        milliSecDisplay.innerHTML=" :"+milliSec;
    }
}
function resetWatch(){
    time=false;
    clearInterval(intervalId);
    milliSec=0;
        sec=0;
        min=0;
         hr=0;
        hrDisplay.innerHTML="00 :";
        minDisplay.innerHTML="00 :";
        secDisplay.innerHTML="00 :";
        milliSecDisplay.innerHTML="00";
}
function getTimer(){
    return (hr<10?"0"+hr+" :":hr+" : ")+(min<10?" 0"+min:" :"+min)+
    (sec<10?" : 0"+sec:" : "+sec)+((milliSec<10 ? " : 0" +milliSec : " : "+milliSec));
}
function lapTimer(){
    if(time){
        lapCount++;
        let lap = document.createElement("div");
        lap.classList.add("lap");
        lap.innerHTML= "LAP "+lapCount +" : "+getTimer();
        lapList.appendChild(lap);
    }
}
const p1Display=document.querySelector("#p1score");
const p2Display=document.querySelector("#p2score");
const winningScoreSelect=document.querySelector("#playerNos");

let winningScore=3;
const p1Button=document.querySelector("#p1");
const p2Button=document.querySelector("#p2");
const resetButton=document.querySelector("#resetButton");
let isgameOver=false;

let p1=0;//js score of the players
let p2=0;
winningScoreSelect.addEventListener('change',function(){
    winningScore=parseInt(this.value);
    resetScore();
})
p1Button.addEventListener('click',function(){
    if(!isgameOver){
        p1++;
        if(p1!=winningScore){
            p1Display.innerText=p1;
        }else{
            p1Display.innerText=p1;
            isgameOver=true;
            p1Display.classList.add('win');
            p2Display.classList.add('loose');
            p1Button.disabled=true;
            p2Button.disabled=true;
        }
    }
})

p2Button.addEventListener('click',function(){
    if(!isgameOver){
        p2++;
        if(p2<winningScore){
            p2Display.textContent=p2;
        }else{
            p2Display.textContent=p2;
            isgameOver=true;
            p2Display.classList.add('win');
            p1Display.classList.add('loose');
            p1Button.disabled=true;
            p2Button.disabled=true;
        }
    }
})

resetButton.addEventListener('click',function(){
    resetScore();
})

function resetScore(){
    console.log("reset succesful");
    isgameOver=false;
    p1=0;
    p2=0;
    p1Display.textContent=p1;
    p2Display.textContent=p2;
    p1Display.classList.remove('win','loose');
    p2Display.classList.remove('win','loose');
    p1Button.disabled=false;
    p2Button.disabled=false;
}   


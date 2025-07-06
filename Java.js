let userScore=0;
let compScore=0;
const choices =document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");
const userScorePara= document.querySelector("#user-score");
const compScorePara= document.querySelector("#computer-score");
const genCompChoice=()=>{
  const options=["rock","paper","sissors"];
 let Ridx= Math.floor(Math.random()*3);
 return options[Ridx];
  };
 const drawGame=()=>{
   console.log("Its A Draw");
   msg.innerHTML="It's A Draw";
   msg.style.backgroundColor="purple";
 };
 
 const showWinner=(userWin)=>{
  if(userWin){
    userScore++;
    userScorePara.innerText=userScore;
   console.log("You Win !");
   msg.innerHTML="You Win !";
   msg.style.backgroundColor="green";
 }else {
  
   compScore++;
   compScorePara.innerText=compScore;
   console.log("You Lose");
   msg.innerHTML="You Lose";
   msg.style.backgroundColor="red";
 }};

let playGame= (userChoice)=>{
  console.log("user Choice = ", userChoice);
  const comChoice= genCompChoice();
  console.log("comChoice = " , comChoice);
 
  if (userChoice===comChoice){
    drawGame();
    
  }else {
    let userWin=true;
    if (userChoice==="rock"){
    userWin=comChoice==="paper" ? false:true;
    
    }
    else if(userChoice==="paper"){
     userWin=comChoice==="sissor"? false:true;
    }
    else if(userChoice==="sissors"){
    userWin=comChoice==="rock"? false:true;
    }
    showWinner(userWin);
  }
};
choices.forEach((choice)=>{
  choice.addEventListener("click",()=>{
   const userChoice= choice.getAttribute("id");
   playGame(userChoice);
  })
  
  
})

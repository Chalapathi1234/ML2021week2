document.getElementById("submitguess").onclick = function(){
  
  var inpt = document.getElementById("guessField").value; 
  if (inpt!="rock" || inpt!="paper" || inpt!="scissor"){
    document.getElementById("output").innerHTML="..Enter rock or paper or scissor!!!";
  }
  var rps=["rock","paper","scissor"]
  var comp = rps[Math.floor(Math.random() * rps.length)];
  game(inpt,comp);

  function game(inp,com){
    if(inp==com){
     document.getElementById("output").innerHTML=("User : " +inp +" \nComputer : "+ com + "\n....Draw!!!\n");
    }
    else if(inp=="rock" && com=="scissor"){
     document.getElementById("output").innerHTML=("User : " +inp +" \nComputer : "+ com + "\n....You Win!!!\n");
    }
    else if(inp=="paper" && com=="rock"){
     document.getElementById("output").innerHTML=(" User  :   " +inp +" \n   Computer  :   "+ com + "\n\n....You Win!!!\n" );
    }
    else if(inp=="scissor" && com=="paper"){
     document.getElementById("output").innerHTML=("User : " +inp +" \nComputer : "+ com + "\n....You Win!!!\n" );
    }
    else if(inp=="rock" && com=="paper"){
     document.getElementById("output").innerHTML=("User : " +inp +" \nComputer : "+ com + "\n....You Lost!!!\n" );
    }     
    else if(inp=="paper" && com=="scissor"){
    document.getElementById("output").innerHTML=("User : " +inp +" \nComputer : "+ com + "\n....You Lost!!!\n" );
    }
    else if(inp=="scissor" && com=="rock"){
     document.getElementById("output").innerHTML=("User : " +inp +" \nComputer : "+ com + "\n....You Lost!!!\n" );
    }
  }

}

//Guess a number
var y = Math.floor(Math.random() * 10 + 1)
var guess = 1; 
document.getElementById("submitguess1").onclick = function()
{      
  var x = document.getElementById("guessField1").value; 
  
  if(x == y) 
  {     
    document.getElementById("output1").innerHTML="CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN "+ guess + " GUESS "; 
  } 
  else if(x > y)  
  {     
    guess++; 
    document.getElementById("output1").innerHTML="OOPS SORRY!! TRY A SMALLER NUMBER"; 
  } 
  else
  { 
    guess++; 
    document.getElementById("output1").innerHTML="OOPS SORRY!! TRY A GREATER   NUMBER"; 
  } 
}
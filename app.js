let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO=true; 
let count=0;
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]
const resetGame = () => {
    turnO = true;
    msgContainer.classList.add("hide");
    for (let box of boxes) {
        box.innerText = "";   // Clear text from each box
        box.disabled = false; // Enable all boxes again
    }
};

const disableBoxes=()=>{
    for (let box of boxes){
        box.disabled=true;     

    }
    
};
const gameDraw=()=>{
    msg.innerText="Game  was a draw.";
    msgContainer.classList.remove("hide");
    disableBoxes();
}

    

const ShowWinner=(winner)=>{
    msg.innerText=`Congratulations,Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
            
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        count++;
        let isWinner=checkWinner();
        if(count===9 && !isWinner){
            gameDraw();
        }
    });
});

const checkWinner=()=>{
    for(let pattern of winPatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if(pos1val != "" && pos2val !="" && pos3val !=""){
            if(pos1val===pos2val && pos2val===pos3val){
                ShowWinner(pos1val);

            }
        }
    }
}
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
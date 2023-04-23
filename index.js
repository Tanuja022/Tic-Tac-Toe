console.log("Welcome");
let turn="X"
let gameover=false;
//function to change the turn
const changeturn=()=>{
    return turn ==="X"?"O":"X"

}

//check the win
const checkwin=()=>{
    
    let boxtext=document.getElementsByClassName('boxtext');
    let win=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
        
    ]
    win.forEach(e =>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[2]].innerText===boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !=="")){
           
             document.querySelector('.info').innerText="Congratulations "+boxtext[e[0]].innerText  +  " won "
            //window.alert("X xon");
            gameover=false;
            if(checkwin()==true){
            gameover==true;
        }
            }
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[2]].innerText===boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !=="")){
            document.querySelector('.info')
        }
        
        })
        
    
}


//game logic

let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
let boxtext=element.querySelector('.boxtext');
element.addEventListener('click',()=>{
    if(boxtext.innerText===''){
        boxtext.innerText=turn;
        turn=changeturn();
        checkwin();
        
        if(!gameover){
           document.getElementsByClassName("info")[0].innerText="Player " +turn;
        }
        
    }
})
})

//Add reset

reset.addEventListener('click',()=>{
    let boxtexts=document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
        element.innerText=" "
    })
    turn="X"
    gameover=false;
    document.getElementsByClassName("info")[0].innerText="Turn for  " +turn;

})

//let Reset=document.getElementById('reset')
reset.addEventListener('click',function(){
    console.log("you have to clicked the reset button...")
})
//console.log(Reset)
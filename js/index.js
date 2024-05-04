let isNightMode = false;

function Switched(){
    const body = document.getElementById("body");
    const string = document.getElementById("string");
    const result = document.getElementById("result");
    const buttons = document.getElementById("buttons");

    if(isNightMode){
        body.style.backgroundColor = "#58646c";
        string.style ="color:white;";
        result.style="color:white;";

        let btns = document.getElementsByTagName("button");
        for(let btn of btns){
            btn.style.color = "white";
        }

        let csymbol = document.getElementsByClassName("c-button");
        for(let i of csymbol){
            i.style.color = "#48c4f4";
        }

        let symbols = document.getElementsByClassName("symbol");
        for(let i of symbols){
            i.style = "color:white;background-color:#48c4f4;border-radius:50px;";
        }
        isNightMode = false;
    }

    else{
        body.style.backgroundColor = "white";
        string.style = "color:black;";
        result.style = "color:black;";

        let btns = document.getElementsByTagName("button");
        for(let btn of btns){
            btn.style.color = "black";
        }

        let csymbol = document.getElementsByClassName("c-button");
        for(let i of csymbol){
            i.style.color = "#48c4f4";
        }

        let symbols = document.getElementsByClassName("symbol");
        for(let i of symbols){
            i.style = "color:#48c4f4;background-color:white;";
        }
        isNightMode = true;
    }
}

let string = document.getElementById("string");
const result = document.getElementById("result");

function calculate(symbol){
    string.innerHTML += symbol;
}

function removeAll(){
    string.innerHTML = "";
    result.innerHTML = "0";
}

function removeFromEnd(){
    string.innerHTML = string.innerHTML.slice(0,-1);
}

function sendDote(){
    if(string.innerHTML.endsWith(".")){
        alert("There is dote at the end can not add !");
    }
    else{
        string.innerHTML += ".";
    }
}

function getResult(){
    result.innerHTML = eval(string.innerHTML);
}
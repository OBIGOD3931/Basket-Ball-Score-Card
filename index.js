let homeScore = 0;
let guestScore = 0;

document.getElementById("num1").textContent = homeScore;

document.getElementById("num2").textContent = guestScore;

function btnHome1(){
    homeScore +=1;
    document.getElementById("num1").textContent = homeScore;
}

function btnHome2(){
    homeScore +=2;
    document.getElementById("num1").textContent = homeScore;
}

function btnHome3(){
    homeScore +=3;
    document.getElementById("num1").textContent = homeScore;
}


function btnGuest1(){
    guestScore +=1;
    document.getElementById("num2").textContent = guestScore;
}

function btnGuest2(){
    guestScore +=2;
    document.getElementById("num2").textContent = guestScore;
}

function btnGuest3(){
    guestScore +=3;
    document.getElementById("num2").textContent = guestScore;
}


function reset(){
    document.getElementById("num1").textContent = 0;
    document.getElementById("num2").textContent = 0;
    homeScore = 0;
    guestScore = 0;
}

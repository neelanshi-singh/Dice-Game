document.querySelector("h1").textContent = "Refresh Me";

const audioPlayer = document.getElementById('playAudio');

document.querySelector('.start-btn').addEventListener('click', function() {
   document.querySelector('h1').textContent = "Rolling...";
   audioPlayer.play();

setTimeout(() => {

    var number1 = Math.floor(Math.random()*6) + 1;
    var img1 = "images/dice" + number1 + ".png";
    document.querySelector(".img1").setAttribute("src" , img1);


    var number2 = Math.floor(Math.random()*6) + 1;
    var img2 = "images/dice" + number2 + ".png";
    document.querySelector('.img2').setAttribute("src" , img2);

    let player1Name = document.querySelector('.player1').value || "player 1";
let player2Name = document.querySelector('.player2').value || "player 2";


    if(number1> number2){
        document.querySelector("h1").innerHTML = player1Name + " Wins!";
    }
    else if (number2 > number1){
        document.querySelector("h1").innerHTML = player2Name + " Wins!";
    }
    else{
        document.querySelector("h1").innerHTML = "Draw";
    }
}, 500);
});




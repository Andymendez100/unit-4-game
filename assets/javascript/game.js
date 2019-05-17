$(document ).ready(function() {
var char = {
    gre:
    {
        image: "green",
        value: 0
    },
    red:
    {
        image: "red",
        value: 0
    },
    sil:
    {
        image: "silver",
        value: 0
    },
    yel:
    {
        image: "yellow",
        value: 0
    },
};

var targetNum = 0;
var counter = 0;

var wins = 0;
var losses = 0;

function start() {
    counter = 0;

    targetNum = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    $(".randomNumberBox").html(targetNum);
  

    char.gre.value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    char.red.value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    char.sil.value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    char.yel.value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;


};


function adding(char) {
    counter = counter + char.value;
    $(".totalScoreBox").html( counter);
    check();
}

function check() {
    if (counter > targetNum) {
        alert("SORRY, YOU LOST!");

        console.log("YOU LOST");
        losses++;
        $("#loss").html(losses);
        start();

    }
    else if (counter == targetNum) {
        alert("CONGRATS, YOU WON!");
        console.log("YOU WIN!");
        wins++;
        $("#wins").html(wins);
        start();
    }
}

start()

$("#green").on("click", function () {
    adding(char.gre);
});

$("#red").on("click", function () {
    adding(char.red);
});
$("#silver").on("click", function () {
    adding(char.sil);
});
$("#yellow").on("click", function () {
    adding(char.yel);
});


});

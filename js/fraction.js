"use strict"


var no = document.getElementById("e_text")
var btn_op = document.getElementById("btn")




var output = document.getElementById("op")












function multipliction() {

    var fact = 1;
    for (var i = no.value; i >= 1; i--) {
        fact *= i;
    }
    output.innerHTML = (`<b>The factorial of ${no.value} is ${fact}</b>.`);




}



btn_op.addEventListener("click", multipliction)
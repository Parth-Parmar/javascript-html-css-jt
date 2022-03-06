"use strict"


var no = document.getElementById("e_text")
var btn_op = document.getElementById("btn")
var output = document.getElementById("op")

var tabel = document.getElementById("tabel")

function multipliction() {

    for (var i = 1; i <= no.value; i++) {

        var multi = " "

        for (var j = 1; j <= 10; j++) {

            multi += `<p>${i} * ${j} = ${i * j}</p>`



        }
        tabel.innerHTML += `<div class="col-3"><p>${multi}</p></div>`
    }



}



btn_op.addEventListener("click", multipliction)
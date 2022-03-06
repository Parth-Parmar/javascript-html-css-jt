"use strict"

var a = document.getElementById("increment_btn")
var t_text = document.getElementById("text")
console.log(a)
var plus = 0
var glo = 1

function Incremnent() {
    t_text.value = plus += 1
}

function abc() {

    var intt = setInterval(() => {
        Incremnent()
        if (glo == 100) {
            plus = 0
            glo = 0
            clearInterval(intt)
        }

        glo++
    });



}

a.addEventListener("click", abc)
"use strict"
var e_text = document.getElementById("e_text")
var btn = document.getElementById("btn")

var op = document.getElementById("op")

console.log(e_text, btn, op)


function prime_no() {





    for (var i = 1; i <= e_text.value; i++) {

        var prime = "";
        for (var j = 2; j < i; j++) {


            if (i % j !== 0) {
                prime = i
            }

        else {

                prime = ""
                break;
            }
            
        }

        if (prime != "") {
            console.log(prime)
        }

    }
}
btn.addEventListener("click", prime_no)














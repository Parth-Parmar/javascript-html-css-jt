"use strict"


var T_box = document.getElementById("text")
var I_b = document.getElementById("increment_btn")
var D_b = document.getElementById("decrement_btn")
var R_b = document.getElementById("reset_btn")


// console.log(T_box,I_b,D_b,R_b)

var count = 0
function Incremnent() {

    T_box.value = count += 1;

}

I_b.addEventListener("click", Incremnent)


function Decrement() {
if (T_box.value > 0  ) {
        T_box.value = count -= 1;
        }else{

            T_box.value=0
        }
}
D_b.addEventListener("click", Decrement)
function Reset() {
    
    T_box.value = 0

}

R_b.addEventListener("click", Reset)
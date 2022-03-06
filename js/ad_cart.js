"use strict"

var plus = document.getElementsByClassName("cart-qty-plus")
var quntity = document.getElementsByClassName("qty")
var minus = document.getElementsByClassName("cart-qty-minus")
var amount = document.getElementById("amount")
var total = document.getElementsByClassName("total")


//console.log(plus, quntity, minus, price, amount, total)





function Incremnent(e) {

    var quntity_referance = e.target.dataset.referance
    var quntity_display = document.getElementById(quntity_referance)
    var amount_referance = e.target.dataset.amount
    var amount_display = document.getElementById(amount_referance)

    var q_value = quntity_display.value
    q_value++

    quntity_display.value = parseInt(q_value)
    amount_display.innerHTML = q_value * 20;





    //console.log(quntity_referance)
}

for (var i = 0; i < plus.length; i++) {

    var arra_plus = plus[i]
    arra_plus.addEventListener("click", Incremnent)
}



function Decrement(e) {

    var quntity_referance = e.target.dataset.referance
    var quntity_display = document.getElementById(quntity_referance)
    var amount_referance = e.target.dataset.amount
    var amount_display = document.getElementById(amount_referance)

    if (quntity_display.value > 0) {

        var q_value = quntity_display.value
        q_value--
        amount_display.innerHTML = q_value * 20;
        quntity_display.value = q_value

    } else {

        quntity_display.value = 0
    }


    console.log(quntity_referance)


}


for (var i = 0; i < minus.length; i++) {

    var arra_minus = minus[i]
    arra_minus.addEventListener("click", Decrement)
}














// var count = 0

// function Incremnent(e) {
//     quntity.innerHTML = count += 1;
//     total_q.innerHTML = parseInt(total_q.innerHTML) + 20;
// }
// plus.addEventListener("click", Incremnent)


// function Decrement() {



//     if (quntity.innerHTML > 0) {
//         total_q.innerHTML = parseInt(total_q.innerHTML) - 20;
//         quntity.innerHTML = count -= 1;

//     } else {
//         quntity.innerHTML = 0
//     }
// }
// minus.addEventListener("click", Decrement)

//console.log(plus, quntity, minus, total_q, items, total, checkout)
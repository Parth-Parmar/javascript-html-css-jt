"use strict"

let product_name = document.getElementById("product_name")
let product_price = document.getElementById("product_price")
let add_product = document.getElementById("add_product")
let total = 0
    //console.log(total)

// console.log(add_product.getAttribute('type'))

//console.log(product_name, product_price, add_product)

let product_data_d = []

function product_add(e) {
    e.preventDefault();

    let product_name_add = product_name.value
    let price_add = product_price.value
    let myinfo = {
        id: +new Date,
        name: product_name_add,
        price: price_add,

    }

    if (product_name_add == "" || price_add == "") {

        alert("plz enter a value")
    } else {

        product_data_d.push(myinfo)
        product_name.value = ''
        product_price.value = ''
    }


    fetch_product()
    let plus = document.getElementsByClassName("cart-qty-plus")
    let minus = document.getElementsByClassName("cart-qty-minus")
        // let amount = document.getElementById("amount")

    for (let i = 0; i < plus.length; i++) {

        let arra_plus = plus[i]
        arra_plus.addEventListener("click", Incremnent)

    }


    for (var i = 0; i < minus.length; i++) {

        var arra_minus = minus[i]
        arra_minus.addEventListener("click", Decrement)
    }


}
add_product.addEventListener("click", product_add)




let dis_table = document.getElementById("display_table")
    //console.log(dis_table)
function fetch_product() {
    dis_table.innerHTML = ""
    total = 0
    document.getElementById('total1').innerText = 0;
    product_data_d.forEach(function(product_data) {
        dis_table.innerHTML += `<tr id=${product_data.id}>
        <td>${product_data.name}</td>
        <td id="pro_id-${product_data.id}">${product_data.price}</td>
        <td random="qq">  <div class="button-container">
        <button class="cart-qty-plus" data-unique="pro_id-${product_data.id}" data-total="total1" data-productprice="${product_data.price}" data-referance="qq-${product_data.id}" data-amount="amount-${product_data.id}" type="button" value="+">+</button>
        <input type="text" disabled name="qty" min="0" id="qq-${product_data.id}" class="qty" value="0" />
        <button class="cart-qty-minus" data-productprice="${product_data.price}" data-total="total1" data-referance="qq-${product_data.id}" data-amount="amount-${product_data.id}" type="button" value="-">-</button>
    </div></td>
    <td>₹ <span id="amount-${product_data.id}" class="amount">0</span>
        </tr>`
    })
}
// fetch_product()

//product_arr.push(product_data_d)

//console.log(product_arr)






function Incremnent(e) {
    // console.log(e.target.attributes[1].value)
    // console.log(document.querySelector(e))
    // let uniqe = e.target.dataset.unique
    // console.log(parseInt(document.getElementById(uniqe).innerText.trim()))


    let quntity_referance = e.target.dataset.referance
    let qty = document.getElementById(quntity_referance)
    let amount_referance = e.target.dataset.amount
    let amount_display = document.getElementById(amount_referance)



    let q_value = qty.value
    q_value++

    qty.value = parseInt(q_value)
        //console.log(e.target.dataset.productprice)
    amount_display.innerHTML = q_value * e.target.dataset.productprice;

    // total += parseInt(e.target.dataset.productprice)
    // document.getElementById('total1').innerText = total;


    total_cost(e, parseInt(e.target.dataset.productprice), "add")





    //console.log(amount_referance)

}

function Decrement(e) {
    let quntity_referance = e.target.dataset.referance
    let qty = document.getElementById(quntity_referance)
    let amount_referance = e.target.dataset.amount
    let amount_display = document.getElementById(amount_referance)




    if (qty.value > 0) {
        let q_value = qty.value
        q_value--
        qty.value = parseInt(q_value)

        console.log(e.target.dataset.productprice)
        amount_display.innerHTML = q_value * e.target.dataset.productprice;


        total_cost(e, parseInt(e.target.dataset.productprice), "remove")
    } else {
        qty.value = 0
    }

}



function total_cost(e, price, addRemove) {
    let total_qq_r = e.target.dataset.total
    let total_qq = document.getElementById(total_qq_r)
    switch (addRemove) {
        case "add":
            total += price
            break;
        case "remove":
            total -= price
            break;
        default:
            break
    }

    // if (addRemove == "add") {
    //     total += price
    // } else if (addRemove == "remove") {
    //     total -= price
    // } else {}

    total_qq.innerText = total
}
// total_cost()

//var GrandTotal = parseFloat(cart[i].product.product_price) * parseInt(cart[i].product_qty);
//document.getElementById('demo3').innerHTML = GrandTotal;
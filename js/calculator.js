var first_text = document.getElementById("txt1")
var second_text = document.getElementById("txt2")
var result = document.getElementById("op")


var plus_btn = document.getElementById("plus")
var minus_btn = document.getElementById("minus")
var subtrct_btn = document.getElementById("subtract")
var modulo_btn = document.getElementById("modulo")


var clear_btn = document.getElementById("clear_all")



function clear(){

    first_text.value = ""
    second_text.value =""
    result.value = ""

   
}

clear_btn.addEventListener("click",clear)



function plus() {

    // var f = first_text.value
    // var s = second_text.value
    // var r = result.value

    result.value = parseInt(first_text.value) + parseInt(second_text.value)
}


plus_btn.addEventListener("click", plus)


function minus() {

    result.value = parseInt(first_text.value) - parseInt(second_text.value)
}

minus_btn.addEventListener("click", minus)


function subtract() {

    result.value = parseInt(first_text.value) / parseInt(second_text.value)
}


subtrct_btn.addEventListener("click", subtract)



function modulo() {

    result.value = parseInt(first_text.value) % parseInt(second_text.value)
}

modulo_btn.addEventListener("click", modulo)
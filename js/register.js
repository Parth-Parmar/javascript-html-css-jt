"use strict"


var f = document.getElementById("f_name")
var l = document.getElementById("l_name")
var d = document.getElementById("date")
var sta = document.getElementById("inputState")
var gen = document.getElementsByName("gender")
var txt_a = document.getElementById("text_area")
var s_btn = document.getElementById("save_btn")
var counter = 0


var tbody = document.getElementById("t_body")

function gender_fetch() {
    for (var i = 0; i < gen.length; i++) {
        console.log()

        if (gen[i].checked) {

            return gen[i].value

        }
    }
}



function save_btnn(event) {
    event.preventDefault()

    var fname = f.value
    var lname = l.value
    var datee = d.value
    var statt = sta.value
    var txtt = txt_a.value






    var qq = gender_fetch()


    
    tbody/*innerHTML*/ += `<tr>

    <td>${counter = counter + 1}</td>
    <td>${fname}</td>
    <td>${lname}</td>
    <td>${datee}</td>
    <td>${statt}</td>
    <td>${qq}</td>
    <td>${txtt}</td>
    </tr>`
}

s_btn.addEventListener("click", save_btnn)



//console.log(f,l,d,sta,gen,txt_a,s_btn,tbody)



var first_arr = [[1, 2, 3], [1, 2, 4]]


var sum = 0


for (var i = 0; i < first_arr.length; i++) {

    for (var j = 0; j < first_arr[i].length; j++) {

      sum  +=  first_arr[i][j]; // sum = sum + first_arr[i][j]

    }

}
console.log(sum)

// 6 + 7 = 13
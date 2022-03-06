"use strict"


var first_name = document.getElementById("text")
var number = document.getElementById("number")
var phone = document.getElementById("tel")
var btn = document.getElementById("btn")
var op = document.getElementById("op")
var a = []

// var f = first_name.value // ''
// var n = number.value
// var p = phone.value



function hello() {




    var f = first_name.value
    var n = number.value
    var p = phone.value







    if (f != "" && n != "" && p != "") {

        first_name.value = ""
        number.value = ""
        op.innerHTML = ""


        if (p.length == 10) {
            console.log(f, n, p)

            phone.value = output


            var info = {

                f_name: f,
                n_name: n,
                p_name: p,
            }





            a.push(info)
            console.log(a)



            for (var i = 0; i < a.length; i++) {
                console.log(a[i].f_name)


                // op.innerHTML  +=  a[i].
                var {
                    f_name, n_name, p_name
                } = a[i]
                op.innerHTML = op.innerHTML + f_name + n_name + p_name + "<br>"


            }




        } else {

            console.log("enter a valid number")


        }


    }

    else {
        console.log("plz enter a value")
    }


}


btn.addEventListener("click", hello)
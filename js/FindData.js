"use strict"
let info = document.getElementById("Company_info")
let input_t = document.getElementById("input")
let submit_btn = document.getElementById("submit")
let arr = []

function show_info() {
    for (var i = 0; i < ShivTechno.length; i++) {
        let Abc = Object.values(ShivTechno[i])
        for (let index = 0; index < Abc.length; index++) {
            if (Array.isArray(Abc[index])) {
                for (let k = 0; k < Abc[index].length; k++) {
                    if (input_t.value == Abc[index][k]) {
                        arr.push(ShivTechno[i])
                        break;
                    } else {
                        console.log("not found")
                    }
                }
            } else {
                if (input_t.value == Abc[index]) {
                    arr.push(ShivTechno[i])
                    break;
                } else {
                    console.log("not found")
                }

            }
        }
    }
    console.log(arr)
    // var show

    // if ("all" == info.value) {
    //     show = Object.values(ShivTechno[input_t.value])
    // } else {
    //     show = ShivTechno[input_t.value][info.value]
    // }
    // console.log(show)



}
submit_btn.addEventListener("click", show_info)

let ShivTechno = [
    {
        employeename: "parth parmar",
        phone_no: [9998344756, 792820531],
        position: "web developer",
        salary: "20,000",
        gender: "male",
    },
    {
        employeename: "priya rai",
        phone_no: [9998344733, 892820531],
        position: "web designer",
        salary: "15,0000",
        gender: "female",
    },
    {
        employeename: "Raj bhanusali",
        phone_no: [9398344733, 892822531],
        position: "sr.web developer",
        salary: "40000",
        gender: "male",

    },
    {
        employeename: "khusali nai",
        phone_no: [7398444733, 592822521],
        position: "seo",
        salary: "12000",
        gender: "female",

    },
]


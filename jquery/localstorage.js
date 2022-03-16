"use strict"

var tte = []

let user = [{
        first_name: "saad",
        lastname: "mansuri",
        age: 25,
    },
    {
        first_name: "Parth",
        lastname: "Prmanr",
        age: 25,
    },

]


localStorage.setItem("user", JSON.stringify(user))

let userinfo = localStorage.getItem("user")

let userinfoParse = JSON.parse(userinfo)

// console.log(typeof userinfo, typeof userinfoParse)
console.log(userinfo)
    //console.log(userinfoParse[0].lastname)
    //console.log(userinfoParse.lastname)



// localStorage.setItem("firstname", "parth")
// localStorage.setItem("lastname", "parmar")
//console.log(localStorage.removeItem("firstname"))
// localStorage.clear()
// let firstn = localStorage.getItem("firstname")
// console.log(firstn)
console.log(localStorage)
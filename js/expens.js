"use strict"


var rs = document.getElementById("rs")
var people = document.getElementById("people")
var result = document.getElementById("op")
var equal_btn = document.getElementById("okay")
var count = 0;

function expnsecal(e) {

    e.preventDefault()

    result.value = parseInt(rs.value) / parseInt(people.value)
}
equal_btn.addEventListener("click", expnsecal)
var letMycharacter = []
var checkbox = document.getElementsByName('charcter')
function join(array = [], operator = " , ") {
    let total_length = array.length
    let returnStr = ""
    let opr = operator
    array.forEach((v, i) => {
        if (total_length - 1 === i) {
            opr = ''
        } else {
            opr = opr
        }
        returnStr += `${v}${opr}`
    })
    return returnStr
}

function checkboxValue(event) { // event humara ha dictinary object
    let ref = event.target.dataset.target
    ref = document.getElementById(ref)
    if (this.checked) {
        ref.className = "toogle"
        letMycharacter.push(this.value)
    } else {
        ref.className = "toogle-remove"
        let index = letMycharacter.indexOf(this.value)
        letMycharacter.splice(index, 1)
    }

    let arrayToString = join(letMycharacter)
    // let arrayToString = letMycharacter.join(",")
    let stringToAray = arrayToString.split(",")
    // console.log(
    //     event.target.value,
    //     this.value,
    //     document.getElementById(event.target.id).value
    // )
}
checkbox.forEach((v, i) => {
    v.addEventListener('change', checkboxValue)
})

const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
]
const fulldate = new Date() // Date Obj
const date = fulldate.getDate()
const month = months[fulldate.getMonth()]
const year = fulldate.getFullYear()
console.log(`${date > 9 ? date : '0' + date} ${month} ${year}`)


const file = document.getElementById('file')
var muFilePath = [];
var multipleImage = document.getElementById('multipleImage')

file.addEventListener('change', function () {
    var fileList = Object.values(this.files)
    for (let index = 0; index < fileList.length; index++) {
        var reader = new FileReader();
        reader.readAsDataURL(fileList[index])
        muFilePath.push(reader.result)
        reader.onload = function (e) {
            multipleImage.innerHTML += `<img src="${e.currentTarget.result}" height="100" width="100" />`
        }
    }
})


    (async function () {
        const response = await fetch("https://gorest.co.in/public/v1/users")
        const data = await response.json()
        console.log(data)
    })()
"use strict"

var a = document.getElementById("e_text")
var b = document.getElementById("btn")
var table_op = document.getElementById("tableCalender")


var months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]
var days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
    //console.log(a, b)



function enter_year() {
    for (var year = 2022; year <= 2022; year++) {
        for (var month = 1; month <= 12; month++) {
            var last_date = new Date(year, month, 0)
            var last_date_value = last_date.getDate()
            var div = `<div class="col-md-3 pt-5">`
            var heading = `<h3 align="center">${months[month - 1]}</h3>`
            var table = `<table width="100%" border="1" cellpadding="8" cellspacing="0">`
            var tableRow = "<tr><th>Date</th><th>Day</th></tr>";
            var td = ""
            for (var date = 1; date <= last_date_value; date++) {
                tableRow += `<tr>`
                var day_obj = new Date(`${year}-${month}-${date}`)
                var day_obj_value = day_obj.getDay()
                console.log(year, months[month - 1], date, days[day_obj_value])
                td = `<td>${date}</td><td><b>${days[day_obj_value]}</b></td>`
                tableRow += td
                tableRow += "</tr>"
            }
            table += tableRow
            table += "</table>"
            div += heading
            div += table
            table_op.innerHTML += div + `</div>`
        }
    }
}

b.addEventListener("click", enter_year)
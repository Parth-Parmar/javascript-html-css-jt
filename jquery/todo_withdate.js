"use strict"



$("#submit").click(function() {

    let startDateValue = $("#f_id").val()
    let endDateValue = $("#s_id").val()


    let StatedateObject = new Date(startDateValue)
    let EndDateObject = new Date(endDateValue)

    let StatedateObjectVal = StatedateObject.getDate()
    let EnddateObjectVal = EndDateObject.getDate()


    for (let i = StatedateObjectVal; i <= EnddateObjectVal; i++) {









    }

})




// let edit_t = $("#edit")
// let delete_t = $("#delete")



let add_coun = []
let update_i = ""
let enter_task
let counter = 0

let add_btn = $("#add").click(function() {

    enter_task = $("#text").val();

    if (enter_task == "") {
        alert("plz add task")
    } else {
        let currentDate = new Date();

        let addno = ""
        if (currentDate.getMonth() < 10) {
            addno = 0
        }

        currentDate = `${currentDate.getDate()}-${addno}${currentDate.getMonth()}-${currentDate.getFullYear()}`


        console.log(update_i)
        if (update_i !== "") {
            add_coun[update_i].message = enter_task
            update_i = ""
        } else {
            add_coun.push({
                message: enter_task,
                date: currentDate
            })
        }


        console.log(add_coun)
        $("#text").val("")
    }

    list_todoitem();

})





function list_todoitem() {




    $("tbody#table").html("")
    for (var i = 0; i < add_coun.length; i++) {
        //let uniqe = +new Date()

        console.log(add_coun[i])

        $("tbody#table").append(`<tr><td> ${add_coun[i].message}</td>  <td><button class = "btn btn-success" onClick="Edit_task(${i})">Edit</button></td><td><button class = "btn btn-danger" onClick="Delete_task(${i})">Delete</button></td></tr>`);


        //     <tr>
        //         <td>${i + 1} ${add_coun[i]}</td>
        //         <td><button class = "btn btn-danger" onClick="del(${i})">Delete</button></td>
        //         <td><button class = "btn btn-success" onClick="Edit_task(${i})">Edit</button></td>

        //     table_op.innerHTML += ` 
        //     </tr>
        // `
    }

}







// let del_btn = $("#delete").click(function(id) {
//     add_coun.splice(id, 1)
//     list_todoitem()
//     enter_text.value = ''

// })



function Delete_task(id) {
    // $("#" + uniqe).remove()
    add_coun.splice(id, 1)
    list_todoitem()




}

function Edit_task(id) {
    console.log(id)

    $("#text").val(add_coun[id].message)
    update_i = id



}
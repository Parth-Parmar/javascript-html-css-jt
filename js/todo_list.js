"use strict"

var enter_text = document.getElementById("text")
var add_text = document.getElementById("add")
var delete_t = document.getElementById("delete")
var edit_t = document.getElementById("edit")
var table_op = document.getElementById("table")
var counter = 0
var add_task
var update_i = -1
var add_coun = []
    //console.log(e_t,a_t,d_t,t)
add_text.addEventListener("click", add_item)


function add_item() {
    add_task = enter_text.value
        // add_coun.push(add_task)
    if (update_i < 0) {
        if (enter_text.value == "") {

            alert("plz enter a value")
        } else {

            add_coun.push(add_task)
        }
    } else {
        add_coun[update_i] = add_task
        update_i = -1
    }
    list_todoitem();
    console.log(add_coun)
        //  t.innerHTML += `<div class="col-3"><p>${add_task}</p></div>`


    //     table_op.innerHTML += ` 
    //       <tr>
    //                 <td>${counter = counter + 1} ${add_task}</td>
    //       </tr>
    //  `
    enter_text.value = ''
}

delete_t.addEventListener("click", del)

function del(id) {

    add_coun.splice(id, 1)
    list_todoitem()
    enter_text.value = ''
}


function list_todoitem() {
    table_op.innerHTML = ""
    for (var i = 0; i < add_coun.length; i++) {
        table_op.innerHTML += ` 
        <tr>
            <td>${i + 1} ${add_coun[i]}</td>
            <td><button class = "btn btn-danger" onClick="del(${i})">Delete</button></td>
            <td><button class = "btn btn-success" onClick="Edit_task(${i})">Edit</button></td>
        </tr>
    `
    }

}

function Edit_task(id) {
    // add_coun.splice(id,1)
    // list_todoitem()
    enter_text.value = add_coun[id]
    update_i = id
        //console.log(enter_text.value, id)

}
edit_t.addEventListener("click", Edit_task)
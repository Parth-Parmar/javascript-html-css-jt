"use strict"

setDataUser()

// var confirm_ = confirm("Sure to Delete")
// console.log(confirm_)

function postData(data_register) {

    let data = JSON.stringify(data_register)


    var settings = {
        "url": "https://gorest.co.in/public/v2/users",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "Authorization": "Bearer f2985bc2098c61c353c166d8fc604104ab659780ce625488a99415356074fdc9"
        },
        data: data,
        beforeSend: function() {
            $("#submit").prop('disabled', true)
            $("#submit").html(`<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            Loading...`)
        },
        success: function(response) {
            $("#submit").prop('disabled', false)
            $("#submit").html("Submit")
            let responsevar = response


            console.log(responsevar)
            setDataUser()

        },
        error: function(err) {
            $("#submit").html("Submit")
            let error_response = err.responseJSON

            console.log(error_response[0].message)
            alert("message is alrerdy  taken")
            throw err
        }
    };

    $.ajax(settings)

}


$("#submit").click(function(e) {
    e.preventDefault();

    let fname_value = $("#f_name").val()
    let ename_value = $("#e_name").val()
    let gender_value = $("input[name='gender']:checked").val()
    let status_name_value = $("#status").val()

    let data_register = {

        "name": fname_value,
        "email": ename_value,
        "gender": gender_value,
        "status": status_name_value,
    }


    postData(data_register)
    $("form").trigger("reset");


})


function setDataUser() {
    $("tbody.table_body").html("")


    try {

        $.ajax({

            url: "https://gorest.co.in/public/v2/users",
            type: "get",
            dataType: "json",
            "headers": {
                "Content-Type": "application/json",
                "Authorization": "Bearer f2985bc2098c61c353c166d8fc604104ab659780ce625488a99415356074fdc9"
            },
            success: function(response) {
                let data = response
                $.each(data, function(key, value) {

                    $("tbody.table_body").append(`<tr>
                                                    <td>${value.id}</td>
                                                    <td>${value.name}</td>
                                                    <td>${value.email}</td>
                                                    <td>${value.gender}</td>
                                                    <td>${value.status}</td>
                                                    <td>
                                                    <button class="btn btn-success">edit</button></td>
                                                  
                                                </tr>`)
                })

            },

            error: function(err) {

                throw err
            }
        })

    } catch (e) {
        console.log(e)
    }
}
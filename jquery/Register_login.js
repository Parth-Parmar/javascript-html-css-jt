"use strict"

let Data_user = []

$("#submit").click(function(e) {
    e.preventDefault()

    let fname_value = $("#f_name").val()
    let lname_value = $("#l_name").val()
    let tname_value = $("#t_name").val()
    let gender_value = $("input[name='gender']:checked").val()
    let email_val = $("#e_name").val()
    let pass_val = $("#p_name").val()

    //   console.log(fname_value, lname_value, tname_value, gender_value, email_val,)
    let user_info = {
        first_Name: fname_value,
        last_Name: lname_value,
        telephone: tname_value,
        gender: gender_value,
        email: email_val,
        pass: pass_val
    }


    if (fname_value == "" || lname_value == "" || tname_value == "" || gender_value == "" || email_val == "" || pass_val == "") {

        alert("plz fill the form proper")
    } else {

        Data_user.push(user_info)
        alert("Record Inserted")
        $("form").trigger("reset");

    }

    localStorage.setItem("Data_user", JSON.stringify(Data_user))

})

$(".login").click(function(e) {

    e.preventDefault()

    let user_main_info = localStorage.getItem("Data_user")
    let userinfoParse = JSON.parse(user_main_info)
        //console.log(userinfoParse)
    let fname_value_ul = $("#u_id").val()
    let pass_val_pl = $("#pl_id").val()

    for (let k in userinfoParse) {
        //console.log(userinfoParse[k].First_Name);
        let saved_data_user = userinfoParse[k].first_Name
        let saved_data_password = userinfoParse[k].pass
            //  console.log(saved_data_password, saved_data_user)
        if (fname_value_ul == saved_data_user && pass_val_pl == saved_data_password) {
            window.open("http://www.w3schools.com", '_blank')
        } else {
            alert("plz cheack the user name and Password")
        }
    }
})
"use strict"

$(".btn").click(function(e) {
    e.preventDefault();
    let f_val = $("#name").val()
    if (f_val == "") {
        $("#name_error").text("plz enter the name").css({ "color": "red" })
    } else {
        $("#name_error").text("")
    }
    let p_val = $("#phone").val()
    if (p_val == "" || p_val.length < 10) {
        $("#phone_error").text("plz enter the  Phone Number").css({ "color": "red" })
    } else {

        $("#phone_error").text("")
    }
    let email_val = $("#email").val()

    if (email_val == "" || email_val.indexOf("@") == -1 || email_val.indexOf(".") == -1 || email_val.indexOf("com") == -1) {
        $("#email").css({ "border": "1px solid red" });
        $("#email_error").text(" plz Enter a valid email !").css({ "color": "red" });

    } else {


        $("#email_error").text("");
        $("#email").css({ "border": "none" });

    }

    if ($("input[name=Gender]").is(":checked")) {
        let gender_value = $("input[name=Gender]:checked").val()
        $("#Gender_error").text("")
        console.log(gender_value)


    } else {
        $("#Gender_error").text("plz select Gender").css({ "color": "red" })
    }





    var ckb_status = $("#check_box").prop('checked');
    if (ckb_status) {

        $("#check_error").text("OK")
    } else {


        $("#check_error").text("plz check the details")

    }

})
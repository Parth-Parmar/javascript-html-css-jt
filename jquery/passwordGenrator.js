"use strict"

let text = false,
    number = false,
    special = false


let password_gen = []


$(".checked_value").change(function() {
    let ischecked = $(this).is(":checked")

    console.log(ischecked)

    let type = $(this).attr("name")
    if (type == "text" && ischecked == true) {

        text = true;
    }
    if (type == "number" && ischecked == true) {

        number = true;

    }
    if (type == "special" && ischecked == true) {
        special = true;
    }

    // console.log($(this).attr("name"))
})


$("#genrate_n").click(function(e) {
    e.preventDefault()

    $("#text_op").val("")
    let lenth_value = $("#length").val()



    if (text == false && number == false && special == false) {

        alert("plz check the checked box")
        return
    }


    console.log(text, number, special)
    if (text == true) {
        let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];



        for (let i = 1; i <= lenth_value; i++) {
            let alpha = Math.floor(Math.random() * alphabet.length)

            let random_alpha = alphabet[alpha]
            console.log(random_alpha)
            password_gen.push(random_alpha)
                // $("#text_op").val($("#text_op").val() + random_alpha
        }
    }
    if (number == true) {


        for (let i = 1; i <= lenth_value; i++) {
            let num_random = Math.floor(Math.random() * 10)
            password_gen.push(num_random)
        }
    }

    if (special == true) {
        let specials_character = ["+", "-", "&&", "||", "!", "(", ")", "{", "}", "[", "]", "^",
            "~", "*", "?", ":"
        ]

        for (let i = 1; i <= lenth_value; i++) {
            let character_spe = Math.floor(Math.random() * specials_character.length)

            let random_character_s = specials_character[character_spe]

            password_gen.push(random_character_s)

        }
    }


    $("#text_op").val(password_gen.join(""))


    let final_array = []

    console.log(password_gen)
    for (let i = 1; i <= lenth_value; i++) {


        let all_password_generate = Math.floor(Math.random() * password_gen.length)

        final_array.push(password_gen[all_password_generate])
    }


    $("#text_op").val(final_array.join(""))



})




$("#copy_n").click(function(e) {
    e.preventDefault()


    // $("#text_op").val()



    //document.execCommand("copy");
    navigator.clipboard.writeText($("#text_op").val())




})
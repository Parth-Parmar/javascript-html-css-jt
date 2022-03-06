"use strict"



//let colors = ["red", "blue", "green", "yellow", ""]
let colors = ['aqua', 'black', 'blue', 'fuchsia', 'gray', 'green',
    'lime', 'maroon', 'navy', 'olive', 'orange', 'purple', 'red',
    'silver', 'teal', 'white', 'yellow'
];

function clickfunction(e) {
    // DOM Object
    // Jquery Domj


    let value = $(e.target).text().trim()
    $(e.target).html(parseInt(++value))
    let index = Math.floor(Math.random() * colors.length)
    $(e.target).css({
        "background-color": colors[index]

    })

}
// $("#")
$("#myparent > div").on("click mouseenter", clickfunction)
    // $("p")


function on_click(e) {

    let wqe = $(e.target).prop('disabled', true)


    let timeout = setTimeout(function() {
        clearTimeout(timeout)
        let windowOpen = window.open("http://www.w3schools.com", '_blank')


        let timeout_new_window = setTimeout(function() {

            windowOpen.close()
            let wqe = $(e.target).prop('disabled', false)
            clearTimeout(timeout_new_window)


        }, 3000)

    }, 3000)

}
$("#sub").on("click", on_click)










function on_click_border() {



    $(this).parent().css({ "color": "red", "border": "2px solid red" });
}


$("#text-box").on("change", on_click_border)






function submit_on(e) {
    e.preventDefault();




    if ($("#textt").val() && $("#texttt").val()) {

        $(this).parent("form").parent(".container").css({ "background": "green" })


    } else {
        $(this).parent("form").parent(".container").css({ "background": "red" })

    }



}
$("form>button").on("click", submit_on)
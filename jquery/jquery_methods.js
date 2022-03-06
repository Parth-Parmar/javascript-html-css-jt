"use strict"

$(".btn_clone").click(function() {

    //$(".col-6").addClass("first").css('background-color', 'red').clone().appendTo(".row");

    $(".col-6").clone().appendTo(".row").addClass("first").css('background-color', 'blue');


});


//hasClass() pending


//clone() used to create a dublicate object (ex) {div,p,anything...}


//-----------------------------replace()------------------------------------------------------


$(".btn_replace").click(function() {

    // $(".replace p:nth-child(2)").replaceWith("<h3>hello</h3>") //

    $("<h3>How are You?</h3>").replaceAll(".replace p")

});


//replaceWith()-use for replace a Tag and name only ("<h3>How are You?</h3>",("hello"))
//replaceAll() -use for replace only tag not a name ("<h3>How are You?</h3>")


//----------------------------append()--------------------------------------------------------



$("#btn1").click(function() {
    $(".appenddd p").append(" <b>Appended text</b>.");
});


$("#btn2").click(function() {
    $(".appenddd ol").append("<li>Appended item</li>");
});



//append() - is used to append any tag end of the last


//-------------------------------------------remove()--------------------------------------------



$(".remove_method p").click(function() {

    $(this).remove()
});


//remove() - is used to remove a element


//-------------------------------------------show()hide()------------------------------------------------


$(".btn1_Hide").click(function() {

    $(".hide_show_method p").hide()

});
$(".btn2_Show").click(function() {

    $(".hide_show_method p").show()

});


//hide() -is used to hide element
//show() - is used to show the element



//----------------------------------------fade in ()----------------------------------------------



$(".btn1_fade_in").click(function() {
    $(".fadein_fadeout_method p").fadeIn()
});

$(".btn2_fade_out").click(function() {
    $(".fadein_fadeout_method p").fadeOut()
});



//fadeIn() -is used to show element on smooth
//fadeOut()-is used to hide element on smooth



//---------------------------------------------next()-----------------------------------------

$(document).ready(function() {
    $("li.start").next().css({ background: "red" });

    //  $(".start").parent().children("li:nth-child(4)").css({'background-color': 'blue'})

    // $("li[class=start]").css({ background: "green" }); attribute base without id class
    //$("ul li:nth-child(4)").css({ "background": "red" })
});


//$("li[class=start]")tag name attribure basi
//.ready() .load()pending
// The next() method returns the next sibling element of the selected element.
// Sibling elements are elements that share the same parent.
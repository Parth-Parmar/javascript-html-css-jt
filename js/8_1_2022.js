"use strict"

var bg_color = document.getElementById("body")
var color = document.getElementById("color") // Input tag ki id

const colors = ["red", "blue", "green", "yellow"]
function back_ground_color() {
    let color_value = color.value // input tag ki id sa value get kri
    let color_exist = true;
    for (var i = 0; i < colors.length; i++) {
        if(color_value == colors[i]){
            color_exist = true;           
            break
        }else{
            color_exist = false;
        }
    }

    if(color_exist){
        bg_color.style.backgroundColor = color_value 
    }else{
        alert("That Color Is Not exist")
    }
        
}
color.addEventListener("change", back_ground_color)

    // if(colors.indexOf(color_value) > -1){
    //     bg_color.style.backgroundColor = color_value // sett krha hu bg ma
    // }else{
    //     alert("Color Must Be From RED,BLUE,YELLOW,GREEN")
    // }


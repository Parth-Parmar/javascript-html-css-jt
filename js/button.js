"use strict"

var b = document.getElementsByClassName("btt")

//console.log(b)
for (var i = 0; i < b.length; i++) {
    var c = b[i]
    c.addEventListener('click', execute)
}

function execute(e) {

    console.log(this.value);
    // console.log(e.target.value);
}
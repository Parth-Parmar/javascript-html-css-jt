"use strict"


//console.log(sub)

function subbs(e) {

    e.preventDefault();
    document.getElementById("sub").disabled = true;
    let timeout = setTimeout(function() {


        clearTimeout(timeout)


        let windowOpen = window.open("http://www.w3schools.com", '_blank')


        let timeout_new_window = setTimeout(function() {

            windowOpen.close()
            document.getElementById("sub").disabled = false;

            clearTimeout(timeout_new_window)

        }, 3000)

    }, 3000)






}

sub.addEventListener("click", subbs)
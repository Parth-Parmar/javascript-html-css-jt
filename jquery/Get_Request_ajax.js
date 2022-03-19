"use strict"

// var settings = {
//     "url": "https://gorest.co.in/public/v2/users",
//     "method": "GET",
//     "timeout": 0,
//     "headers": {
//         "Authorization": "Bearer 4e04621c124cd26bf86d7e0b55c0b45b7bf256c99cc1aec00ac656e8754fb423"
//     },
// };

// $.ajax(settings).done(function(response) {
//     console.log(response);
// });





var form = new FormData();
form.append("First Name", "Rahul");

var settings = {
    "url": "https://gorest.co.in/public/v2/users",
    "method": "POST",
    "headers": {
        "Authorization": "Bearer 4e04621c124cd26bf86d7e0b55c0b45b7bf256c99cc1aec00ac656e8754fb423"
    },
    "processData": false,
    "contentType": false,
    "data": form
};
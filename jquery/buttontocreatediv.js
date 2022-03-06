"use strict"




$(".btn").click(function() {

    var ss = +new Date
        //var uniqe = Math.floor(Math.random() * 100);

    $('<div>', { id: ss }).appendTo('.container');

});
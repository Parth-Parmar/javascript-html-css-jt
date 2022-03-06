"use strict"
var a = [1, 5, 6]
for(var i=a.length-1;i>=0;i--){

    console.log(a[i])
}


// var total = 0
// for (var i = 0; i < a.length; i++) {


//     var sum = a[i]
//     if (Array.isArray(sum)) {
//         for (var j = 0; j < sum.length; j++) {

//             var j_sum = sum[j]


//             var total = total + j_sum


//         }
//     }

// }
// console.log(total)
var total = 0
a.forEach(function (value) {
    if (Array.isArray(value)) {
        value.forEach(function (v) {
            total += v
        })
    }
})
//console.log(total)
"use strict"
var a = [1, 2, 3, 4, 5, 6, 7, 8]
var b = [1, 2, 3, 4, 5, 6, 8, 10]
var arr = []

for (var i = 0; i < a.length; i++) {
    for (var j = 0; j < b.length; j++) {

        if (a[i] == b[j]) {

            arr.push(b[j])
        }
    }
}
console.log(arr)
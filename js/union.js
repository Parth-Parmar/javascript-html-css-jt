"use strict"
var a = [1,2,3,4,5]
var b = [1,2,3,4,5,6,7,8]
var union = [...new Set([...a, ...b])]
console.log(union)

[1,2,3,4,5,1,2,3,4,5,6,7,8]
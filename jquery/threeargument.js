"use strict"




const vowels = ["a", "e", "i", "o", "u"]



$("#btn_ok").click(function() {

    let count = 0

    let text_in = $("#text_id").val().toLowerCase()

    let vv = {
            a: 0,
            e: 0,
            i: 0,
            o: 0,
            u: 0,
        }
        // saad
    for (let i = 0; i < text_in.length; i++) {

        let vowel_store = text_in[i]
            // a
            // a
        if (vowels.includes(vowel_store)) {
            vv[vowel_store] += 1
            count++
        }

    }
    console.log(count)


})


//program to count the number of vowels in a string

// //defining vowels
// const vowels = ["a", "e", "i", "o", "u"]

// function countVowel(str) {
//     // initialize count
//     let count = 0;

//     // loop through string to test if each character is a vowel
//     for (let letter of str.toLowerCase()) {
//         if (vowels.includes(letter)) {
//             count++;
//         }
//     }

//     // return number of vowels
//     return count
// }

// // take input
// const string = prompt('Enter a string: ');

// const result = countVowel(string);

// console.log(result);
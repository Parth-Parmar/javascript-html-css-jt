"use srict"

// //for string how to find length and index Number
// // var a = "Hello my name  is parth Parmar"


// // var b =a.length-1

// // var c = a[b]
// // console.log(b,c)

// //for string how to find length and index Number



// //for array
// //index[0,1,2,3,4,5,6,  7    ,8]  //array index
// var a =[1,2,3,4,5,6,7,"parth",9] //array items
// var b = a[a.length-2]
// var e = b[b.length-1]








// // var b = a.length-2              //find total no of array minus(-) index_no
// // var g = a[b]                    //store b vale in g
// // var c =  g.length-1         //store g value in c and find length of g value
// // var d = g[c]            //store c value in d 

// document.write(b,e)
//   0 1 2 3 4    5   6 
// var a = [1, 2, 3, 4, 5, "Parth", 7]

// var c = a[a.length - 2][a[a.length - 2].length-1]



// var a ="Hello HOw are u"

// var b = a.length-1
// var c = a[b]
// console.log( b,c)


// var a = [
//     [1, 2, 3, 4, 5],
//     [6, 7, 8, 9, 10],
//     [11, 12, 13, 14, "parth"]

// ]

// var b = a.length - 1
// var c = a[b]
// var d = c.length - 1
// var e = c[d]
// var f = e.length - 1
// var t = e[f]




// console.log(t)


// var a = [1,2,3,4,5,6,7,8,9,10]



// var b = a.length-1 
// var c = a[0]+a[b]
// console.log(c)



var a = [
    [1, 2, [1, 2, 3], 4, 5], //0
    [6, 7, 8, 9, 10, [1, 2, 3]], //1
    [11, 12, 13, 14, "parth"] //2

]

// var cc = a[0][2][2]
// var dd = a[1][5][2]
// var ff = a[2][3]


// var ee = cc+dd+ff
// console.log(ee)

// var b = a[0][2] // 3 

// var ee = b.length - 1
// var vv = b[ee]
// var c = a[2][3] // 14

// var cc = vv +c 



//console.log(cc)











var a = [
    [1, 2, [1, 2, 3], 4, 5], //0
    [6, 7, 8, 9, 10, [1, 2, 3]], //1
    [11, 12, [1, 5, [2, 5, 3]], 14, "parth"] //2

]
// (3 * 3) + 3

// var b = a[0][2][2]
// var c = a[1][5][2]
// var d = a[2][2][2][2]

// var ee = b
// var ww = c
// var qq = d


// console.log(ee, ww, qq)

//dictionary

var a = {
    first_name: "parth",
    Last_name: "parmar",
}
var b = a["Last_name"]
var ee = a.Last_name
// a["first_name"] = "mkm"

var information = {

    name: "parth parmar",
    email: "pp4373225@gmil.com",
    phone: [9998344786, 998644782],
    xender: "male",
    hobby: ["music", "cricket", "travelling"],


}

var ee = information.hobby

var vehical = {

    vehical_type: "bike",
    vehical_color: "grey",
    vehical_no: "NY 3824",
    vehical_name: "sine sp",

}

var todo_list = {


    day: "sunday",
    time: "6:18",
    task: "Playing chess",
    status: "complate",


}

var aaj = todo_list['day']




var todo_multi = [
    {

        day: "sunday",
        time: "6:18",
        task: "Playing chess",
        status: "complate",

    },
    {

        day: "sunday",
        time: "6:18",
        task: "Playing cricket",
        status: "complate",

    },
    {

        day: "sunday",
        time: "6:18",
        task: "Playing football",
        status: "complate",

    },
]


var rr = todo_multi[1]['task']


var my_house = [
    {
        address: {
            house_no: "b/19",
            street_name: "new bhavik nagar",
            opp: "navrang school",
        },
        room: "4",
        tenament: "yes",
    },
    {
        address: {
            house_no: "b/19",
            street_name: "new bhavik nagar",
            opp: "navrang school",
        },
        room: "4",
        tenament: "yes",
    },
    {
        address: {
            house_no: "b/19",
            street_name: "new bhavik nagar",
            opp: "navrang school",
        },
        room: "4",
        tenament: "yes",
    }

]








var user_information = [
    {
        First_Name: "Parth",
        Last_Name: "Parmar",
        Primary_Email: "pp4373225@gmail.com",
        Xender: "male",
        Phone_no: [998344786, 4079282053, 8511391377],
        hobby: ["music", "cricket", "games"]

    },
    {
        First_Name: "Tirth",
        Last_Name: "Jain",
        Primary_Email: "tj4373225@gmail.com",
        Xender: "male",
        Phone_no: [998344788, 4079282077, 8511391311],
        hobby: ["music", "coding", "games"]

    },
    {
        First_Name: "Saad",
        Last_Name: "Mansuri",
        Primary_Email: "Sm4373225@gmail.com",
        Xender: "male",
        Phone_no: [998344786, 4079282053, 8511391377],
        hobby: ["bgmi", "cricket",]

    },
    {
        First_Name: "Henil",
        Last_Name: "Jain",
        Primary_Email: "hj4373225@gmail.com",
        Xender: "male",
        Phone_no: [998344786, 4079282053, 8511391377],
        hobby: ["chess", "games"]

    }
]



var infi = user_information[0]["First_Name"]


var a = [[1, 2, [1, 2, 3], 4, 5], //0
[6, 7, 8, 9, 10, [1, 2, 3]], //1
[11, 12, [1, 5, [2, 5, 3]], 14, "parth"]] //2

var b = a[0][2][2]
var c = a[1][5][2]
var d = a[2][2][2][2]



var w = b
var q = c
var e = d

console.log(w, q, e)
console.log(infi)







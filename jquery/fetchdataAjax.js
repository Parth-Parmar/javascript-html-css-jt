 "user strict"

 $(document).ready(function() {

     function setDataUser(data) {

         $.each(data, function(key, value) {

             $("tbody.table_body").append(`<tr>
                                             <td>${value.id}</td>
                                             <td>${value.name}</td>
                                             <td>${value.email}</td>
                                             <td>${value.gender}</td>
                                             <td>${value.status}</td>
                                         </tr>`)
         })
     }

     $(".btn").click(function() {

         try {

             $.ajax({

                 url: "https://gorest.co.in/public/v2/users",
                 type: "get",
                 dataType: "json",
                 success: function(response) {
                     data = response
                     setDataUser(data)
                 },

                 error: function(err) {

                     throw err
                 }
             })

         } catch (e) {
             console.log(e)
         }
     })

 })











 // $(document).ready(function() {

 //     $(".btn").click(function() {

 //         $.ajax({

 //             url: "https://gorest.co.in/public/v2/users",
 //             type: "get",
 //             dataType: "json",
 //             success: function(data) {
 //                 $.each(data, function(key, value) {

 //                     $("tbody.table_body").append(`<tr><td>${value.id}</td>
 //                                                     <td>${value.name}</td>
 //                                                     <td>${value.email}</td>
 //                                                     <td>${value.gender}</td>
 //                                                     <td>${value.status}</td>
 //                                                     </tr>`)
 //                 })
 //             }
 //         })



 //     })




 // })
var form = new FormData();
form.append("email", "ajghjakidhgjuh@g.com");
form.append("name", "ssssss");
form.append("gender", "male");
form.append("status", "active");


$.ajax({
    "url": "https://gorest.co.in/public/v2/users",
    "method": "POST",
    "headers": {
        "Authorization": "Bearer f2985bc2098c61c353c166d8fc604104ab659780ce625488a99415356074fdc9"
    },
    "processData": false,
    "contentType": false,
    "data": form,
    success: function(res) {

    },
    error: function(err) {

    }
})




$.ajax({
    "url": "https://gorest.co.in/public/v2/users",
    "method": "POST",
    "headers": {
        "Content-Type": "application/json",
        "Authorization": "Bearer f2985bc2098c61c353c166d8fc604104ab659780ce625488a99415356074fdc9"
    },
    "data": JSON.stringify({
        "name": "TTTJ",
        "email": "TTTJS@gg.com",
        "gender": "male",
        "status": "active"
    }),
})
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('POST', 'http://localhost:8082/login', true)
request.setRequestHeader("Content-Type", "application/json");
// request.setRequestHeader("Content-Length", "<calculated when request is sent>");
// request.setRequestHeader("Host", "<calculated when request is sent>");
// request.setRequestHeader("User-Agent", "PostmanRuntime/7.28.4");
request.setRequestHeader("Accept", "*/*");
// request.setRequestHeader("Accept-Encoding", "gzip, deflate, br");
// request.setRequestHeader("Connection", "keep-alive");

var params ='{"domainId":"shivamramsahu","email":"shivam.sahu@centilytics.com","password":"Shivam@27"}';
var body=JSON.stringify(params);
console.log(params)
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  console.log(data);
}

// Send request
request.send(params);

// console.log()
// // Begin accessing JSON data here
// var data = JSON.parse(response)

// data.forEach((movie) => {
//   // Log each movie's title
//   console.log(movie.title)
// })


// var request = new XMLHttpRequest()

// request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)
// // request.b
// request.onload = function () {
//   // Begin accessing JSON data here
//   var data = JSON.parse(this.response)

//   if (request.status >= 200 && request.status < 400) {
//     data.forEach((movie) => {
//       console.log(movie.title)
//     })
//   } else {
//     console.log('error')
//   }
// }

// request.send()
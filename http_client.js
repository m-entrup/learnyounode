var http = require('http');

var url = process.argv[2];
// console.log("URL: ", url);

http.get(url, function(response) {
  response.setEncoding("utf8");
  response.on("data", function(data) {
    console.log(data);
  });
  /* einfacher:
  response.on('data', console.log)
  */
  response.on('error', console.error)

});

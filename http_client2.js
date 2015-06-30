var http = require('http');

var url = process.argv[2];
// console.log("URL: ", url);

http.get(url, function(response) {
  response.setEncoding("utf8");
  var array = [];
  response.on("data", function(data) {
    array.push(data)
  });

  response.on("end", function() {
    var str = array.join('');
    console.log(str.length);
    console.log(str);
  });

  response.on('error', console.error);

});

/* Alternative mit Buffer List (bl)
    var http = require('http')
    var bl = require('bl')

    http.get(process.argv[2], function (response) {
      response.pipe(bl(function (err, data) {
        if (err)
          return console.error(err)
        data = data.toString()
        console.log(data.length)
        console.log(data)
      }))
    })
*/

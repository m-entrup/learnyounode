var http = require('http');

var urls = [];
var results = [];
var finished = 0;

for (var i = 2; i < process.argv.length; i++) {
  var url = process.argv[i];
  // console.log("URL: ", url);
  urls.push(url);
}

for (var i in urls) {
  getData(i, urls[i]);
}

function getData(i, url) {
  http.get(url, function(response) {
    // console.log(url);
    response.setEncoding("utf8");
    var array = [];
    response.on("data", function(data) {
      array.push(data)
    });

    response.on("end", function() {
      var str = array.join('');
      results[i] = str;
      if (++finished == urls.length) {
        for (var j in urls) {
          // console.log(urls[j]);
          console.log(results[j]);
        }
      }
    });

    response.on('error', console.error);

  });
}

/* Alternative mit Buffer List (bl)
var http = require('http')
var bl = require('bl')
var results = []
var count = 0

function printResults () {
  for (var i = 0; i < 3; i++)
    console.log(results[i])
}

function httpGet (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err)
        return console.error(err)

      results[index] = data.toString()
      count++

      if (count == 3)
        printResults()
    }))
  })
}

for (var i = 0; i < 3; i++)
  httpGet(i)

*/

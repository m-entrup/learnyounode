var fs = require('fs');
var path = require('path');

// console.log(process.argv);

var ext = process.argv[3];
fs.readdir(process.argv[2], filter);

function filter(err, list) {
	// console.log(list);
	// console.log(ext);
	for (var i in list) {
		if (path.extname(list[i]) == '.'+ext) {
			console.log(list[i]);
		} 
	}
}

/* Alternative:
fs.readdir(process.argv[2], function (err, list) {
      list.forEach(function (file) {
        if (path.extname(file) === '.' + process.argv[3])
          console.log(file)
      })
    })

 */

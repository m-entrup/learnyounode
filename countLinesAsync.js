var fs = require('fs');

var str = fs.readFile(process.argv[2], 'utf8', countLines);

function countLines(err, str) {
	array = str.split('\n');
	if (array[array.length - 1] == '') {
		console.log(array.length);
	} else {
		console.log(array.length - 1);
	}
}

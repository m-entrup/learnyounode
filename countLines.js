var fs = require('fs');

var buffer = fs.readFileSync(process.argv[2]);
var str = buffer.toString();
// Alternative:
// var str = fs.readFileSync(process.argv[2], 'utf8');
// Das toString() darf nun entfallen, da der Rückgabewert schon ein String ist.
array = str.split('\n');

if (array[array.length - 1] == '') {
	console.log(array.length);
} else {
	console.log(array.length - 1);
}

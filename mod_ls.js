var fs = require('fs');
var path = require('path');

module.exports = function (dir, ext, callback) {
	fs.readdir(dir, function(err, list) {
		if (err)
			return callback(err);
		// console.log(list);
		var array = [];
		for (var i in list) {
			if (path.extname(list[i]) == '.'+ext) {
				array.push(list[i]);
			}
		}
		/* Alternative:
		list = list.filter(function (file) {
    	return path.extname(file) === '.' + filterStr
    })

		*/
		callback(null, array);
	});
}

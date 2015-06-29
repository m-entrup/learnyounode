var mod_ls = require('./mod_ls');

mod_ls(process.argv[2], process.argv[3], function(err, list) {
  if (err) {
    console.log("Something went wrong!");
    console.log("'mod_ls.js' returned an error:");
    console.log(err);
  }
  for (var i in list) {
    console.log(list[i]);
  }
})

var net = require('net')

var port = process.argv[2];

var server = net.createServer(function (socket) {
  // console.log(socket);
  var data = getDate();
  socket.write(data);
  socket.end();
});
server.listen(port)

function getDate() {
  var date = new Date();
  var out = '';
  out += date.getFullYear();
  out += "-" + formatMonth(date.getMonth());
  out += "-" + formatDayAndTime(date.getDate());
  out += " " + formatDayAndTime(date.getHours());
  out += ":" + formatDayAndTime(date.getMinutes());
  out += "\n";
  return out;
}

function formatMonth(month) {
  month++;
  return prefix0(month, 2);
}

function formatDayAndTime(day) {
  return prefix0(day, 2);
}

function prefix0(item, length) {
  var s = "" + item;
  while (s.length < length) {
    s = "0" + s;
  }
  return s;
}

/* Alternative:
var net = require('net')

function zeroFill(i) {
  return (i < 10 ? '0' : '') + i
}

function now () {
  var d = new Date()
  return d.getFullYear() + '-'
    + zeroFill(d.getMonth() + 1) + '-'
    + zeroFill(d.getDate()) + ' '
    + zeroFill(d.getHours()) + ':'
    + zeroFill(d.getMinutes())
}

var server = net.createServer(function (socket) {
  socket.end(now() + '\n')
})

server.listen(Number(process.argv[2]))

/*

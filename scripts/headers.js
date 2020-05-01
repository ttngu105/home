var request = new XMLHttpRequest();
var headers = request.getAllResponseHeaders();
console.log(headers.trim().split(/[\r\n]+/))

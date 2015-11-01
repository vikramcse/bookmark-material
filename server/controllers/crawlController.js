var Xray = require('x-ray');
var x = Xray();

var crawl = function (url, callback) {
    console.log(url);

    x(url, "title")(function(err, result){
        //console.log(result)
        callback(result);
    });
};

module.exports = crawl;
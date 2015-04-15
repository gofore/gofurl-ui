var express = require('express');
var router = express.Router();
var request = require('request');


var urls = [];

router.get('/', function(req, res, next) {
  res.render('shorten', {urls: urls})
});

router.post('/', function(req, res, next){
    var url = req.body.url;

    if (!url){
        res.render('shorten', {urls: urls});
    }
    else{
        if (url.indexOf("http") != 0){
            url = "http://" + url;
        }
        request.post({url:'http://gofurl.herokuapp.com', form:{url: url}}, function(error, response, body){

            if (error) res.render('shorten', {urls: urls, error: error});
            else {
                try {
                    var jsonObj = JSON.parse(body);

                    urls.push({url: jsonObj.url, hash: jsonObj.hash});

                    res.render('shorten', {urls: urls})
                }
                catch (e){
                    res.render('shorten', {urls: urls, error: e})
                }
            }
        })
    }
});

module.exports = router;

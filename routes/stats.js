var express = require('express');
var router = express.Router();
var request = require('request');

var urls = [];

router.get('/', function(req, res, next) {

    var url = "http://gofurl.herokuapp.com/?limit=100";

    request.get(url, function(error, response, body){
        if (error) res.render('stats', {urls: urls, error: error});
        else{
            try{
                urls = JSON.parse(body);
                res.render('stats', {urls: urls})
            }
            catch(e){

            }
        }
    })


});

router.post('/', function(req,res, next){
    var hash = req.body.hash;
    console.log(hash);

    if (!hash){
        res.render('stats', {urls: urls});
    }
    else{

        request.get({url:'http://gofurl.herokuapp.com/' + hash + '/stats'}, function(error, response, body){
            if (error) res.render('stats', {urls: urls, error: error});
            else {
                try {

                    var jsonObj = JSON.parse(body);
                    console.log(jsonObj)
                    res.render('stats', {urls: urls, stats: jsonObj})
                }
                catch(e){

                }

            }
        })
    }
});

router.get('/:hash', function(req,res,next){
    var hash = req.params.hash;
    console.log(hash)
    if (!hash){
        res.render('stats', {urls: urls});
    }
    else{

        request.get({url:'http://gofurl.herokuapp.com/' + hash + '/stats'}, function(error, response, body){
            if (error) res.render('stats', {urls: urls, error: error});
            else {
                try {
                    var jsonObj = JSON.parse(body);
                    console.log(jsonObj)
                    res.render('stats', {urls: urls, stats: jsonObj})
                }
                catch(e){

                }

            }
        })
    }
});

module.exports = router;
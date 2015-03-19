var express = require('express');
var router = express.Router();
var request = require('request');


router.get('/', function(req, res, next) {
    res.render('stats', {urls: urls})
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
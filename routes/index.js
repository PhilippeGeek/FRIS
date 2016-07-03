var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'FRIS' });
});

router.get('/scores', function(req, res, next){
  request({
    url:'http://api.football-data.org/v1/fixtures/151952',
    headers: {
      'X-Auth-Token': process.env.FOOTBALL_DATA_TOKEN
    }
  }, function(err, response, body){
    var result = JSON.parse(body).fixture.result;
    var response = {'france':result.goalsHomeTeam, 'iceland':result.goalsAwayTeam};
    res.write(JSON.stringify(response));
    res.end();
  })
});

module.exports = router;

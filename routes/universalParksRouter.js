var express = require('express');
var router = express.Router();
var cors = require('cors');

router.use(function (req, res, next) {
    //Enable CORS support...
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

router.use(cors());

// will handle any request that ends in /universal
router.get('/', function (req, res, next) {
    var response = [
        "rides"
    ];
    res.send(response);
});

// will handle any request that ends in /universal/rides
router.get('/rides', function (req, res, next) {
    var response = [
        "The Incredible Hulk",
        "Skull Island: Reign of Kong",
        "Harry Potter and the Forbidden Journey",
        "Jurassic Park: The Ride",
        "The Amazing Adventures of Spider-Man"
    ];
    res.send(response);
});


// will handle any request that ends in /instructional/headers
router.get('/headers', function (req, res, next) {
    var response = {
        "headers": req.headers
    };
    res.send(response);
});

module.exports = router;


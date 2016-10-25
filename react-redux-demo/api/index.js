let express = require('express');
let bodyParser = require('body-parser');
let dog = require('./dog');

let app = express();

// Add CORS Filter
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
    next();
});

app.use(bodyParser.json());

app.use('/dogs', dog);

let server = app.listen(4000, () => {
    console.log('Listening on port %d', server.address().port);
});
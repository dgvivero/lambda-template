const awsServerlessExpress = require('aws-serverless-express')
const express              = require("express");
const bodyParser           = require("body-parser");
const cors                 = require("cors");
const entityRoutes         = require('./entityRoutes');

const app = express();


// cors enabled
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded());
// parse application/json
app.use(bodyParser.json());
//use routes
app.use('/entity', entityRoutes);

//Custom error handler
function clientErrorHandler (err, req, res, next) {
   res.status(500).send(err.message);
   next(err)
}
app.use(clientErrorHandler);

const server = awsServerlessExpress.createServer(app)

module.exports.handler = (event, context) => { 
   awsServerlessExpress.proxy(server, event, context) 
}

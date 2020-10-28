const express  = require('express');
const bodyParser = require('body-parser');
const pdf  = require('html-pdf');
const cors = require('cors');


const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


const port  = process.env.PORT || 5000;
app.listen(port, ()=> console.log("server is running on " + port));
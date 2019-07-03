//https://www.youtube.com/watch?v=Yv5tZu5wAU0 

const express = require("express");
const bodyParser = require("body-parser");
const speakeasy = require("speakeasy");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post("/totp-secret", (req,res,next)=> {
    var secret = speakeasy.generateSecret({length:5});
    res.send({"secret": secret.base32});
});

app.listen(port, ()=> {
    console.log(`app listen on port ${port}`);
});
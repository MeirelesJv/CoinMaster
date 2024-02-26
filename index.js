const express = require("express");
const app = express();
const bodyParser = require("body-parser");

//BodyParser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.set('view engine','ejs');

app.use(express.static('public'));

app.listen(8080,() => {
    console.log("Servidor Iniciado")
});

app.get("/",(req,res)=>{
    res.render('index')
});
const express = require("express");
const path = require("path")
const app = express();
const hbs = require('hbs');
require('dotenv').config()
const PORT = process.env.PORT

const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended: true}));


//paths

const publicDirectoryPath = path.join(__dirname, "../public")
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = (path.join(__dirname, "../templates/partials"));



//setting up hbs  and views 
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);  

//static pages {css and js rendering}
app.use(express.static(publicDirectoryPath));
app.use(express.json())  //parsing any incoming json


app.get("/",(req,res)=>{
    res.render("lobby")
})

app.get("/call",(req,res)=>{
    res.render("index",{app:process.env.APP_ID})
})
app.listen(PORT,()=>{
    console.log(`app has started on ${PORT}`)
})
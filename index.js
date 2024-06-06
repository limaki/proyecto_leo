const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routerAlbums = require('./routes/routesAlbums.js');
const routerUsuarios = require('./routes/routesUsuarios.js');
const url = 'mongodb+srv://diegotorrezzz:tomy1234@merndb.du8ixdv.mongodb.net/';
const modelUsers = require('./model/Users.js');
const modelAlbunes = require('./model/Albums.js');
const cors = require('cors');
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended: true}))

app.use(cors());


const path = require("path");


app.use(express.static(path.join(__dirname, "public")));


app.use(express.json());


const conectarMongo = async()=>{

    try{
        await mongoose.connect(url)
        app.listen(3001, ()=>{
        console.log("el servidor funciona!")
        })}

    catch(err){
        console.log(err)
    }

    
}



conectarMongo();

app.use('/', routerAlbums);
app.use('/', routerUsuarios);

app.get("/", (req,res)=>{

    res.send("hello world");
})


/*Usando Regex*/

// const email = "example@example.com";
//let regex = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/;
// let isMatch = regex.test(email);

//console.log(isMatch);
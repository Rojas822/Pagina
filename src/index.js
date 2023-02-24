const express = require('express');
const path = require('path');
const app = express();
const mysql =require('mysql');
const connect = require('express-myconnection');


const hotel=require('./rutas/hotel.js');
const res = require("express/lib/response");

app.set('port',process.env.PORT||3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));


app.use(connect(mysql, {
    host:'localhost',
    user:'root',
    password:'8228',
    port: '3306',
    database:'hotel_database'
}, 'single'));


app.use('/',hotel);

app.listen(app.get('port'),()=>{
    console.log(app.get('port'));
});


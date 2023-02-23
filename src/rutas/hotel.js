const express = require('express');
const ruta = express.Router();
const hotelControl = require('../control/hotelControl.js');
ruta.get('/',hotelControl.index);
ruta.get('/',hotelControl.list);
module.exports=ruta;


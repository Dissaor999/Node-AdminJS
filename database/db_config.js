const mongoose = require('mongoose');

const uri = "mongodb+srv://danv999:XIwajxiTboL0Cmyz@dissaordb.eja9h.mongodb.net/Dissaor_db?retryWrites=true&w=majority&appName=DissaorDB";

mongoose.connect( uri, {useNewUrlParser: true, useUnifiedTopology: true});

const conexion = mongoose.connection

module.exports = conexion;
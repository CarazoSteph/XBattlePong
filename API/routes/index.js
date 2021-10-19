
const express = require('express');
const S3 = require('aws-sdk/clients/s3');
const fs  = require("fs");
const path = require("path");
const cors = require('cors');
const multer = require('multer');
const upload = multer( {dest : 'uploads/'})
var app = express.Router();
app.use(express.json());
app.use(cors());
const { promisify } = require('util');
const unlinkAsync = promisify(fs.unlink);
const pathdelete = ('./uploads');

const { Song } = require('./song/Song.js');

const  genkey = require('./song/generatekey.js');
const genname = require('./song/generatename.js');
const { stringify } = require('querystring');

//const { User } = require('./users/User.js');

var songs = []; 
app.use(express.json());

app.all('/*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin","*");   
    res.header("Access-Control-Allow-Methods","GET,PUT,POST,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers","X-Requested-With,Content-type,Accept,X-Access-Token,X-Key");   
    if (req.method==='GET' || req.method==='DELETE' || req.method === 'POST' || req.method === 'PUT'){
        next();  
    }   
});


//Devuelve toda la información del bucket
app.get('/songs', async(req, res) => {
    try {
        
    } catch (error) {
        console.error(error);
        res.status(500).send();
    } 
    
});
 

app.put('/songs/lyrics/:namekey', (req, res) => {
    try {
        if (songs.length === 0) return res.status(404).json({ error: 'No se han creado canciones' });
        var namekey = req.params.namekey;
   //     var lyricsSong = '';
        var newlyrics = req.query.lyrics;
        //console.log(songs);
        for (const key in songs) {
            //console.log(key, songs[key].namekey);
            //console.log(key, songs[key].lyrics);
            if(songs[key].namekey == namekey) {
                songs[key].lyrics = newlyrics;
 //               lyricsSong = songs[key];
            }               
        }
        res.send('Letra cambiada exitosamente');
        console.log(songs);
    } catch (error) {
        console.error(error);
        res.status(500).send();
    } 
    
});

module.exports = app;

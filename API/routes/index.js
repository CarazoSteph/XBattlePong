
const express = require('express');
const S3 = require('aws-sdk/clients/s3');
const fs  = require("fs");
const path = require("path");
const cors = require('cors');
const multer = require('multer');
const upload = multer({dest : 'uploads/'})
var app = express.Router();
app.use(express.json());
app.use(cors());
const { promisify } = require('util');
const unlinkAsync = promisify(fs.unlink);
const pathdelete = ('./uploads');


const  genkey = require('./event/generatekey');
const { stringify } = require('querystring');

//const { User } = require('./users/User.js');

var songs = []; 
app.use(express.json());

const mysql = require('mysql');
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'Delfines24',
    database : 'x_battle_pong_db'
});

app.all('/*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin","*");   
    res.header("Access-Control-Allow-Methods","GET,PUT,POST,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers","X-Requested-With,Content-type,Accept,X-Access-Token,X-Key");   
    if (req.method==='GET' || req.method==='DELETE' || req.method === 'POST' || req.method === 'PUT'){
        next();  
    }   
});


//Devuelve todos los eventos
app.get('/events', async(req, res) => {
    try {
        sql = `SELECT * FROM Evento`;
        
        connection.query(sql, function(err, result, fields){
            if(err) throw err;
            console.log(result);
            res.send(result);
        });
        
    } catch (error) {
        console.error(error);
        res.status(500).send();
    } 
    
});
//Devuelve información del evento
app.get('/events/event', async(req, res) => {
    try {
        if(!req.query.codigo_evento) return res.status(404).json({error:'Por favor agregar datos faltantes'});

        sql = `SELECT * FROM Evento WHERE codigo_evento = '${req.query.codigo_evento}'`;
        
        connection.query(sql, function(err, result, fields){
            if(err) throw err;
            console.log(result);
            res.send(result);
        });
        
    } catch (error) {
        console.error(error);
        res.status(500).send();
    } 
    
});

app.delete('/events/event', async(req, res) => {
    try {
        if(!req.query.codigo_evento) return res.status(404).json({error:'Por favor agregar datos faltantes'});

        sql = `DELETE FROM Evento WHERE codigo_evento = '${req.query.codigo_evento}'`;
        
        connection.query(sql, function(err, result, fields){
            if(err) throw err;
            console.log(result);
            res.send(result);
        });
        
    } catch (error) {
        console.error(error);
        res.status(500).send();
    } 
    
});
 
 
app.post("/events/event/new", async (req, res) => {
    try {
        if (!req.query.codigo_evento || !req.query.nombre || !req.query.fecha_hora_inicio || !req.query.fecha_hora_fin
            || !req.query.pais || !req.query.localidad || !req.query.filas || !req.query.columnas || !req.query.tiempo_disparo
            || !req.query.tipo_partida) return res.status(404).json({error:'Por favor agregar los detalles faltantes'});
        
        let keys = [];
        keys = genkey.generatekey(req.query.nombre);
        console.log(keys[1]);
        const codigo_evento = req.query.codigo_evento;
        const nombre = req.query.nombre;
        const fecha_hora_inicio = req.query.fecha_hora_inicio;
        const fecha_hora_fin = req.query.fecha_hora_fin;
        const pais = req.query.pais;
        const localidad = req.query.localidad;
        const filas = req.query.filas;
        const columnas = req.query.columnas;
        const tiempo_disparo = req.query.tiempo_disparo;
        const tipo_partida = req.query.tipo_partida;
        if(!req.query.nombre_cliente){
            var sql = `INSERT INTO Evento (codigo_evento, llave_unica, nombre, fecha_hora_inicio, fecha_hora_fin, pais, localidad, filas, columnas, tiempo_disparo, tipo_partida) VALUES ('${codigo_evento}','${keys[1]}', '${nombre}', '${fecha_hora_inicio}',
             '${fecha_hora_fin}', '${pais}', '${localidad}', ${filas}, ${columnas}, ${tiempo_disparo}, '${tipo_partida}')`;
             
                
            connection.query(sql, function(err, result){
                if(err) throw err;
                console.log("1 record inserted");
                res.send(result);
            });
            
        }else{
            const nombre_cliente = req.query.nombre_cliente;
            var sql = `INSERT INTO Evento (codigo_evento, llave_unica, nombre, fecha_hora_inicio, fecha_hora_fin, pais, localidad, filas, columnas, tiempo_disparo, tipo_partida, nombre_cliente) VALUES ('${codigo_evento}','${keys[1]}', '${nombre}', '${fecha_hora_inicio}',
             '${fecha_hora_fin}', '${pais}', '${localidad}', ${filas}, ${columnas}, ${tiempo_disparo}, '${tipo_partida}', '${nombre_cliente}')`;
             
            connection.query(sql, function(err, result){
                if(err) throw err;
                console.log("1 record inserted");
                res.send(result);
            });
            
        }
  
    } catch (error) {
        console.error(error);
        res.status(500).send();
    }
});

app.put("/events/event", async (req, res) => {
    try {
        if (!req.query.codigo_evento || !req.query.nombre || !req.query.fecha_hora_inicio || !req.query.fecha_hora_fin || !req.query.llave_unica
            || !req.query.pais || !req.query.localidad || !req.query.filas || !req.query.columnas || !req.query.tiempo_disparo
            || !req.query.tipo_partida) return res.status(404).json({error:'Por favor agregar los detalles faltantes'});
        const llave_unica = req.query.llave_unica;
        const codigo_evento = req.query.codigo_evento;
        const nombre = req.query.nombre;
        const fecha_hora_inicio = req.query.fecha_hora_inicio;
        const fecha_hora_fin = req.query.fecha_hora_fin;
        const pais = req.query.pais;
        const localidad = req.query.localidad;
        const filas = req.query.filas;
        const columnas = req.query.columnas;
        const tiempo_disparo = req.query.tiempo_disparo;
        const tipo_partida = req.query.tipo_partida;
        if(!req.query.nombre_cliente){
            var sql = `UPDATE Evento SET nombre = '${nombre}', fecha_hora_inicio = '${fecha_hora_inicio}', fecha_hora_fin = '${fecha_hora_fin}', pais = '${pais}', localidad = '${localidad}', filas=${filas}, 
            columnas=${columnas}, tiempo_disparo=${tiempo_disparo}, tipo_partida='${tipo_partida}' WHERE codigo_evento = '${codigo_evento}' AND llave_unica = '${llave_unica}'`;
             
            connection.query(sql, function(err, result){
                if(err) throw err;
                console.log("1 record inserted");
                res.send(result);
            });
            
        }else{
            const nombre_cliente = req.query.nombre_cliente;
            var sql = `UPDATE Evento 
            SET nombre = '${nombre}', fecha_hora_inicio = '${fecha_hora_inicio}', fecha_hora_fin = '${fecha_hora_fin}', pais = '${pais}', localidad = '${localidad}', filas=${filas}, 
            columnas=${columnas}, tiempo_disparo=${tiempo_disparo}, tipo_partida='${tipo_partida}', nombre_cliente = '${nombre_cliente}'  
            WHERE codigo_evento = '${codigo_evento}' AND llave_unica = '${llave_unica}'`;
             
            connection.query(sql, function(err, result){
                if(err) throw err;
                console.log("1 record inserted");
                res.send(result);
            });
            
        }
  
    } catch (error) {
        console.error(error);
        res.status(500).send();
    }
});

//Agregar nuevo usuario
app.post("/users/user/new", async (req, res) => {
    try {
        if (!req.query.nombre_usuario || !req.query.nombre || !req.query.apellido1 
            || !req.query.apellido2 
            || !req.query.pass) return res.status(404).json({error:'Por favor agregar los detalles faltantes'});
        
        
        const nombre_usuario = req.query.nombre_usuario;
        const nombre = req.query.nombre;
        const apellido1 = req.query.apellido1;
        const apellido2 = req.query.apellido2;
        const pass = req.query.pass;
        
        var sql = `INSERT INTO Usuario (nombre_usuario, nombre, apellido1, apellido2, pass, victorias, derrotas) 
        VALUES ('${nombre_usuario}', '${nombre}', '${apellido1}', '${apellido2}', '${pass}', 0, 0)`;
            
            
        connection.query(sql, function(err, result){
            if(err) throw err;
            console.log("1 record inserted");
            res.send(result);
        });
        
        
  
    } catch (error) {
        console.error(error);
        res.status(500).send();
    }
});

//Agregar nueva partida
app.post("/matches/match/new", async (req, res) => {
    try {
        if (!req.query.codigo_evento || !req.query.creador) return res.status(404).json({error:'Por favor agregar los detalles faltantes'});
        
        
        const codigo_evento = req.query.codigo_evento;
        const creador = req.query.creador;
        
        var sql = `INSERT INTO Partida (creador, codigo_evento) VALUES ('${creador}','${codigo_evento}')`;
            
            
        connection.query(sql, function(err, result){
            if(err) throw err;
            console.log("1 record inserted");
            res.send(result);
        });
        
        
  
    } catch (error) {
        console.error(error);
        res.status(500).send();
    }
});

app.get('/matches', async(req, res) => {
    try {
        if(!req.query.codigo_evento) return res.status(404).json({error:'Por favor agregar datos faltantes'});

        sql = `SELECT * FROM Partida WHERE codigo_evento = '${req.query.codigo_evento}'`;
        
        connection.query(sql, function(err, result, fields){
            if(err) throw err;
            console.log(result);
            res.send(result);
        });
        
    } catch (error) {
        console.error(error);
        res.status(500).send();
    } 
    
});

module.exports = app;

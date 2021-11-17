

const { getEvent } = require('../services');
const { getEvents } = require('../services');
const { deleteEvent } = require('../services');
const { createEvent } = require('../services');
const { updateEvent } = require('../services');
const { createUser } = require('../services');
const { createMatch } = require('../services');
const { getMatches } = require('../services');


exports.getEventsC = async(req, res, next) => {
    try {
        await getEvents()
        res.send(201);
        next();
    } catch (error) {
        console.error(error);
        res.status(500).send() && next(error);
    } 
};

exports.getEventC = async(req, res, next) =>{
    const codigo_evento = req.query.codigo_evento;
    try {
        await getEvent(codigo_evento);
        res.send(201);
        next();
    } catch (error) {
        console.error(error);
        res.status(500).send() && next(error);
    } 
}

exports.deleteEventC =  async(req, res) => {
    const codigo_evento = req.query.codigo_evento;
    try { 
        await deleteEvent(codigo_evento);
        res.send(201);
        next();
        
    } catch (error) {
        console.error(error);
        res.status(500).send();
    } 
    
};
 
exports.createEventC =  async (req, res) => {
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
    const nombre_cliente = req.query.nombre_cliente;
    try { 
        await createEvent(codigo_evento, nombre, fecha_hora_inicio, 
            fecha_hora_fin, pais, localidad, filas, columnas, tiempo_disparo, 
            tipo_partida, nombre_cliente);
        res.send(201);
        next();
        
    } catch (error) {
        console.error(error);
        res.status(500).send();
    } 
};

exports.updateEventC =  async (req, res) => {
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
    const nombre_cliente = req.query.nombre_cliente;
    try { 
        await updateEvent(codigo_evento, nombre, fecha_hora_inicio, 
            fecha_hora_fin, pais, localidad, filas, columnas, tiempo_disparo, 
            tipo_partida, nombre_cliente);
        res.send(201);
        next();
        
    } catch (error) {
        console.error(error);
        res.status(500).send();
    } 
};

exports.createUserC = async (req, res) => {      
    const nombre_usuario = req.query.nombre_usuario;
    const nombre = req.query.nombre;
    const apellido1 = req.query.apellido1;
    const apellido2 = req.query.apellido2;
    const pass = req.query.pass;
    try { 
        await createUser(nombre_usuario, nombre, apellido1, apellido2, pass);
        res.send(201);
        next();
        
    } catch (error) {
        console.error(error);
        res.status(500).send();
    } 
};
exports.createMatchC = async (req, res) => {
    const codigo_evento = req.query.codigo_evento;
    const creador = req.query.creador;
    try { 
        await createMatch(codigo_evento, creador);
        res.send(201);
        next();
        
    } catch (error) {
        console.error(error);
        res.status(500).send();
    } 
};
exports.getMatchesC = async(req, res) => {
    try { 
        await getMatches();
        res.send(201);
        next();
        
    } catch (error) {
        console.error(error);
        res.status(500).send();
    }
    
};
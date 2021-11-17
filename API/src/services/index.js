const { getEventDb }  = require('../db')
const { getEventsDb }  = require('../db')
const { deleteEventDb }  = require('../db')
const { createEventDb }  = require('../db')
const { updateEventDb }  = require('../db')
const { createUserDb }  = require('../db')
const { createMatchDb }  = require('../db')
const { getMatchesDb }  = require('../db')

const getEvents = async () => {
    try {
        return await getEventsDb();
    }catch(e){
        throw new Error(e.message)
    }
}

const getEvent = async (codigo_evento) => {
    try {
        return await getEventDb(codigo_evento);
    }catch(e){
        throw new Error(e.message)
    }
}

const deleteEvent = async (codigo_evento) => {
    try {
        return await deleteEventDb(codigo_evento);
    }catch(e){
        throw new Error(e.message)
    }
}

const createEvent = async (codigo_evento, nombre, fecha_hora_inicio, 
    fecha_hora_fin, pais, localidad, filas, columnas, tiempo_disparo, 
    tipo_partida, nombre_cliente) => {
    try {
        return await createEventDb(codigo_evento, nombre, fecha_hora_inicio, 
            fecha_hora_fin, pais, localidad, filas, columnas, tiempo_disparo, 
            tipo_partida, nombre_cliente);
    }catch(e){
        throw new Error(e.message)
    }
}

const updateEvent = async (codigo_evento, nombre, fecha_hora_inicio, 
    fecha_hora_fin, pais, localidad, filas, columnas, tiempo_disparo, 
    tipo_partida, nombre_cliente) => {
    try {
        return await updateEventDb(codigo_evento, nombre, fecha_hora_inicio, 
            fecha_hora_fin, pais, localidad, filas, columnas, tiempo_disparo, 
            tipo_partida, nombre_cliente);
    }catch(e){
        throw new Error(e.message)
    }
}

const createUser = async (nombre_usuario, nombre, apellido1, apellido2, pass) => {
    try {
        return await createUserDb(nombre_usuario, nombre, apellido1, apellido2, pass);
    }catch(e){
        throw new Error(e.message)
    }
}

const createMatch = async (codigo_evento, creador) => {
    try {
        return await createMatchDb(codigo_evento, creador);
    }catch(e){
        throw new Error(e.message)
    }
}

const getMatches = async (codigo_evento) => {
    try {
        return await getMatchesDb(codigo_evento);
    }catch(e){
        throw new Error(e.message)
    }
}

module.exports = {
    getEvent,
    getEvents,
    deleteEvent,
    createEvent,
    updateEvent,
    createUser,
    createMatch,
    getMatches,
}
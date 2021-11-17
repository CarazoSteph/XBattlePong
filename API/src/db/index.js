const mysql = require('mysql');
const genkey = require('../utils')

var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'Delfines24',
    database : 'x_battle_pong_db'
});

const getEventsDb = () =>{
    
    sql = `SELECT * FROM Evento`;
    connection.query(sql, function(err, result){
        if(err) throw err;
        console.log(result);
        return result;
    });
     

}

const getEventDb = (codigo_evento) =>{
    try {
        if(!codigo_evento) return 'Por favor agregar datos faltantes';

        sql = `SELECT * FROM Evento WHERE codigo_evento = '${codigo_evento}'`;
        
        connection.query(sql, function(err, result){
            if(err) throw err;
            console.log(result);
            return result;
        });
        
    } catch (error) {
        console.error(error);
        return error;
    } 
    
}

const deleteEventDb = (codigo_evento) =>{
    try {
        if(!codigo_evento) return 'Por favor agregar datos faltantes';

        sql = `DELETE FROM Evento WHERE codigo_evento = '${codigo_evento}'`;
        
        connection.query(sql, function(err, result){
            if(err) throw err;
            console.log(result);
            return result;
        });
        
    } catch (error) {
        console.error(error);
        return error;
    } 
}

const createEventDb = (codigo_evento, nombre, fecha_hora_inicio, fecha_hora_fin, pais, localidad, filas, columnas, tiempo_disparo, tipo_partida, nombre_cliente) =>{
    try {
        if (!codigo_evento || !nombre || !fecha_hora_inicio || !fecha_hora_fin
            || !pais || !localidad || !filas || !columnas || !tiempo_disparo
            || !tipo_partida) return res.status(404).json({error:'Por favor agregar los detalles faltantes'});
        
        let keys = [];
        keys = genkey.generatekey(nombre);

        while(checkKeyDb(keys[1]) != 1){
            keys = genkey.generatekey(nombre);
        }
        
        if(!nombre_cliente){
            var sql = `INSERT INTO Evento (codigo_evento, llave_unica, nombre, fecha_hora_inicio, fecha_hora_fin, pais, localidad, filas, columnas, tiempo_disparo, tipo_partida) VALUES ('${codigo_evento}','${keys[1]}', '${nombre}', '${fecha_hora_inicio}',
             '${fecha_hora_fin}', '${pais}', '${localidad}', ${filas}, ${columnas}, ${tiempo_disparo}, '${tipo_partida}')`;
             
                
            connection.query(sql, function(err, result){
                if(err) throw err;
                console.log("1 record inserted");
                res.send(result);
            });
            
        }else{
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
}

const updateEventDb = (codigo_evento, nombre, fecha_hora_inicio, fecha_hora_fin, pais, localidad, filas, columnas, tiempo_disparo, tipo_partida) =>{
    try {
        if (!codigo_evento || !nombre || !fecha_hora_inicio || !fecha_hora_fin || !llave_unica
            || !pais || !localidad || !filas || !columnas || !tiempo_disparo
            || !tipo_partida) return res.status(404).json({error:'Por favor agregar los detalles faltantes'});
        if(!nombre_cliente){
            var sql = `UPDATE Evento SET nombre = '${nombre}', fecha_hora_inicio = '${fecha_hora_inicio}', fecha_hora_fin = '${fecha_hora_fin}', pais = '${pais}', localidad = '${localidad}', filas=${filas}, 
            columnas=${columnas}, tiempo_disparo=${tiempo_disparo}, tipo_partida='${tipo_partida}' WHERE codigo_evento = '${codigo_evento}' AND llave_unica = '${llave_unica}'`;
             
            connection.query(sql, function(err, result){
                if(err) throw err;
                console.log("1 record inserted");
                res.send(result);
            });
            
        }else{
            const nombre_cliente = nombre_cliente;
            var sql = `UPDATE Evento 
            SET nombre = '${nombre}', fecha_hora_inicio = '${fecha_hora_inicio}', fecha_hora_fin = '${fecha_hora_fin}', pais = '${pais}', localidad = '${localidad}', filas=${filas}, 
            columnas=${columnas}, tiempo_disparo=${tiempo_disparo}, tipo_partida='${tipo_partida}', nombre_cliente = '${nombre_cliente}'  
            WHERE codigo_evento = '${codigo_evento}' AND llave_unica = '${llave_unica}'`;
             
            connection.query(sql, function(err, result){
                if(err) throw err;
                console.log("1 record inserted");
                return result;
            });
            
        }
  
    } catch (error) {
        console.error(error);
        return error;
    }
}

const checkKeyDb = (llave_unica) => {
    try {
        if(!key) return 'Por favor agregar datos faltantes';

        sql = `SELECT EXISTS(SELECT * FROM Evento WHERE llave_unica = '${llave_unica}') `;
        
        connection.query(sql, function(err, result){
            if(err) throw err;
            console.log(result);
            return result;
        });
        
    } catch (error) {
        console.error(error);
        return error;
    } 
}

const createUserDb = (nombre_usuario, nombre, apellido1, apellido2, pass) =>{
    try {
        if (!nombre_usuario || !nombre || !apellido1 
            || !apellido2 
            || !pass) return 'Por favor agregar los detalles faltantes';
        
        var sql = `INSERT INTO Usuario (nombre_usuario, nombre, apellido1, apellido2, pass, victorias, derrotas) 
        VALUES ('${nombre_usuario}', '${nombre}', '${apellido1}', '${apellido2}', '${pass}', 0, 0)`;
            
            
        connection.query(sql, function(err, result){
            if(err) throw err;
            console.log("1 record inserted");
            return result;
        });
  
    } catch (error) {
        console.error(error);
        return error;
    }
}

const createMatchDb = (codigo_evento, creador) =>{
    try {
        if (codigo_evento || !creador) return 'Por favor agregar los detalles faltantes';
        
        var sql = `INSERT INTO Partida (creador, codigo_evento) VALUES ('${creador}','${codigo_evento}')`;
            
            
        connection.query(sql, function(err, result){
            if(err) throw err;
            console.log("1 record inserted");
            return result;
        }); 
  
    } catch (error) {
        console.error(error);
        return error;
    }
}

const getMatchesDb = (codigo_evento) =>{
    try {
        if(!codigo_evento) return 'Por favor agregar datos faltantes';

        sql = `SELECT * FROM Partida WHERE codigo_evento = '${codigo_evento}'`;
        connection.query(sql, function(err, result, fields){
            if(err) throw err;
            console.log(result);
            return result;
        });
        
    } catch (error) {
        console.error(error);
        return error;
    } 
}

module.exports = {
    getEventDb,
    getEventsDb,
    deleteEventDb,
    createEventDb,
    updateEventDb,
    createUserDb,
    createMatchDb,
    getMatchesDb,
}
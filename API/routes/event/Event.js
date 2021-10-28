
class Event {
  constructor(codigo_evento, llave_unica, nombre, fecha_hora_inicio, fecha_hora_fin
    , pais, localidad, filas, columnas, tiempo_disparo, tipo_partida, nombre_cliente) {
    this.codigo_evento = codigo_evento;
    this.llave_unica = llave_unica;
    this.nombre = nombre;
    this.fecha_hora_inicio = fecha_hora_inicio;
    this.fecha_hora_fin = fecha_hora_fin;
    this.pais = pais;
    this.localidad = localidad;
    this.filas = filas;
    this.columnas = columnas;
    this.tiempo_disparo = tiempo_disparo;
    this.tipo_partida  = tipo_partida;
    this.nombre_cliente = nombre_cliente;
  }
}

module.exports.Event = Event;


export class BattlePongClient {
    constructor() {
        this.host = 'http://localhost:3001'
    }


    async getEvents() {
        const rawResponse = await fetch(this.host + "/events");
        const parsedResponse = await rawResponse.json();
        console.log(parsedResponse)
        return parsedResponse;
    }

    async newEvent(codigo_evento,nombre,fecha_hora_inicio,fecha_hora_fin,pais,localidad,filas,columnas,tiempo_disparo,tipo_partida,nombre_cliente) {
        const rawResponse = await fetch(this.host +'/events/event/new?codigo_evento='+codigo_evento+'&nombre='+nombre+'&fecha_hora_inicio='+fecha_hora_inicio+'&fecha_hora_fin='+fecha_hora_fin+'&pais='+pais+'&localidad='+localidad+'&filas='+filas+'&columnas='+columnas+'&tiempo_disparo='+tiempo_disparo+'&tipo_partida='+tipo_partida+'&nombre_cliente='+nombre_cliente, {
            method: 'POST',
        })
        const parsedResponse = await rawResponse.json();
        console.log(parsedResponse)
        return parsedResponse;
    }
}


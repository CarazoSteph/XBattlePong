let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;

chai.use(chaiHttp);
const url = 'http://localhost:3001';

describe('Obtener todos los eventos', () => {
    it('Error Deberia mostrar todos los eventos', (done) => {
        chai.request(url)
        .get('/events')
        .end(function(err,res){
            console.log(res.body)
            expect(res).to.have.status(200);
            done();
        });
    });
});

describe('Obtener todos los Partidos', () => {
    it('Error Deberia mostrar todos los Partidos', (done) => {
        chai.request(url)
        .get('/matches')
        .query({codigo_evento:12334})
        .end(function(err,res){
            console.log(res.body)
            expect(res).to.have.status(200);
            done();
        });
    });
});

describe('Obtener la información de un evento', () => {
    it('Error Debería obtener la información de un evento', (done) =>{
        chai.request(url)
        .get('/events/event/')
        .query({codigo_evento:12334})
        .end(function(err,res){
            console.log(res.body)
            expect(res).to.have.status(200);
            done();
        });
    } );
});

describe('No crear un nuevo evento', () => {
    it('No debería crear evento', (done) =>{
        chai.request(url)
        .post('/events/event/new/')
        .send({codigo_evento:1234,nombre:'Evento1',fecha_hora_inicio:'10-10-2021-12:00',fecha_hora_fin:'10-10-2021-12:00',
        pais:'Costa Rica',localidad:'Cartago',filas:10,columnas:10,tiempo_disparo:1,tipo_partida:'Single'})
        .end(function(err,res){
            console.log(res.body)
            expect(res).to.have.status(404);
            done();
        });
    } );
});


describe('Crear un nuevo evento', () => {
    it('Error Debería crear un nuevo evento', (done) =>{
        chai.request(url)
        .post('/events/event/new/')
        .query({codigo_evento:1234,nombre:'Evento1',fecha_hora_inicio:'2021-11-01 12:00:00',fecha_hora_fin:'2021-11-01 18:00:00',
        pais:'Costa Rica',localidad:'Cartago',filas:10,columnas:10,tiempo_disparo:1,tipo_partida:'S',nombre_cliente:'Adrian'})
        .end(function(err,res){
            console.log(res.body)
            expect(res).to.have.status(200);
            done();
        });
    } );
});

describe('Crear un nuevo Usuario', () => {
    it('Error Debería crear un nuevo usuario', (done) =>{
        chai.request(url)
        .post('/users/user/new')
        .query({nombre_usuario:'4',nombre:'Nombre1',apellido1:'Apellido1',apellido2:'Apelito2',pass:'Costa Rica'})
        .end(function(err,res){
            console.log(res.body)
            expect(res).to.have.status(200);
            done();
        });
    } );
});


describe('NO crear un nuevo Usuario', () => {
    it('Error No Debería crear un nuevo usuario', (done) =>{
        chai.request(url)
        .post('/users/user/new')
        .query({nombre_usuario:'1234453',nombre:'Nombre1'})
        .end(function(err,res){
            console.log(res.body)
            expect(res).to.have.status(404);
            done();
        });
    } );
});

describe('Crear un nuevo Partido', () => {
    it('Error Debería crear un nuevo Partido', (done) =>{
        chai.request(url)
        .post('/matches/match/new/')
        .query({codigo_evento:1234,creador:'1'})
        .end(function(err,res){
            console.log(res.body)
            expect(res).to.have.status(200);
            done();
        });
    } );
});

describe('NO Crear un nuevo Partido', () => {
    it('Error NO Debería crear un nuevo Partido', (done) =>{
        chai.request(url)
        .post('/matches/match/new/')
        .query({codigo_evento:'1'})
        .end(function(err,res){
            console.log(res.body)
            expect(res).to.have.status(404);
            done();
        });
    } );
});
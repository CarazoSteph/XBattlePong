import React, { Component } from 'react';

export default class Partida extends Component {

  constructor() {
    super();
    this.state = {
      currentEvent: '',
      valueEventName: '',
      filas: 10,
      columnas: 10,
      gameArr:''
    }
    this.seaIMG = 'https://github.com/CarazoSteph/XBattlePong/blob/develop/WEB/PLAYER/src/resources/sea.png?raw=true'
    this.ship1IMG = 'https://github.com/CarazoSteph/XBattlePong/blob/develop/WEB/PLAYER/src/resources/ship1.png?raw=true'
    this.ship2IMG = 'https://github.com/CarazoSteph/XBattlePong/blob/develop/WEB/PLAYER/src/resources/ship2.png?raw=true'
    this.ship3IMG = 'https://github.com/CarazoSteph/XBattlePong/blob/develop/WEB/PLAYER/src/resources/ship3.png?raw=true'
    this.handleChangeEventName = this.handleChangeEventName.bind(this);
    this.handleSubmitNewEvent = this.handleSubmitNewEvent.bind(this);
    this.shipNow=''
  }

  handleChangeEventName(event) {
    this.setState({ valueEventName: event.target.value });
  }
  handleSubmitNewEvent(event) {
  }

  componentDidMount(){
    this.setState({ gameArr: Array.from({length: this.state.filas}, (v, a) => Array.from({length: this.state.columnas}, (v, i) => [a,i,this.seaIMG,false]))});
  }

  estaArr(list){
    return list.includes(this.shipNow)
  }
  onPlace(ship){
    // eslint-disable-next-line react/no-direct-mutation-state
    this.state.gameArr[ship[0]][ship[1]][2]=this.ship1IMG
    // eslint-disable-next-line react/no-direct-mutation-state
    this.state.gameArr[ship[0]][ship[1]][3]=true
    console.log(this.state.gameArr[ship[0]][ship[1]])
    this.forceUpdate()
  }

  render() {
    return (<>
      {this.props.enPartida ? <main>
        <div class="row">
          <div class="col-sm-1">
            <div class="card border-secondary mb-3 mx-3">
              <div class="card-header">Buscando rival</div>
              <div class="card-body text-secondary">
                <i class="fas fa-spinner"></i>
                <p class="card-text"></p>
              </div>
            </div>
          </div>
          <div class="col-sm-9">

            <table class="table table-bordered mx-3">
              <thead>
              <tr>
              <th scope="col"></th>
              {Array.from({length:this.state.columnas}).map((row,num) =>
                  <th scope="col">{num+1}</th>
                )}
                </tr>
                
              </thead>
              <tbody>
                
                {Array.from(this.state.gameArr).map((row,num) =>
                  <tr>
                  <th scope="row">{num+1}</th>
                  {Array.from(row).map((ship) =>
                      <td>
                        <button type="button" class="btn btn-outline-primary" onClick={()=>this.onPlace(ship)}>
                          <img src={ship[2]} alt=' ' class="card-img-top img-fluid" style={{ 'maxWidth': '50px' }} />
                        </button>
                      </td>
                      )}</tr>)}
              </tbody>
            </table>
          </div>
          <div class="col-sm-2">
            <div class="card border-secondary mb-3 mx-3">
              <div class="card-header">Nave 1, 1x1</div>
              <div class="card-body text-secondary">
                <button type="button" class="btn btn-outline-primary">
                  <img src={this.ship1IMG} alt=' ' class="card-img-top img-fluid" style={{ 'max-width': '100px' }} />
                </button>
              </div>
            </div>
            <div class="card border-success mb-3 mx-3">
              <div class="card-header">Nave 2</div>
              <div class="card-body text-success">
                <button type="button" class="btn btn-outline-primary">
                  <img src={this.ship2IMG} alt=' ' class="card-img-top img-fluid" style={{ 'max-width': '100px' }} />
                </button>
              </div>
            </div>
            <div class="card border-danger mb-3 mx-3">
              <div class="card-header">Nave 3</div>
              <div class="card-body text-danger">
                <button type="button" class="btn btn-outline-primary">
                  <img src={this.ship3IMG} alt=' ' class="card-img-top img-fluid" style={{ 'max-width': '100px' }} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
        :
        <main>
          <div class="container-fluid px-4 mb-4">
            <div class="card mb-4">
              <div class="card-header">
                Partidas
              </div>
              <div class="list-group">
                <a href=" " class="list-group-item list-group-item-action">
                  The current link item
                </a>
                <a href=" " class="list-group-item list-group-item-action">A second link item</a>
                <a href=" " class="list-group-item list-group-item-action">A third link item</a>
                <a href=" " class="list-group-item list-group-item-action">A fourth link item</a>
                <a href=" " class="list-group-item list-group-item-action disabled">A disabled link item</a>
              </div>
            </div>

            <div class="row">
              <div class="col-sm-10">
              </div>
              <div class="col-sm-2">
                <div class="card bg-primary text-white mb-4">
                  <button type="button " data-bs-toggle="modal" data-bs-target="#CrearEventoModal" class="bg-primary text-white list-group-item list-group-item-action d-flex justify-content-between align-items-start">
                    Crear nueva Partida
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>}
    </>

    );
  }
}
import React, { Component } from 'react';

function checkShip(ship) {
  return ship <= 0;
}

export default class Partida extends Component {

  constructor() {
    super();
    this.state = {
      currentEvent: '',
      valueEventName: '',
      filas: 5,
      columnas: 5,
      gameArr: ''
    }
    this.seaIMG = 'https://github.com/CarazoSteph/XBattlePong/blob/develop/WEB/PLAYER/src/resources/sea.png?raw=true'
    this.ship1IMG = 'https://github.com/CarazoSteph/XBattlePong/blob/develop/WEB/PLAYER/src/resources/ship1.png?raw=true'
    this.ship2IMG = 'https://github.com/CarazoSteph/XBattlePong/blob/develop/WEB/PLAYER/src/resources/ship2.png?raw=true'
    this.ship3IMG = 'https://github.com/CarazoSteph/XBattlePong/blob/develop/WEB/PLAYER/src/resources/ship3.png?raw=true'
    this.shipCant = [3,2,1]
    this.handleChangeEventName = this.handleChangeEventName.bind(this);
    this.handleSubmitNewEvent = this.handleSubmitNewEvent.bind(this);
    this.shipNow = ''
    this.buscando=false
    this.placeFlag=false
  }

  handleChangeEventName(event) {
    this.setState({ valueEventName: event.target.value });
  }
  handleSubmitNewEvent(event) {
  }

  componentDidMount() {
    this.setState({ gameArr: Array.from({ length: this.state.filas }, (v, a) => Array.from({ length: this.state.columnas }, (v, i) => [a, i, this.seaIMG, false, 0, 0])) });
  }

  estaArr(list) {
    return list.includes(this.shipNow)
  }
  onPlace(ship) {
    if (this.state.gameArr[ship[0]][ship[1]][3] === true) {
      alert('Por favor coloque su nave en una casilla no ocupada')
    } else if (this.shipNow === '') {
      alert('Por favor seleccione una nave para colocar')
    } else {
      if (this.shipNow[1] > 1) {
        let flag = false;
        for (let i = 0; i < this.shipNow[1]; i++) {
          if (ship[1] + i>this.state.columnas-1) {
            alert('Por favor coloque su nave en una valida dentro de los limites')
            flag = true;
            break;
          } else if (this.state.gameArr[ship[0]][ship[1] + i][3] === true){
            alert('Por favor coloque su nave en una casilla no ocupada')
            flag = true;
          }
        }
        for (let i = 0; i < this.shipNow[1]; i++) {
          if (flag) {
          } else {
            // eslint-disable-next-line react/no-direct-mutation-state
            this.state.gameArr[ship[0]][ship[1] + i][2] = this.shipNow[0]
            // eslint-disable-next-line react/no-direct-mutation-state
            this.state.gameArr[ship[0]][ship[1] + i][3] = true
            this.forceUpdate()
          }
        }
        if(flag){}
        else{
          this.shipCant[this.shipNow[3]]-=1
          this.shipNow = ''
        }

      } else if (this.shipNow[2] > 1) {
        let flag = false;
        for (let i = 0; i < this.shipNow[2]; i++) {
          if (ship[0]+ i>this.state.filas-1) {
            alert('Por favor coloque su nave en una valida dentro de los limites')
            flag = true;
            break;
          }
          if (this.state.gameArr[ship[0]+ i][ship[1] ][3] === true) {
            alert('Por favor coloque su nave en una casilla no ocupada')
            flag = true;
          } else {
          }
        }
        for (let i = 0; i < this.shipNow[2]; i++) {
          if (flag) {
          } else {
            // eslint-disable-next-line react/no-direct-mutation-state
            this.state.gameArr[ship[0]+ i][ship[1]][2] = this.shipNow[0]
            // eslint-disable-next-line react/no-direct-mutation-state
            this.state.gameArr[ship[0]+ i][ship[1]][3] = true
            this.forceUpdate()
          }
        }
        if(flag){}
        else{
          this.shipCant[this.shipNow[3]]-=1
          this.shipNow = ''
        }
      } else {
        // eslint-disable-next-line react/no-direct-mutation-state
        this.state.gameArr[ship[0]][ship[1]][2] = this.shipNow[0]
        // eslint-disable-next-line react/no-direct-mutation-state
        this.state.gameArr[ship[0]][ship[1]][3] = true
        this.shipCant[this.shipNow[3]]-=1
        this.shipNow = ''
        this.forceUpdate()
      }
    }
  }

  newShip(ship) {
    switch (ship) {
      default:
        break;
      case (1):
        this.shipNow = [this.ship1IMG, 1, 1, 0]
        break;
      case (2):
        this.shipNow = [this.ship2IMG, 1, 2, 1]
        break;
      case (3):
        this.shipNow = [this.ship3IMG, 2, 1, 2]
        break;

    }
  }

  begin(){
    if(this.shipCant.every(checkShip)){
      this.buscando=!this.buscando
      this.forceUpdate()
    }else{
      alert('Por favor coloque todas sus naves para continuar')
    }
  }

  render() {
    return (<>
      {this.props.enPartida ? <main>
        <div class="row">
          <div class="col-sm-1">
          {this.buscando ?
            <div class="card border-secondary mb-3 mx-3">
              <div class="card-header">Buscando rival</div>
              <div class="card-body text-secondary">
                <i class="fas fa-spinner"></i>
                <p class="card-text"></p>
              </div>
            </div>
          :
          <button type="submit" value="Submit" class="btn btn-primary mx-3 " onClick={()=>this.begin()}>Crear Partida</button>
        }
        </div>
          <div class="col-sm-9">

            <table class="table table-bordered mx-3">
              <thead>
                <tr>
                  <th scope="col"></th>
                  {Array.from({ length: this.state.columnas }).map((row, num) =>
                    <th scope="col">{num + 1}</th>
                  )}
                </tr>

              </thead>
              <tbody>

                {Array.from(this.state.gameArr).map((row, num) =>
                  <tr>
                    <th scope="row">{num + 1}</th>
                    {Array.from(row).map((ship) =>
                      <td>
                        <button type="button" class={this.buscando ? "btn btn-outline-primary disabled":"btn btn-outline-primary"}  onClick={() => this.onPlace(ship)}>
                          <img src={ship[2]} alt=' ' class="card-img-top img-fluid" style={{ 'maxWidth': '50px' }} />
                        </button>
                      </td>
                    )}</tr>)}
              </tbody>
            </table>
          </div>
          <div class="col-sm-2">
            <div class="card border-secondary mb-3 mx-3">
              <div class="card-header">Nave 1, 1x1, {this.shipCant[0]} naves disponibles</div>
              <div class="card-body text-secondary">
                <button type="button" class={this.shipCant[0]<=0 ? "btn btn-outline-primary disabled":"btn btn-outline-primary"}  onClick={() => this.newShip(1)}>
                  <img src={this.ship1IMG} alt=' ' class="card-img-top img-fluid" style={{ 'max-width': '100px' }} />
                </button>
              </div>
            </div>
            <div class="card border-success mb-3 mx-3">
              <div class="card-header">Nave 2, 1x2, {this.shipCant[1]} naves disponibles</div>
              <div class="card-body text-success">
                <button type="button" class={this.shipCant[1]<=0 ? "btn btn-outline-primary disabled":"btn btn-outline-primary"} onClick={() => this.newShip(2)}>
                  <img src={this.ship2IMG} alt=' ' class="card-img-top img-fluid" style={{ 'max-width': '100px' }} />
                </button>
              </div>
            </div>
            <div class="card border-danger mb-3 mx-3">
              <div class="card-header">Nave 3, 2x1, {this.shipCant[2]} naves disponibles</div>
              <div class="card-body text-danger">
                <button type="button" class={this.shipCant[2]<=0 ? "btn btn-outline-primary disabled":"btn btn-outline-primary"} onClick={() => this.newShip(3)}>
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
                <a href=" " class="list-group-item list-group-item-action">Partida de Pablo</a>
                <a href=" " class="list-group-item list-group-item-action">Partida de Pedro</a>
                <a href=" " class="list-group-item list-group-item-action">Partida de Miguel</a>
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
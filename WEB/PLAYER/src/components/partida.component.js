import React, { Component } from 'react';

export default class Partida extends Component {

  constructor() {
    super();
    this.state = {
      currentEvent: '',
      valueEventName: '',
      filas: '',
      columnas: ''

    }
    this.handleChangeEventName = this.handleChangeEventName.bind(this);
    this.handleSubmitNewEvent = this.handleSubmitNewEvent.bind(this);
  }

  handleChangeEventName(event) {
    this.setState({ valueEventName: event.target.value });
  }
  handleSubmitNewEvent(event) {
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
                  <th scope="col">A</th>
                  <th scope="col">B</th>
                  <th scope="col">C</th>
                  <th scope="col">D</th>
                  <th scope="col">E</th>

                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td >
                    <button type="button" class="btn btn-outline-primary">
                      <img src="https://www.cdc.gov/legionella/images/icon-cruise-ship.png" alt=' ' class="card-img-top img-fluid" style={{ 'max-width': '50px' }} />
                    </button>
                  </td>
                  <td >
                    <button type="button" class="btn btn-outline-primary">
                      <img src="https://www.cdc.gov/legionella/images/icon-cruise-ship.png" alt=' ' class="card-img-top img-fluid" style={{ 'max-width': '50px' }} />
                    </button>
                  </td>
                  <td >
                    <button type="button" class="btn btn-outline-primary">
                      <img src="https://www.cdc.gov/legionella/images/icon-cruise-ship.png" alt=' ' class="card-img-top img-fluid" style={{ 'max-width': '50px' }} />
                    </button>
                  </td>
                  <td ><button type="button" class="btn btn-outline-primary">
                    <img src="https://www.cdc.gov/legionella/images/icon-cruise-ship.png" alt=' ' class="card-img-top img-fluid" style={{ 'max-width': '50px' }} />
                  </button></td>
                  <td >
                    <button type="button" class="btn btn-outline-primary">
                      <img src="https://www.cdc.gov/legionella/images/icon-cruise-ship.png" alt=' ' class="card-img-top img-fluid" style={{ 'max-width': '50px' }} />
                    </button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td >An ship</td>
                  <td >A second ship</td>
                  <td >A third ship</td>
                  <td >An ship</td>
                  <td >A second ship</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td >An ship</td>
                  <td >A second ship</td>
                  <td >A third ship</td>
                  <td >An ship</td>
                  <td >A second ship</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td >An ship</td>
                  <td >A second ship</td>
                  <td >A third ship</td>
                  <td >An ship</td>
                  <td >A second ship</td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td >An ship</td>
                  <td >A second ship</td>
                  <td >A third ship</td>
                  <td >An ship</td>
                  <td >A second ship</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="col-sm-2">
            <div class="card border-secondary mb-3 mx-3">
              <div class="card-header">Nave 1, 2x2</div>
              <div class="card-body text-secondary">
                <button type="button" class="btn btn-outline-primary">
                  <img src="https://www.cdc.gov/legionella/images/icon-cruise-ship.png" alt=' ' class="card-img-top img-fluid" style={{ 'max-width': '50%' }} />
                </button>
              </div>
            </div>
            <div class="card border-success mb-3 mx-3">
              <div class="card-header">Nave 2</div>
              <div class="card-body text-success">
                <img src="https://www.cdc.gov/legionella/images/icon-cruise-ship.png" alt=' ' class="card-img-top img-fluid" style={{ 'max-width': '50%' }} />
                <p class="card-text"></p>
              </div>
            </div>
            <div class="card border-danger mb-3 mx-3">
              <div class="card-header">Nave 3</div>
              <div class="card-body text-danger">
                <img src="https://www.cdc.gov/legionella/images/icon-cruise-ship.png" alt=' ' class="card-img-top img-fluid" style={{ 'max-width': '50%' }} />
                <p class="card-text"></p>
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
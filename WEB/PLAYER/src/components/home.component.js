import React, { Component } from 'react';
import Partida from './partida.component';
export default class Home extends Component {

  constructor() {
    super();
    this.state = {
      currentEvent: '',
      valueEventName: '',

    }
    this.handleChangeEventName = this.handleChangeEventName.bind(this);
    this.handleSubmitNewEvent = this.handleSubmitNewEvent.bind(this);
    this.enPartida = true
  }

  handleChangeEventName(event) {
    this.setState({ valueEventName: event.target.value });
  }
  handleSubmitNewEvent(event) {
  }

  render() {
    return (
      <>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
          <div class="container-fluid">
            <a class="navbar-brand" href=" ">XBattlePong System</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href=" ">Partidas</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href=" ">Perfil</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href=" ">Estadisticas</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <body>
          <div>
            <div>
              <Partida enPartida={this.enPartida}/>
              <footer class="py-4 bg-light mt-auto">
                <div class="container-fluid px-4">
                  <div class="d-flex align-items-center justify-content-between small">
                    <div class="text-muted">Copyright &copy; XTEC 2021</div>

                  </div>
                </div>
              </footer>
            </div>
            {/* MODAL PARA CREAR EVENTO */}
            <div class="modal fade" id="CrearEventoModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-xl">
                <div class="modal-content ">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Crear nueva Partida</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <form onSubmit={this.handleSubmitNewEvent}>
                    <div class="modal-body">
                      <div class="row">
                        <label for="basic-url" class="form-label">Nombre de la partida</label>
                        <div class="input-group mb-3">
                          <input type="text" value={this.state.valueEventName} onChange={this.handleChangeEventName} class="form-control" id="basic-url" aria-describedby="basic-addon3" required />
                        </div>
                        <label for="basic-url" class="form-label">Identificador del Evento</label>
                        <div class="input-group mb-3">
                          <input type="text" placeholder="21JBNS" value={this.state.valueEventName} onChange={this.handleChangeEventName} class="form-control" id="basic-url" aria-describedby="basic-addon3" disabled />
                        </div>

                        <h5 class="modal-title mb-3" id="exampleModalLabel">Configuración de las partidas</h5>
                        <label for="basic-url" class="form-label">Configuración del tablero </label>
                        <div class="form-floating mb-3">
                          <input type="text" class="form-control" value="100" onChange={this.handleChangeFilaEvent} id="floatingInput" placeholder="Cantidad de filas" disabled />
                          <label for="floatingInput">Cantidad de filas</label>
                        </div>
                        <div class="form-floating mb-3">
                          <input type="text" class="form-control" value="100" onChange={this.handleChangeColumnEvent} id="floatingInput" placeholder="Cantidad de columnas" disabled />
                          <label for="floatingInput">Cantidad de columnas</label>
                        </div>
                        <label for="basic-url" class="form-label">Tiempo de disparo (máximo 300 segundos)</label>
                        <div class="form-floating mb-3">
                          <input type="text" class="form-control" value="300" onChange={this.handleChangeTimeEvent} id="floatingInput" placeholder="Tiempo en segundos" disabled />
                          <label for="floatingInput">Tiempo en segundos</label>
                        </div>
                        <div class="form-check">
                          <input class="form-check-input" value={this.state.valueMultiEvent} onChange={this.handleChangeMultiEvent} type="checkbox" id="flexCheckDefault" disabled />
                          <label class="form-check-label" for="flexCheckDefault">
                            Multijugador
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                      <button type="submit" value="Submit" class="btn btn-primary">Crear Partida</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

          </div>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
          <script src="js/scripts.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js" crossorigin="anonymous"></script>
          <script src="assets/demo/chart-area-demo.js"></script>
          <script src="assets/demo/chart-bar-demo.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/simple-datatables@latest" crossorigin="anonymous"></script>
          <script src="js/datatables-simple-demo.js"></script>
        </body>
      </>

    );
  }
}
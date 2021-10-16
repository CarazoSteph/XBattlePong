import React, { Component } from 'react';
import { countriesSpanish} from "../resources/countries";
import { events } from "../resources/resource";

export default class Home extends Component {

  constructor() {
    super();
    this.state = {
      currentEvent: '',
      valueEventName: '',
      valueClientName: '',
      
      valueTimeInitialEvent: '',
      valueDateInitialEvent: '',

      valueDateFinalEvent: '',
      valueTimeFinalEvent: '',

      valuePlaceEvent: '',
      valueCodeEvent: ''

    }
    this.handleChangeEventName = this.handleChangeEventName.bind(this);
    this.handleChangeClientName = this.handleChangeClientName.bind(this);
    this.handleChangeTimeInitialEvent = this.handleChangeTimeInitialEvent.bind(this);
    this.handleChangeDateInitialEvent = this.handleChangeDateInitialEvent.bind(this);
    this.handleChangeDateFinalEvent = this.handleChangeDateFinalEvent.bind(this);
    this.handleChangeTimeFinalEvent = this.handleChangeTimeFinalEvent.bind(this);
    this.handleChangePlaceEvent = this.handleChangePlaceEvent.bind(this);
    this.handleChangeCodeEvent = this.handleChangeCodeEvent.bind(this);
  }

  handleChangeEventName(event) {
    this.setState({ valueEventName: event.target.value });
  }
  handleChangeClientName(event) {
    this.setState({ valueClientName: event.target.value });
  }
  handleChangeTimeInitialEvent(event) {
    this.setState({ valueTimeInitialEvent: event.target.value });
  }

  handleChangeDateInitialEvent(event) {
    this.setState({ valueDateInitialEvent: event.target.value });
  }
  handleChangeDateFinalEvent(event) {
    this.setState({ valueDateFinalEvent: event.target.value });
  }
  handleChangeTimeFinalEvent(event) {
    this.setState({ valueTimeFinalEvent: event.target.value });
  }

  handleChangePlaceEvent(event) {
    this.setState({ valuePlaceEvent: event.target.value });
  }

  handleChangeCodeEvent(event) {
    this.setState({ valueCodeEvent: event.target.value });
  }


  handleSubmitNewEvent(event){
    console.log(this.state.valueEventName,this.state.valueClientName)
    event.preventDefault();
  }

 
  editEvent(value){
    this.setState({currentEvent:value})
  }

  render() {
    return (
      <>
        <nav class="navbar navbar-dark bg-dark mb-4">
          <div class="container-fluid ">
            <a class="navbar-brand" href=" ">XBattlePong System</a>
          </div>
        </nav>
        <body>
          <div>
            <div>
              <main>
                <div class="container-fluid px-4 mb-4">
                  <div class="card mb-4">
                    <div class="card-header">
                      <i class="fas fa-table me-1"></i>
                      Lista de Eventos
                    </div>
                    {Array.from(events).map((value) =>
                      <div class="list-group list-group-flush">
                        <button type="button" data-bs-toggle="modal" data-bs-target="#CrearPartidaModal" class="list-group-item list-group-item-action d-flex justify-content-between align-items-start">
                          {value.eventName}  <button class="badge bg-primary rounded-pill" data-bs-toggle="modal" data-bs-target="#EditarEventoModal" onClick={()=>this.editEvent(value)}> <i class="fas fa-edit"></i></button>
                        </button>
                      </div>)}
                  </div>

                  <div class="row">
                    <div class="col-sm-10">
                    </div>
                    <div class="col-sm-2">
                      <div class="card bg-primary text-white mb-4">
                        <button type="button " data-bs-toggle="modal" data-bs-target="#CrearEventoModal" class="bg-primary text-white list-group-item list-group-item-action d-flex justify-content-between align-items-start">
                          Crear nuevo Evento
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
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
              <div class="modal-dialog modal-lg">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Crear nuevo Evento</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <form onSubmit={this.handleSubmitNewEvent}>
                    <div class="modal-body">
                      <label for="basic-url" class="form-label">Nombre del Evento</label>
                      <div class="input-group mb-3">
                        <input type="text" value={this.state.valueEventName} onChange={this.handleChangeEventName} class="form-control" id="basic-url" aria-describedby="basic-addon3" required />
                      </div>
                      <label for="basic-url" class="form-label">Nombre del Cliente</label>
                      <div class="input-group mb-3">
                        <input type="text" value={this.state.valueClientName} onChange={this.handleChangeClientName} class="form-control" id="basic-url" aria-describedby="basic-addon3" />
                      </div>
                      <label for="basic-url" class="form-label">Fecha y hora de inicio</label>
                      <div class="input-group mb-3">
                        <span class="input-group-text">Fecha</span>
                        <input type="date" class="form-control" onChange={this.handleChangeDateInitialEvent} class="form-control" id="basic-url" aria-describedby="basic-addon3" required />
                        <span class="input-group-text">Hora</span>
                        <input type="time" class="form-control" onChange={this.handleChangeTimeInitialEvent} class="form-control" id="basic-url" aria-describedby="basic-addon3" required />
                      </div>
                      <label for="basic-url" class="form-label">Fecha y hora de finalización</label>

                      <div class="input-group mb-3">
                        <span class="input-group-text">Fecha</span>
                        <input type="date" class="form-control" onChange={this.handleChangeDateFinalEvent} class="form-control" id="basic-url" aria-describedby="basic-addon3" required />
                        <span class="input-group-text">Hora</span>
                        <input type="time" class="form-control" onChange={this.handleChangeDateFinalEvent} class="form-control" id="basic-url" aria-describedby="basic-addon3" required />

                      </div>
                      <label for="basic-url" class="form-label">País del evento</label>
                      <div class="input-group mb-3">
                        <select class="form-select" required>
                          <option selected>País del evento</option>
                          {Array.from(countriesSpanish).map((value) =>
                            <option value={value.label}>{value.label}</option>)}

                        </select>
                      </div>
                      <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="floatingInput" placeholder="Localidad del Evento"  onChange={this.handleChangePlaceEvent} class="form-control" id="basic-url" aria-describedby="basic-addon3" required/>
                        <label for="floatingInput">Localidad del Evento</label>
                      </div>

                      <label for="basic-url" class="form-label">Código de evento</label>
                      <div class="input-group mb-3">
                        <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" onChange={this.handleChangeCodeEvent} class="form-control" id="basic-url" aria-describedby="basic-addon3" required />
                      </div>

                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                      <button type="submit" value="Submit" class="btn btn-primary">Crear evento</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* MODAL PARA EDITAR EVENTO */}
            <div class="modal fade" id="EditarEventoModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-lg">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Editar Evento</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>

                  <div class="modal-body">
                    <label for="basic-url" class="form-label">Nombre del Evento</label>
                    <div class="input-group mb-3">
                      <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" placeholder={this.state.currentEvent.eventName} required />
                    </div>
                    <label for="basic-url" class="form-label">Nombre del Cliente</label>
                    <div class="input-group mb-3">
                      <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" placeholder={this.state.currentEvent.clientName} />
                    </div>
                    <label for="basic-url" class="form-label">Fecha y hora de inicio</label>
                    <div class="input-group mb-3">
                      <span class="input-group-text">Fecha</span>
                      <input type="date" aria-label="First name" class="form-control" required />
                      <span class="input-group-text">Hora</span>
                      <input type="time" aria-label="Last name" class="form-control" required />
                    </div>
                    <label for="basic-url" class="form-label">Fecha y hora de finalización</label>

                    <div class="input-group mb-3">
                      <span class="input-group-text">Fecha</span>
                      <input type="date" aria-label="First name" class="form-control" required />
                      <span class="input-group-text">Hora</span>
                      <input type="time" aria-label="Last name" class="form-control" required />

                    </div>
                    <label for="basic-url" class="form-label">País del evento</label>
                    <div class="input-group mb-3">
                      <select class="form-select" required>
                        <option selected>País del evento</option>
                        {Array.from(countriesSpanish).map((value) =>
                          <option value={value.label}>{value.label}</option>)}

                      </select>
                    </div>
                    <div class="form-floating mb-3">
                      <input type="email" class="form-control" id="floatingInput" placeholder="Localidad del Evento" />
                      <label for="floatingInput">Localidad del Evento</label>
                    </div>

                    <label for="basic-url" class="form-label">Código de evento</label>
                    <div class="input-group mb-3">
                      <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" required />
                    </div>

                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                    <button type="button" class="btn btn-primary">Crear evento</button>
                  </div>
                </div>
              </div>
            </div>
            {/* MODAL PARA CREAR PARTIDA DEL EVENTO */}
            <div class="modal fade" id="CrearPartidaModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-xl">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Editar Evento</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>

                  <div class="modal-body">
                    <div class="row">
                      <div class="col-sm-6">
                        <h5 class="modal-title mb-2" id="exampleModalLabel">Evento #1</h5>
                        <label for="basic-url" class="form-label">Nombre del Evento</label>
                        <div class="input-group mb-3">
                          <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" disabled />
                        </div>
                        <label for="basic-url" class="form-label">Nombre del Cliente</label>
                        <div class="input-group mb-3">
                          <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" disabled />
                        </div>
                        <label for="basic-url" class="form-label">Fecha y hora de inicio</label>
                        <div class="input-group mb-3">
                          <span class="input-group-text">Fecha</span>
                          <input type="date" aria-label="First name" class="form-control" disabled />
                          <span class="input-group-text">Hora</span>
                          <input type="time" aria-label="Last name" class="form-control" disabled />
                        </div>
                        <label for="basic-url" class="form-label">Fecha y hora de finalización</label>

                        <div class="input-group mb-3">
                          <span class="input-group-text">Fecha</span>
                          <input type="date" aria-label="First name" class="form-control" disabled />
                          <span class="input-group-text">Hora</span>
                          <input type="time" aria-label="Last name" class="form-control" disabled />

                        </div>
                        <label for="basic-url" class="form-label">País del evento</label>
                        <div class="input-group mb-3">
                          <select class="form-select" disabled>
                            <option selected>País del evento</option>
                            {Array.from(countriesSpanish).map((value) =>
                              <option value={value.label}>{value.label}</option>)}

                          </select>
                        </div>
                        <div class="form-floating mb-3">
                          <input type="email" class="form-control" id="floatingInput" placeholder="Localidad del Evento" disabled />
                          <label for="floatingInput">Localidad del Evento</label>
                        </div>

                        <label for="basic-url" class="form-label">Código de evento</label>
                        <div class="input-group mb-3">
                          <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" disabled />
                        </div>

                      </div>
                      <div class="col-sm-6">
                        <h5 class="modal-title mb-3" id="exampleModalLabel">Configuración de las partidas</h5>
                        <label for="basic-url" class="form-label">Configuración del tablero (máximo 100 filas y 100 columnas)</label>
                        <div class="form-floating mb-3">
                          <input type="email" class="form-control" id="floatingInput" placeholder="Cantidad de filas" />
                          <label for="floatingInput">Cantidad de filas</label>
                        </div>
                        <div class="form-floating mb-3">
                          <input type="email" class="form-control" id="floatingInput" placeholder="Cantidad de columnas" />
                          <label for="floatingInput">Cantidad de columnas</label>
                        </div>
                        <label for="basic-url" class="form-label">Tiempo de disparo (máximo 300 segundos)</label>
                        <div class="form-floating mb-3">
                          <input type="email" class="form-control" id="floatingInput" placeholder="Tiempo en segundos" />
                          <label for="floatingInput">Tiempo en segundos</label>
                        </div>
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                          <label class="form-check-label" for="flexCheckDefault">
                            Multijugador
                          </label>
                        </div>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <button type="button" class="btn btn-primary">Guardar</button>
                      </div>
                    </div>

                  </div>

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
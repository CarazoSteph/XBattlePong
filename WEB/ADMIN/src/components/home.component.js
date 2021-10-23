import React, { Component } from 'react';
import { countriesSpanish } from "../resources/countries";
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
      valueCodeEvent: '',
      valueCountryEvent: '',

      valueFilaEvent: '',
      valueColumnEvent: '',
      valueTimeEvent: '',
      valueMultiEvent: ''

    }
    this.handleChangeEventName = this.handleChangeEventName.bind(this);
    this.handleChangeClientName = this.handleChangeClientName.bind(this);
    this.handleChangeTimeInitialEvent = this.handleChangeTimeInitialEvent.bind(this);
    this.handleChangeDateInitialEvent = this.handleChangeDateInitialEvent.bind(this);
    this.handleChangeDateFinalEvent = this.handleChangeDateFinalEvent.bind(this);
    this.handleChangeTimeFinalEvent = this.handleChangeTimeFinalEvent.bind(this);
    this.handleChangePlaceEvent = this.handleChangePlaceEvent.bind(this);
    this.handleChangeCodeEvent = this.handleChangeCodeEvent.bind(this);
    this.handleChangeCountryEvent = this.handleChangeCountryEvent.bind(this);

    this.handleChangeFilaEvent = this.handleChangeFilaEvent.bind(this);
    this.handleChangeColumnEvent = this.handleChangeColumnEvent.bind(this);
    this.handleChangeTimeEvent = this.handleChangeTimeEvent.bind(this);
    this.handleChangeMultiEvent = this.handleChangeMultiEvent.bind(this);

    this.handleSubmitNewEvent = this.handleSubmitNewEvent.bind(this);

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
  handleChangeFilaEvent(event) {
    this.setState({ valueFilaEvent: event.target.value });
  }
  handleChangeColumnEvent(event) {
    this.setState({ valueColumnEvent: event.target.value });
  }
  handleChangeTimeEvent(event) {
    this.setState({ valueTimeEvent: event.target.value });
  }
  handleChangeMultiEvent(event) {
    this.setState({ valueMultiEvent: event.target.value });
  }
  handleChangeCountryEvent(event) {
    this.setState({ valueCountryEvent: event.target.value });
  }

  handleSubmitNewEvent(event) {
    if (this.state.valueDateInitialEvent < this.state.valueDateFinalEvent) {
      if(this.state.valueFilaEvent<=100 && this.state.valueColumnEvent<=100 && this.state.valueTimeEvent<=300){
      events.push({ eventName: this.state.valueEventName, clientName: this.state.valueClientName, dateInitialEvent: this.state.valueDateInitialEvent, timeInitialEvent: this.state.valueTimeInitialEvent, dateFinalEvent: this.state.valueDateFinalEvent, timeFinalEvent: this.state.valueTimeFinalEvent, countryEvent: this.state.valueCountryEvent, placeEvent: this.state.valuePlaceEvent, codeEvent: this.state.valueCodeEvent,filaEvent:this.state.valueFilaEvent,columnEvent:this.state.valueColumnEvent,timeEvent:this.state.valueTimeEvent,multiEvent:this.state.valueMultiEvent})
      alert('Se ha creado el evento exitosamente!')
      this.forceUpdate()
    }else{
      alert('Por favor ingrese valores de counfiguracion de partida validos')
    }

    } else {
      alert('Por favor ingrese una fecha inicial y final validas')
    }
    console.log(events)
    event.preventDefault();
  }

  editEvent(value) {
    console.log(this.state.valueDateInitialEvent)
    this.setState({ currentEvent: value })
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
                        <button type="button" onClick={() => this.editEvent(value)} class="list-group-item list-group-item-action d-flex justify-content-between align-items-start">
                          {value.eventName}  <button class="badge bg-primary rounded-pill" data-bs-toggle="modal" data-bs-target="#EditarEventoModal" onClick={() => this.editEvent(value)}> <i class="fas fa-edit"></i></button>
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
              <div class="modal-dialog modal-xl">
                <div class="modal-content ">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Crear nuevo Evento</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <form onSubmit={this.handleSubmitNewEvent}>
                    <div class="modal-body">
                      <div class="row">
                        <div class="col-sm-6">
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
                            <input type="date" class="form-control" value={this.state.valueDateInitialEvent} onChange={this.handleChangeDateInitialEvent} id="basic-url" aria-describedby="basic-addon3" required />
                            <span class="input-group-text">Hora</span>
                            <input type="time" class="form-control" value={this.state.valueTimeInitialEvent} onChange={this.handleChangeTimeInitialEvent} id="basic-url" aria-describedby="basic-addon3" required />
                          </div>
                          <label for="basic-url" class="form-label">Fecha y hora de finalización</label>

                          <div class="input-group mb-3">
                            <span class="input-group-text">Fecha</span>
                            <input type="date" class="form-control" value={this.state.valueDateFinalEvent} onChange={this.handleChangeDateFinalEvent} id="basic-url" aria-describedby="basic-addon3" required />
                            <span class="input-group-text">Hora</span>
                            <input type="time" class="form-control" value={this.state.valueTimeFinalEvent} onChange={this.handleChangeTimeFinalEvent} id="basic-url" aria-describedby="basic-addon3" required />

                          </div>
                          <label for="basic-url" class="form-label">País del evento</label>
                          <div class="input-group mb-3">
                            <select class="form-select" value={this.state.valueCountryEvent} onChange={this.handleChangeCountryEvent} required>
                              <option selected>País del evento</option>
                              {Array.from(countriesSpanish).map((value) =>
                                <option value={value.label}>{value.label}</option>)}

                            </select>
                          </div>
                          <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="floatingInput" placeholder="Localidad del Evento" value={this.state.valuePlaceEvent} onChange={this.handleChangePlaceEvent} aria-describedby="basic-addon3" required />
                            <label for="floatingInput">Localidad del Evento</label>
                          </div>

                          <label for="basic-url" class="form-label">Código de evento</label>
                          <div class="input-group mb-3">
                            <input type="text" class="form-control" id="basic-url" value={this.state.valueCodeEvent} onChange={this.handleChangeCodeEvent} aria-describedby="basic-addon3" required />
                          </div>

                        </div>
                        <div class="col-sm-6">
                          <h5 class="modal-title mb-3" id="exampleModalLabel">Configuración de las partidas</h5>
                          <label for="basic-url" class="form-label">Configuración del tablero (máximo 100 filas y 100 columnas)</label>
                          <div class="form-floating mb-3">
                            <input type="text" class="form-control" value={this.state.valueFilaEvent} onChange={this.handleChangeFilaEvent} id="floatingInput" placeholder="Cantidad de filas" />
                            <label for="floatingInput">Cantidad de filas</label>
                          </div>
                          <div class="form-floating mb-3">
                            <input type="text" class="form-control" value={this.state.valueColumnEvent} onChange={this.handleChangeColumnEvent} id="floatingInput" placeholder="Cantidad de columnas" />
                            <label for="floatingInput">Cantidad de columnas</label>
                          </div>
                          <label for="basic-url" class="form-label">Tiempo de disparo (máximo 300 segundos)</label>
                          <div class="form-floating mb-3">
                            <input type="text" class="form-control" value={this.state.valueTimeEvent} onChange={this.handleChangeTimeEvent} id="floatingInput" placeholder="Tiempo en segundos" />
                            <label for="floatingInput">Tiempo en segundos</label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" value={this.state.valueMultiEvent} onChange={this.handleChangeMultiEvent} type="checkbox" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
                              Multijugador
                            </label>
                          </div>
                        </div>
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
                      <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" placeholder={this.state.currentEvent.eventName} value={this.state.valueEventName} onChange={this.handleChangeEventName} required />
                    </div>
                    <label for="basic-url" class="form-label">Nombre del Cliente</label>
                    <div class="input-group mb-3">
                      <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" placeholder={this.state.currentEvent.clientName} value={this.state.valueClientName} onChange={this.handleChangeClientName} />
                    </div>
                    <label for="basic-url" class="form-label">Fecha y hora de inicio</label>
                    <div class="input-group mb-3">
                      <span class="input-group-text">Fecha</span>
                      <input type="date" aria-label="First name" class="form-control" value={this.state.valueDateInitialEvent} onChange={this.handleChangeDateInitialEvent} placeholder={this.state.currentEvent.dateInitialEvent} id="basic-url" aria-describedby="basic-addon3" required />
                      <span class="input-group-text">Hora</span>
                      <input type="time" aria-label="Last name" class="form-control" value={this.state.valueTimeInitialEvent} onChange={this.handleChangeTimeInitialEvent} placeholder={this.state.currentEvent.timeInitialEvent} id="basic-url" aria-describedby="basic-addon3" required />
                    </div>
                    <label for="basic-url" class="form-label">Fecha y hora de finalización</label>

                    <div class="input-group mb-3">
                      <span class="input-group-text">Fecha</span>
                      <input type="date" aria-label="First name" class="form-control" value={this.state.valueDateFinalEvent} onChange={this.handleChangeDateFinalEvent} placeholder={this.state.currentEvent.dateFinalEvent} id="basic-url" aria-describedby="basic-addon3" required />
                      <span class="input-group-text">Hora</span>
                      <input type="time" aria-label="Last name" class="form-control" value={this.state.valueTimeFinalEvent} onChange={this.handleChangeTimeFinalEvent} placeholder={this.state.currentEvent.timeFinalEvent} id="basic-url" aria-describedby="basic-addon3" required />

                    </div>
                    <label for="basic-url" class="form-label">País del evento</label>
                    <div class="input-group mb-3">
                      <select class="form-select" required >
                        <option selected>{this.state.currentEvent.countryEvent}</option>
                        {Array.from(countriesSpanish).map((value) =>
                          <option value={value.label}>{value.label}</option>)}

                      </select>
                    </div>
                    <label for="basic-url" class="form-label">Localidad del Evento</label>
                    <div class="input-group mb-3">
                      <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" placeholder={this.state.currentEvent.placeEvent} value={this.state.valuePlaceEvent} onChange={this.handleChangePlaceEvent} required />
                    </div>

                    <label for="basic-url" class="form-label">Código de evento</label>
                    <div class="input-group mb-3">
                      <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" value={this.state.valueCodeEvent} onChange={this.handleChangeCodeEvent} placeholder={this.state.currentEvent.codeEvent} required />
                    </div>

                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                    <button type="button" class="btn btn-primary">Crear evento</button>
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
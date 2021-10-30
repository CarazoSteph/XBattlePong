import React, { Component } from 'react';
import { countriesSpanish } from "../resources/countries";
import { events } from "../resources/resource";
import { BattlePongClient } from '../client/BattlePongClient';

export default class Home extends Component {
  BattlePongClient = new BattlePongClient();

  constructor() {
    super();
    this.state = {
      data: '',
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
      valueIDEvent: '',
      valueMultiEvent: 'S'

    }
    this.newArr=[]
    this.handleChangeEventName = this.handleChangeEventName.bind(this);
    this.handleChangeEventID = this.handleChangeEventID.bind(this);
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
    this.newEvent= this.newEvent.bind(this)

  }

  handleChangeEventName(event) {
    this.setState({ valueEventName: event.target.value });
  }
  handleChangeEventID(event) {
    this.setState({ valueEventID: event.target.value });
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
    if (this.state.valueMultiEvent==='S'){
      this.setState({ valueMultiEvent: 'M' });
    }else{
      this.setState({ valueMultiEvent: 'S' });
    }
  }
  handleChangeCountryEvent(event) {
    this.setState({ valueCountryEvent: event.target.value });
  }

  componentDidMount() {
    this.loadEvents();
  }

  async loadEvents() {
    const newData = await this.BattlePongClient.getEvents();
    Array.from(newData).map((value) =>
      this.newArr.push({codigo_evento:value.codigo_evento,columnas:value.columnas,filas:value.filas,llave_unica:value.llave_unica,localidad:value.localidad,nombre:value.nombre,nombre_cliente:value.nombre_cliente,pais:value.pais,tiempo_disparo:value.tiempo_disparo,tipo_partida:value.tipo_partida,fecha_inicio:value.fecha_hora_inicio.slice(0,10),hora_inicio:value.fecha_hora_inicio.slice(11,19),fecha_fin:value.fecha_hora_fin.slice(0,10),hora_fin:value.fecha_hora_fin.slice(11,19)})
    )
    this.setState({
      data: this.newArr
    });
    console.log(this.state.data)
  }

  async handleSubmitNewEvent(event) {

    console.log()
    if (this.state.valueDateInitialEvent < this.state.valueDateFinalEvent) {
      if (this.state.valueFilaEvent <= 100 && this.state.valueColumnEvent <= 100 && this.state.valueTimeEvent <= 300) {
        const newData1 = await this.BattlePongClient.newEvent(this.state.valueCodeEvent, this.state.valueEventName, this.state.valueDateInitialEvent + " " + this.state.valueTimeInitialEvent + ":00", this.state.valueDateFinalEvent + " " + this.state.valueTimeFinalEvent + ":00", this.state.valueCountryEvent, this.state.valuePlaceEvent, this.state.valueFilaEvent, this.state.valueColumnEvent, this.state.valueTimeEvent, this.state.valueMultiEvent,this.state.valueClientName)
        this.setState({
          data: newData1
        });
        console.log(this.state.data)
        console.log(this.state.valueEventName, this.state.valueClientName, this.state.valueDateInitialEvent, this.state.valueTimeInitialEvent, this.state.valueDateFinalEvent, this.state.valueTimeFinalEvent, this.state.valueCountryEvent, this.state.valuePlaceEvent, this.state.valueCodeEvent, this.state.valueFilaEvent, this.state.valueColumnEvent, this.state.valueTimeEvent, this.state.valueMultiEvent)
        alert('Se ha creado el evento exitosamente!')
        this.forceUpdate()
      } else {
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
    this.setState({
      valueDateInitialEvent:value.fecha_inicio,
      valueTimeInitialEvent:value.hora_inicio,
      valueDateFinalEvent:value.fecha_fin,
      valueTimeFinalEvent:value.hora_fin
    });
  }

  newEvent() {
    this.setState({
      valueDateInitialEvent:'',
      valueTimeInitialEvent:'',
      valueDateFinalEvent:'',
      valueTimeFinalEvent:''
    });
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
                    {Array.from(this.state.data).map((value) =>
                      <div class="list-group list-group-flush">
                        <button type="button" onClick={() => this.editEvent(value)} class="list-group-item list-group-item-action d-flex justify-content-between align-items-start">
                          {value.nombre}  <button class="badge bg-primary rounded-pill" data-bs-toggle="modal" data-bs-target="#EditarEventoModal" onClick={() => this.editEvent(value)}> <i class="fas fa-edit"></i></button>
                        </button>
                      </div>)}
                  </div>

                  <div class="row">
                    <div class="col-sm-10">
                    </div>
                    <div class="col-sm-2">
                      <div class="card bg-primary text-white mb-4">
                        <button type="button " data-bs-toggle="modal" data-bs-target="#CrearEventoModal" class="bg-primary text-white list-group-item list-group-item-action d-flex justify-content-between align-items-start" onClick={this.newEvent}>
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
                      <button type="submit" value="Submit" class="btn btn-primary" >Crear evento</button>
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
                      <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" placeholder={this.state.currentEvent.nombre} value={this.state.valueEventName} onChange={this.handleChangeEventName} required />
                    </div>

                    <label for="basic-url" class="form-label"> Identificador del evento</label>
                    <div class="input-group mb-3">
                      <input type="text" class="form-control" id="basic-url" placeholder={this.state.currentEvent.llave_unica} value={this.state.valueEventID} onChange={this.handleChangeEventID} aria-describedby="basic-addon3" disabled />
                    </div>
                    <label for="basic-url" class="form-label">Nombre del Cliente</label>
                    <div class="input-group mb-3">
                      <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" placeholder={this.state.currentEvent.nombre_cliente} value={this.state.valueClientName} onChange={this.handleChangeClientName} />
                    </div>
                    <label for="basic-url" class="form-label">Fecha y hora de inicio</label>
                    <div class="input-group mb-3">
                      <span class="input-group-text">Fecha</span>
                      <input type="date" aria-label="First name" class="form-control" value={this.state.valueDateInitialEvent} onChange={this.handleChangeDateInitialEvent} placeholder={this.state.currentEvent.fecha_inicio} id="basic-url" aria-describedby="basic-addon3" required />
                      <span class="input-group-text">Hora</span>
                      <input type="time" aria-label="Last name" class="form-control" value={this.state.valueTimeInitialEvent} onChange={this.handleChangeTimeInitialEvent} placeholder={this.state.currentEvent.hora_inicio} id="basic-url" aria-describedby="basic-addon3" required />
                    </div>
                    <label for="basic-url" class="form-label">Fecha y hora de finalización</label>

                    <div class="input-group mb-3">
                      <span class="input-group-text">Fecha</span>
                      <input type="date" aria-label="First name" class="form-control" value={this.state.valueDateFinalEvent} onChange={this.handleChangeDateFinalEvent} placeholder={this.state.currentEvent.fecha_fin} id="basic-url" aria-describedby="basic-addon3" required />
                      <span class="input-group-text">Hora</span>
                      <input type="time" aria-label="Last name" class="form-control" value={this.state.valueTimeFinalEvent} onChange={this.handleChangeTimeFinalEvent} placeholder={this.state.currentEvent.hora_fin} id="basic-url" aria-describedby="basic-addon3" required />

                    </div>
                    <label for="basic-url" class="form-label">País del evento</label>
                    <div class="input-group mb-3">
                      <select class="form-select" required >
                        <option selected>{this.state.currentEvent.pais}</option>
                        {Array.from(countriesSpanish).map((value) =>
                          <option value={value.label}>{value.label}</option>)}

                      </select>
                    </div>
                    <label for="basic-url" class="form-label">Localidad del Evento</label>
                    <div class="input-group mb-3">
                      <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" placeholder={this.state.currentEvent.localidad} value={this.state.valuePlaceEvent} onChange={this.handleChangePlaceEvent} required />
                    </div>

                    <label for="basic-url" class="form-label">Código de evento</label>
                    <div class="input-group mb-3">
                      <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" value={this.state.valueCodeEvent} onChange={this.handleChangeCodeEvent} placeholder={this.state.currentEvent.codigo_evento} required />
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
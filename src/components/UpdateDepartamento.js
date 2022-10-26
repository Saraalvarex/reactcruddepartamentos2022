import axios from 'axios';
import React, { Component } from 'react'
import { Navigate } from 'react-router-dom';
import Global from '../Global';

//recibir un ID del departamento y, al cargar el componente 
//Buscaremos el departamento con dicho ID
export default class UpdateDepartamento extends Component {

  //CREATE REF CUANDO COJO VALORES DEL FORMULARIO!
  cajaNumeroRef = React.createRef();
  cajaNombreRef = React.createRef();
  cajaLocalidadRef = React.createRef();

  state = {
    status: false,
    departamento: {}
  }

  //Buscar = get
  buscarDepartamento = () => {
    var id = this.props.numero;
    var request = "api/departamentos/"+id;
    var url = Global.urlDepartamentos + request;
    //IMPORTANTE DATAAAA!!
    axios.get(url).then(response => {
      this.setState({
        departamento: response.data
      });
    });
  }

  updateDepartamento = (e) => {
    e.preventDefault();
    var num = parseInt(this.cajaNumeroRef.current.value);
    var nombre = this.cajaNombreRef.current.value;
    var local = this.cajaLocalidadRef.current.value;

    var data = {
      numero: num,
      nombre: nombre,
      localidad: local
    }

    var request = "api/departamentos";
    var url = Global.urlDepartamentos+request;
    //EN EL PUT LE PASO EL DATO CON LA URL
    axios.put(url, data).then(response => {
      this.setState({
        status: true
      })
    })
  }

  componentDidMount = () => {
    this.buscarDepartamento();
  }
  render() {
    if (this.state.status==true){
      return (<Navigate to="/"/>)
    }
    return (
        <div>
          <h1>Modificar departamento:
          <span style={{color:"fuchsia"}}>
                    {this.props.numero}
                </span>
          </h1>
          <form style={{width: "500px", margin: "0 auto"}}>
                <input type="hidden" defaultValue={this.state.departamento.numero}
                    ref={this.cajaNumeroRef}/>
                <label>Nombre: </label>
                <input type="text" className='form-control'
                    defaultValue={this.state.departamento.nombre}
                    ref={this.cajaNombreRef}/><br/>
                <label>Localidad: </label>
                <input type="text" className='form-control'
                    defaultValue={this.state.departamento.localidad}
                    ref={this.cajaLocalidadRef}/><br/>
                <button className='btn btn-info'
                    onClick={this.updateDepartamento}>
                    Modificar departamento
                </button>
            </form>
        </div>
    )
  }
}

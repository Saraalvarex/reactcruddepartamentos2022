import React, { Component } from 'react';
import axios from 'axios';
import Global from '../Global';
import {Navigate} from 'react-router-dom';

export default class CreateDepartamento extends Component {
  cajaNumeroRef = React.createRef();
  cajanombreRef = React.createRef();
  cajaLocalidadRef = React.createRef();

  state = {
    mensaje: "",
    status: false
  }

  insertDepartamento = (e) => {
    e.preventDefault();
    var request = "/api/departamentos";
    var url = Global.urlDepartamentos + request;
    var numero = parseInt(this.cajaNumeroRef.current.value);
    var nombre = this.cajanombreRef.current.value;
    var localidad = this.cajaLocalidadRef.current.value;
    //REACT YA PERMITE DECLARAR OBJETOS CON FORMATO JSON
    //DECLARAMOS UN OBJETO CON LAS PROPIEDADES DEL API JSON
    var departamento = {
      numero: numero,
      nombre: nombre,
      localidad: localidad
    };
    //EN axios EL METODO POST RECIBE DOS PARAMENTROS
    //1) URL DEL API
    //2) OBJETO JSON PARA EL API
    axios.post(url, departamento).then(response => {
      this.setState({
        status: true,
        mensaje: "Departamento insertado!!!"
      });
    });
  }

  render() {
    if (this.state.status == true){
      return (<Navigate to="/"/>);
    }
    return (
        <div>
            <h1>Create Departamento</h1>
            <form style={{width: "500px", margin: "0 auto"}}>
              <label>Número: </label>
              <input type="number" className='form-control'
                ref={this.cajaNumeroRef} required/><br/>
              <label>Nombre: </label>
              <input type="text" className='form-control'
                ref={this.cajanombreRef} required/><br/>
              <label>Localidad: </label>
              <input type="text" className='form-control'
                ref={this.cajaLocalidadRef} required/><br/>
              <button className='btn btn-info' onClick={this.insertDepartamento}>
                Insertar departamento
              </button>
            </form>
            <h2 style={{color:"blue"}}>
              {this.state.mensaje}
            </h2>
        </div>
    )
  }
}

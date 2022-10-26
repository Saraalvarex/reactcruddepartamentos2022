import axios from 'axios';
import React, { Component } from 'react'
import Global from '../Global';
import { Navigate } from 'react-router-dom';

export default class DeleteDepartamento extends Component {

  state = {
    status: false,
  }
  deleteDepartamento = (e) => {
    e.preventDefault();
    
    var num = this.props.id;
    var request = "api/departamentos/"+num;
    var url = Global.urlDepartamentos + request;
    axios.delete(url).then(response => {
      this.setState({
        status: true
      });
    });
  }
  
  render() {
    //TENEMOS QUE COMPROBAR EL ESTADO TRUE
    //UN IF CON EL STATE
    if (this.state.status == true) {
      return (<Navigate to="/"/>);
    }
    return (
        <div>
            <h1>
                Delete Departamento:
                <span style={{color:"red"}}>
                    {this.props.id}
                </span>
            </h1>
            <form onSubmit={this.deleteDepartamento}>
              <button className='btn btn-warning'>
                Eliminar
              </button>
            </form>
        </div>
    )
  }
}

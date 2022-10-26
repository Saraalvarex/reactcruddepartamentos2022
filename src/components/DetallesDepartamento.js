import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class DetallesDepartamento extends Component {
  render() {
    return (
        <div>
            <NavLink to="/">
                Back to List
            </NavLink>
            <h1>
                Detalles Departamento
                {this.props.iddepartamento}
            </h1>
            <h2 style={{color:"blue"}}>
                Nombre: {this.props.nombre}
            </h2>
            <h2 style={{color:"red"}}>
                Localidad: {this.props.localidad}
            </h2>
        </div>
    )
  }
}

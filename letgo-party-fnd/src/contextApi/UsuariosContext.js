import React, { Component } from 'react';
import axios from 'axios'
import * as RUTAS from '../utils/variables'

const UsuariosContext = React.createContext();
export const UsuariosConsumer = UsuariosContext.Consumer;

class UsuariosProvider extends Component {
    state = {}

    obtenerUsuarios = async (busqueda)=>{
        let usuarios = await axios.get(`${RUTAS.API_USUARIOS_PERFIL}/${busqueda.perfil}`)
        console.log(usuarios)
    }

    render() {
        return (
            <UsuariosContext.Provider
                value={{
                    usuarios: this.state.usuarios,
                    obtenerUsuarios: this.obtenerUsuarios
                }}
            >
                {this.props.children}
            </UsuariosContext.Provider>
        )
    }
}

export default UsuariosProvider;
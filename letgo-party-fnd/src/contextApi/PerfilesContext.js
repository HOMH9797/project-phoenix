import React, { Component } from 'react'
import axios from 'axios'
import * as RUTAS from '../utils/variables'

const PerfilesContext = React.createContext();
export const PerfilesConsumer = PerfilesContext.Consumer;

class PerfilesProvider extends Component {
    state = {
        perfiles: []
    }

    componentDidMount() {
        this.obtenerPerfiles();
    }

    obtenerPerfiles = async () => {
        let perfil = await axios.get(RUTAS.API_PERFILES);
        this.setState({
            perfiles:perfil.data.profileResult
        })
    }

    render() {
        return (
            <PerfilesContext.Provider
                value={{ categoria: this.state.perfiles }}>
                    {this.props.children}
            </PerfilesContext.Provider>
        )
    }
}

export default PerfilesProvider;
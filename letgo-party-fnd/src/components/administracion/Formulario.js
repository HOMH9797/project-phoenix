import React, { Component } from 'react';
import { PerfilesConsumer } from '../../contextApi/PerfilesContext'
import { UsuariosConsumer } from '../../contextApi/UsuariosContext'

class Formulario extends Component {
    state = {
        perfil: ''
    }

    obtenerUsuario = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <UsuariosConsumer>
                {(value) => {
                    return (
                        <form
                            onSubmit={e => {
                                e.preventDefault();

                                value.obtenerUsuarios(this.state)
                            }}
                        >
                            <fieldset className="uk-fieldset uk-margin">
                                <legend className="uk-legend uk-text-center">
                                    Busca el perfil
                    </legend>
                            </fieldset>
                            <div className="uk-column-2-2@m uk-margin">
                                <div className="uk-margin" uk-margin="true">
                                    <select
                                        className="uk-select"
                                        name="perfil"
                                        onChange={this.obtenerUsuario}>
                                        <option>====SELECCIONE PERFIL====</option>
                                        <PerfilesConsumer>
                                            {(value) => {
                                                return (
                                                    // console.log(value.perfil)
                                                    value.perfil.map(perfiles => (
                                                        <option key={perfiles.idProfile} value={perfiles.idProfile}
                                                            data-uk-form-select>
                                                            {perfiles.nameProfile}
                                                        </option>
                                                    ))
                                                )

                                            }}
                                        </PerfilesConsumer>
                                    </select>
                                </div>
                                <div>
                                    <input type="submit" className="uk-button uk-button-danger" value="Busca Eventos" />
                                </div>
                            </div>
                        </form>)
                }}
            </UsuariosConsumer>
        )
    }
}
export default Formulario
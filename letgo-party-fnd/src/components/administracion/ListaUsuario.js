import React from 'react'
import { UsuariosConsumer } from '../../contextApi/UsuariosContext'
import Usuario from './Usuario'

const ListaUsuario = ()=>{
    return(
        <div className="uk-child-width-1-3@m" uk-grid="true">
            <UsuariosConsumer>
                {(value)=>{
                    return value.usuarios.map(usuario =>(
                        <Usuario  />
                    ))
                }}
            </UsuariosConsumer>
        </div>
    )
}

export default ListaUsuario
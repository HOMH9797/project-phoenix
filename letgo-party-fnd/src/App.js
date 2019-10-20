import React from 'react';
import Header from './components/general/Header'
import Formulario from './components/administracion/Formulario'
import PerfilesProvider from './contextApi/PerfilesContext'
import UsuarioProvider from './contextApi/UsuariosContext'
import ListarUsuario from './components/administracion/ListaUsuario'

function App() {
  return (
    <UsuarioProvider>
      <PerfilesProvider>
        <Header />
        <div className="uk-container">
          <Formulario />

          <ListarUsuario />
        </div>
      </PerfilesProvider>
    </UsuarioProvider>
  );
}

export default App;

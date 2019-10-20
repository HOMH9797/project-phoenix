import React from 'react';
import Header from './components/general/Header'
import PerfilesProvider from './contextApi/PerfilesContext'

function App() {
  return (
    <PerfilesProvider>
      <Header />
    </PerfilesProvider>
  );
}

export default App;

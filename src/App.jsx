import React from 'react';
import Navbar from './components/Navbar';
import Resumen from './components/Resumen';
import Trabajos from './components/Trabajos'; // Importa el nuevo componente

const App = () => (
  <div>
    <Navbar />
    <Resumen />
    <Trabajos /> {/* Agrega el nuevo componente aquí */}
    {/* Otros componentes aquí */}
  </div>
);

export default App;

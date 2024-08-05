import React from 'react';
import Navbar from './components/Navbar';
import Resumen from './components/Resumen';
import Trabajos from './components/Trabajos'; // Importa el nuevo componente
import Recomendaciones from "./components/Recomendaciones"; // Importa el nuevo componente
import ContactCard from './components/ContactCard';
import Footer from './components/Footer'; 

const App = () => (
  <div>
    <Navbar />
    <Resumen />
    <Trabajos /> {/* Agrega el nuevo componente aquí */}
    <Recomendaciones /> {/* Agrega el nuevo componente aquí */}
    <ContactCard />
    <Footer />
    {/* Otros componentes aquí */}
  </div>
);

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Resumen from './components/Resumen';
import Trabajos from './components/Trabajos';
import Recomendaciones from "./components/Recomendaciones";
import ContactCard from './components/ContactCard';
import Footer from './components/Footer'; 
import PizzeriaMammamia from './components/PizzeriaMammamia';
import InmobiliariaADL from './components/InmobiliariaADL';

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Resumen />
            <Trabajos />
            <Recomendaciones />
            <ContactCard />
          </>
        } />
        <Route path="/pizzeria-mammamia" element={<PizzeriaMammamia />} />
        <Route path="/inmobiliaria-adl" element={<InmobiliariaADL />} />
      </Routes>
      <Footer />
    </div>
  </Router>
);

export default App;


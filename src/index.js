import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Inicio from './Routes/Inicio';
import Nosotros from './Routes/Nosotros';
import Proyectos from './Routes/Proyectos';
import Contacto from './Routes/Contacto';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<Inicio/>}/>
        <Route path='nosotros' element={<Nosotros/>}/>
        <Route path='proyectos' element={<Proyectos/>}/>
        <Route path='contacto' element={<Contacto/>}/>
      </Route>
    </Routes>
    
  </BrowserRouter>
);


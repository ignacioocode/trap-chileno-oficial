import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Inicio from './routes/Inicio';
import Nosotros from './routes/Nosotros';
import Proyectos from './routes/Proyectos';
import Contacto from './routes/Contacto';

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


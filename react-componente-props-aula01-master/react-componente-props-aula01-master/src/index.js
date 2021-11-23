import React from 'react';
import ReactDOM from 'react-dom';
import Carta from './components/Carta'
ReactDOM.render(
  <React.StrictMode>
    <Carta remetente="Joana" destino="Minas gerais"/>
  </React.StrictMode>,
  document.getElementById('root')
);
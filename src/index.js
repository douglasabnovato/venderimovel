// O index.js ficará responsável por chamar os componentes principais da App

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Contato from './components/Contato';
import Informacao from './components/Informacao';
import Fotos from './components/Fotos';
import Mapa from './components/Mapa';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={App}/>
        <Route path="/contato" exact={true} component={Contato}/>
        <Route path="/informacao" exact={true} component={Informacao}/>
        <Route path="/fotos" exact={true} component={Fotos}/>
        <Route path="/mapa" exact={true} component={Mapa}/>
      </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
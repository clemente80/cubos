import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './App';
import Movie from './pages/movie/';
import Header from './components/header';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Switch>
          <Route exact path="/"  component={Home}/>
          <Route exact path="/filme/:id"  component={Movie}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

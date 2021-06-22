import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <ItemListContainer></ItemListContainer>
        </Route>
        <Route path="/category/:id">
          <ItemListContainer></ItemListContainer>
        </Route>
        <Route path="/category">
          <Redirect to="/"/>
        </Route>
        <Route path="/item/:id">
          <ItemDetailContainer></ItemDetailContainer>
        </Route>
        <Route path="/item">
          <Redirect to="/"/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

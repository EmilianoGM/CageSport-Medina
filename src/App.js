import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { CartComponentContext } from './components/CartContext/CartContext';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <CartComponentContext>
        <Switch>
          <Route exact path="/">
            <ItemListContainer />
          </Route>
          <Route path="/category/:id">
            <ItemListContainer />
          </Route>
          <Route path="/category">
            <Redirect to="/" />
          </Route>
          <Route path="/item/:id">
            <ItemDetailContainer />
          </Route>
          <Route path="/item">
            <Redirect to="/" />
          </Route>
          <Route path="/cart">
            <h1>PROXIMAMENTE...</h1>
          </Route>
        </Switch>
      </CartComponentContext>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { CartComponentContext } from './contexts/CartContext/CartContext';
import { Cart } from './components/Cart/Cart';


function App() {
  return (
    <BrowserRouter>
      <CartComponentContext>
        <NavBar />
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
            <Cart />
          </Route>
        </Switch>
      </CartComponentContext>
    </BrowserRouter>
  );
}

export default App;

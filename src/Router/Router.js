import React from 'react';
import { ItemListContainer } from '../screens/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from '../screens/ItemDetailContainer/ItemDetailContainer';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Cart } from '../screens/CartContainer/Cart';
import { Error } from '../screens/ErrorContainer/Error';

export const Router = () => {
    return (
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
          <Route component={Error} path="/error" />
        </Switch>
    );
}
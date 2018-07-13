//@flow
import { BrowserRouter as Router, Route, Switch, type ContextRouter  } from 'react-router-dom';
import React, { Fragment } from 'react';

import Home from './Home';
import NotFound from './NotFound';
import Header from './Header';

import Pokemons from '../containers/Pokemons';
import Moves from '../containers/Moves';
import Types from '../containers/Types';
import Colors from '../containers/Colors';

// Note:- If we use `component` istead `render`, flow will no complain.
const Root = () => (
  <Router>
    <div>
      <Switch>
        <Route path="/pokemons" render={({ location: { pathname } }: ContextRouter) => (
          <Fragment>
            <Header currentPath={pathname}/>
            <Pokemons/>
          </Fragment>
        )}/>
        <Route path="/types" render={({ location: { pathname } }: ContextRouter) => (
          <Fragment>
            <Header currentPath={pathname}/>
            <Types/>
          </Fragment>
        )}/>
        <Route path="/moves" render={({ location: { pathname } }: ContextRouter) => (
          <Fragment>
            <Header currentPath={pathname}/>
            <Moves/>
          </Fragment>
        )}/>
        <Route path="/colors" render={({ location: { pathname } }: ContextRouter) => (
          <Fragment>
            <Header currentPath={pathname}/>
            <Colors/>
          </Fragment>
        )}/>
        <Route path="/" exact render={({ location: { pathname } }: ContextRouter) => (
          <Fragment>
            <Header currentPath={pathname}/>
            <Home/>
          </Fragment>
        )}/>
        <Route render={({ location: { pathname } }: ContextRouter) => (
          <Fragment>
            <Header currentPath={pathname}/>
            <NotFound/>
          </Fragment>
        )}/>
      </Switch>
    </div>
  </Router>
);

export default Root;
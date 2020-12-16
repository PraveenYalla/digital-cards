import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from '../Layout/index';
import MainWrapper from './MainWrapper';

import LogIn from '../LogIn/index';
import Dashboard from '../Dashboard/index';
import Templates from '../Templates/index';
import Cards from '../Cards/index';
import Editor from '../Editor/index';

const Pages = () => (
  <Switch>
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/templates" component={Templates} />
    <Route path="/cards" component={Cards} />
  </Switch>
);

const wrappedRoutes = () => (
  <div>
    <Layout />
    <div className="container__wrap">
      <Route path="/" component={Pages} />
    </div>
  </div>
);

const Router = () => (
  <MainWrapper>
    <main>
      <Switch>
        <Route exact path="/" component={LogIn} />
        <Route exact path="/log_in" component={LogIn} />
        <Route exact path="/editor/:template" component={Editor} />
        <Route path="/" component={wrappedRoutes} />

      </Switch>
    </main>
  </MainWrapper>
);

export default Router;

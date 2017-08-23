import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import SearchContainer from './search';

const Router = () => (
  <HashRouter>
    <Route exact path="/" component={SearchContainer} />
  </HashRouter>
);

export default Router;

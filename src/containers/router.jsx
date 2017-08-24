import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Search from './search';
import Group from './group';

const Router = () => (
  <HashRouter>
    <div>
      <Route exact path="/" component={Search} />
      <Route path="/:groupId" component={Group} />
    </div>
  </HashRouter>
);

export default Router;

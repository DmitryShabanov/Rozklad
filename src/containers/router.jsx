import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Search from './search';
import GroupTimetable from './groupTimetable';

const Router = () => (
  <HashRouter>
    <div>
      <Route exact path="/" component={Search} />
      <Route path="/:groupName" component={GroupTimetable} />
    </div>
  </HashRouter>
);

export default Router;

import React from 'react';
import Boards from './Boards';
import Board from './Board';
import { root } from '../apis/urls';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';

const App = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path={`${root}/`} exact component={Boards} />
        <Route path={`${root}/board/:id`} component={Board} />
      </Switch>
    </div>
  </Router>
);

export default App;

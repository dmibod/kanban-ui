import React from 'react';
import Boards from './Boards';
import Board from './Board';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';

const App = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path={`${process.env.REACT_APP_CONTEXT_ROOT}/`} exact component={Boards} />
        <Route path={`${process.env.REACT_APP_CONTEXT_ROOT}/board/:id`} component={Board} />
      </Switch>
    </div>
  </Router>
);

export default App;

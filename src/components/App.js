import React from 'react';
import Boards from './Boards';
import Board from './Board';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';

const App = () => (
  <Router history={history}>
    <React.Fragment>
      <Switch>
        <Route
          path={`${process.env.REACT_APP_CONTEXT_ROOT}/`}
          exact
          component={Boards}
        />
        <Route
          path={`${process.env.REACT_APP_CONTEXT_ROOT}/board/:id`}
          exact
          component={Board}
        />
      </Switch>
    </React.Fragment>
  </Router>
);

export default App;

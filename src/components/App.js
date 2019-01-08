import React from 'react';
import VisibleTodoList from '../containers/VisibleTodoList';
import AddTodo from '../containers/AddTodo';
import Board from './Board';
import { root } from '../apis/urls';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';

const Index = () => {
  return (
    <div>
      <AddTodo />
      <VisibleTodoList />
    </div>
  );
};

const App = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path={`${root}/`} exact component={Index} />
        <Route path={`${root}/board/:id`} component={Board} />
      </Switch>
    </div>
  </Router>
);

export default App;

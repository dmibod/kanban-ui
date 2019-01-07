import React from 'react';
import VisibleTodoList from '../containers/VisibleTodoList';
import AddTodo from '../containers/AddTodo';
import Board from './Board';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Index = () => {
  return (
    <div>
      <AddTodo />
      <VisibleTodoList />
    </div>
  );
};

const App = () => (
  <Router>
    <div>
      <Route path="/" exact component={Index} />
      <Route path="/board/:id" component={Board} />
    </div>
  </Router>
);

export default App;

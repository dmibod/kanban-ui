import React from 'react';
import './App.css';
import Footer from './Footer'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div>
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App;

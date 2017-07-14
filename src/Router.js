import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import TaskList from './components/TaskList';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="login" component={LoginForm} title="Please Login" />
      <Scene key="task"  component={TaskList} title="Tasks" initial />
    </Router>
  );
};

export default RouterComponent;
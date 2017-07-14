import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Please Login" />
      </Scene>

      <Scene key="main" initial >
        <Scene
          rightTitle="Add"
          onRight={() => Actions.addTask()}
          key="taskList"
          component={TaskList}
          title="Tasks" />
        <Scene key="addTask" component={AddTask} title="Add Task"/>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
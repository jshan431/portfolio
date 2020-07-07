import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import Projects from './pages/Projects';
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/projects" exact>
          <Projects />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;

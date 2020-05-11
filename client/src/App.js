import React from 'react';
import './App.css';
import Main from './pages/main'
import Contact from './pages/contact'
import About from './pages/about'
import Support from './pages/support'
import Login from './pages/signIn'
import Register from './pages/register'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {
  return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Main/>
            </Route>
            <Route exact path="/contact">
              <Contact/>
            </Route>
            <Route exact path="/about">
              <About/>
            </Route>
            <Route exact path="/support">
              <Support/>
            </Route>
            <Route exact path="/login">
              <Login/>
            </Route>
            <Route exact path="/register">
              <Register/>
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;

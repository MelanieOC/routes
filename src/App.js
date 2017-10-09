import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import About from './About';
import Teachers from './Teachers';
import Courses from './Courses';
import {
  BrowserRouter,
  Route,
  NavLink
} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <header>
            <span className="icn-logo"><i className="material-icons">code</i></span>
            <ul className="main-nav">
              <li><NavLink exact to="/">Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/teachers">Teachers</NavLink></li>
              <li><NavLink to="/courses">Courses</NavLink></li>
            </ul>
          </header>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/teachers" component={Teachers} />
            <Route path="/courses" component={Courses} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
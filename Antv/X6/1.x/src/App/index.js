import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {
  Base,
  Register,
  Layout
} from '../components/'
import logo from './logo.svg';
import g6Example from './g6-example.png';
import './App.css';

function App() {
  return (
    <Router>
    <div className="app">
      <header className="app-header">
        <div className="app-logo-box">
          <img src={logo} className="app-logo" alt="logo" />
          <img src={g6Example} className="app-logo-g6" alt="g6Example" />
        </div>
        <div className="app-link-box">
          <a
            className="app-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <a
            className="app-link"
            href="https://g6.antv.vision/zh/docs/manual/getting-started"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn antv/x6
          </a>
        </div>
        <div className="app-router">
          <Link to="/">基础示例</Link>
          <Link to="/register">自定义节点、边</Link>
          <Link to="/layout">图布局</Link>
        </div>
      </header>
      <div className="app-body">
        <Switch>
          <Route path="/" exact>
            <Base />
          </Route>
          <Route path="/register" exact>
            <Register />
          </Route>
          <Route path="/layout" exact>
            <Layout />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;

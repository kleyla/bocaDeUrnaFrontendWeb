import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import "./assets/css/nucleo-icons.css";
import "./assets/scss/blk-design-system-react.scss?v=1.0.0";
import "./assets/demo/demo.css";

import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Index from "./views/Index.jsx";
import Registro from "./views/Registro.jsx";
import Login from "./views/Login.jsx";
import Profile from "./views/Profile.jsx";
import Home from "./views/Home.jsx";

ReactDOM.render(
    <BrowserRouter>
      <Switch>
        <Route path="/components" render={props => <Index {...props} />} />
        <Route
            path="/register-page"
            render={props => <Registro {...props} />}
        />
        <Route
            path="/login-page"
            render={props => <Login {...props} />}
        />
        <Route
            path="/profile-page"
            render={props => <Profile {...props} />}
        />
        <Route
            path="/home-page"
            render={props => <Home {...props} />}
        />
        <Redirect from="/" to="/components" />
      </Switch>
    </BrowserRouter>,
    document.getElementById("root")
  );
  
//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

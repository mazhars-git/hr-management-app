import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import AddEmployee from './components/AddEmployee/AddEmployee';
import MailSending from './components/MailSending/MailSending';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/addEmployee">
          <AddEmployee></AddEmployee>
        </Route>
        <Route path="/mail">
          <MailSending></MailSending>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

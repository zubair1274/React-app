import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from '../App';
import Dashboard from '../views/dashbord';

export default function () {
  return (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route  path="/dashboard" component={Dashboard} />
      </div>
    </Router>




  )


}
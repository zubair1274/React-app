import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Routing from './routes/routing'
// import App from './App'
// import Dashboard from './views/dashbord'

// const routing = (
//   <Router>
//     <div>
//       <Route exact path="/" component={App} />
//       <Route path="/dashboard" component={Dashboard} />

//     </div>
//   </Router>
// )



ReactDOM.render(<Routing/>, document.getElementById('root'))
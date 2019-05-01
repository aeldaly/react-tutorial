import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';
import HelloWorld from './pages/hello-world';
import Home from './pages/home'

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/hello-world">Hello-World!</Link>
          </li>
        </ul>
        <hr />
      </div>
      <Route exact path="/" component={Home} />
      <Route exact path="/hello-world" component={HelloWorld} />

    </Router>
  );
}
    
export default App;

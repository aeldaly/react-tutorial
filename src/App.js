import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';
import Home from './pages/home'
import HelloWorld from './pages/hello-world';
import WeatherApp from "./pages/weather";

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
          <li>
            <Link to="/weather">Weather</Link>
          </li>
        </ul>
        <hr />
      </div>
      <Route exact path="/" component={Home} />
      <Route exact path="/hello-world" component={HelloWorld} />
      <Route exact path="/weather" component={WeatherApp} />
    </Router>
  );
}
    
export default App;

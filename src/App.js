import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import './App.css';
import { amazonData } from './AmazonData'; // Import the Amazon destination data
import AmazonDestination from './AmazonDestination'; // Relative path to the AmazonDestination component

<Route path='/amazon-destination' render={() => <AmazonDestination data={amazonData} />} />

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/amazon-destination' render={() => <AmazonDestination data={amazonData} />} />
      </Switch>
    </Router>
  );
}


export default App;

import React from 'react';
import './App.css';
// import Splashscreen from './components/Splashscreen'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Default from './components/Default'
import Contact from './components/Contact'
import Details from './components/Details';
import withSplashScreen from './components/withSplashScreen';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter >
        <Navbar />
        <Switch>
          {/* path= /hyper-cars/ */}
          <Route exact path="/" component={Home}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/details" component={Details}></Route>
          <Route component={Default}></Route>
        </Switch>
      </BrowserRouter>
      <div className="back-to-top" onClick={() => document.getElementById('root').scrollTo({
        top: 0,
        behavior: 'smooth',
      })}>
        <i className="fas fa-arrow-circle-up"></i>
      </div>
    </React.Fragment>

  );
}

export default withSplashScreen(App);

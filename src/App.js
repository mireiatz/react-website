import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Classes from './components/pages/Classes';
import Events from './components/pages/Events';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <ScrollToTop>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/classes' component={Classes} />
            <Route path='/events' component={Events} />
            <Route path='/contact' component={Contact} />
            <Route path='/about' component={About} />
          </Switch>
          <Footer />
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;

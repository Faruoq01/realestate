import React from 'react';
import './App.scss';
import Home from './screens/Home';
import About from './screens/AboutUs';
import ContactUs from './screens/ContactUs';
import Services from './screens/Services';
import Gallery from './screens/Gallery';
import FAQ from './screens/FAQ';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <React.Fragment>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/services' component={Services}/>
          <Route path='/contact' component={ContactUs}/>
          <Route path='/gallery' component={Gallery}/>
          <Route path='/faq' component={FAQ}/>
          <Route render = {() => <h1>404 page not found</h1>} />
        </Switch>
      </React.Fragment>
    </Router>
  );
}

export default App;

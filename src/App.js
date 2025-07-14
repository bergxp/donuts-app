import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Testemonial from './Components/Testemonial';
import Work from './Components/Work';
import React, { useEffect } from 'react';

import ReactPixel from 'react-facebook-pixel';


function App() {
useEffect(() => {
  ReactPixel.init('1103551258322995', {}, { autoConfig: true, debug: true });
  ReactPixel.pageView();
}, []);

  return (
    <div className="App">
      <Home/>
      <About/>
      <Work/>
      <Testemonial/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

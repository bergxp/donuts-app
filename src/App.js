import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Testemonial from './Components/Testemonial';
import Work from './Components/Work';
import { useEffect } from 'react';
import { initFacebookPixel } from './pixel';
import { useLocation } from 'react-router-dom';
import ReactPixel from 'react-facebook-pixel';

function App() {
  const location = useLocation();
  useEffect(() => {
    initFacebookPixel();
  }, []);

  useEffect(() => {
    ReactPixel.pageView();
  }, [location]);
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

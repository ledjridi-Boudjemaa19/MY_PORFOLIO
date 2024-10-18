// App.js
import React from 'react';
import Navbar from './componemts/Navbar';
import Home from './componemts/Home';
import About from './componemts/About';
import Skills from './componemts/Skills';
import Modules from './componemts/Modules';
import Contact from './componemts/Contact';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';



function App() {
  return (
    <div className="App">
    <Navbar />
    <Home />
    <About />
    <Skills />
    <Modules />
    <Contact />
  </div>
  );
}

export default App;

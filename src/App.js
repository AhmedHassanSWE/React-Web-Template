import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css'

import Navbar from './Components/Navbar';
import Index from './Components/Index'

import Contact from './Components/Contact'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Route exact path='/' component={Index} />
        <Route path='/contact' component={Contact} />
      </BrowserRouter>
    </div>
  );
}

export default App;

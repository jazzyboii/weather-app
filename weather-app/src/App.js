import React from 'react';
import "./App.css";
import Homepage  from './Pages/Homepage.js';
import ShowcaseCardDemo from "/Users/davidvincent/Desktop/weather-app/weather-app/weather-app/src/ShowcaseCardDemo.js"
import Weatherpage  from '/Users/davidvincent/Desktop/weather-app/weather-app/weather-app/src/Pages/Weatherpage.js';
import {BrowserRouter as Router, Route,Routes} from "react-router-dom";
//import { styled } from '@mui/material/styles';
//style={{justifyContent: 'center'}}

function App() {
    return (
      <Router> 
        <Routes>
          <Route path="/" element={<ShowcaseCardDemo/>}/>
          <Route path="/Weatherpage" element={<Weatherpage/>}/> 
        </Routes>      
      </Router>
    );
}


export default App;




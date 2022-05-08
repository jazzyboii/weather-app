import React from 'react';
import {Grid} from '@mui/material';
import "./App.css";
import Address  from './Address';
import Header  from './Header';
import {BrowserRouter as Router, Route,Switch} from "react-router-dom";
//import { styled } from '@mui/material/styles';
//style={{justifyContent: 'center'}}

function App() {
    return (
      <>
       <Grid container 
        justify="center" 
        alignItems="center" 
        direction="column" 
        spacing={5}
        style={{marginBottom: "1em"}}
      >
        <Header/>
        <Address/>          
       </Grid>           
      </>
    );
}


export default App;




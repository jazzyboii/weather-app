import React from 'react';
import {Grid} from '@mui/material';
import Address  from '/Users/davidvincent/Desktop/weather-app/weather-app/weather-app/src/Address.js';
import Header  from '/Users/davidvincent/Desktop/weather-app/weather-app/weather-app/src/Header.js';


function WeatherPage() {
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


export default WeatherPage;
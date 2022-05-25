import React, { useEffect } from 'react';
import {Card,CardActions,CardContent,Button,Grid,AppBar,Typography,Toolbar,CssBaseline} from '@mui/material';
//import Carousel from 'react-bootstrap/Carousel'
//import Address  from '/Users/davidvincent/Desktop/weather-app/weather-app/weather-app/src/Address.js';
//import Header  from '/Users/davidvincent/Desktop/weather-app/weather-app/weather-app/src/Header.js';
import axios from 'axios';
import SimpleDateTime  from 'react-simple-timestamp-to-date';

function WeatherPage() {
  const [data, setData] = React.useState([]);
  useEffect(() => {
    axiosGet();
  }, []);

  const axiosGet = () => {
    axios.get("https://api.openweathermap.org/data/2.5/onecall?lat=38.0401&lon=-78.4851&exclude=minutely&appid=2e086449f3da526a434e08be786f79ac")
    .then(data => setData(data.data))
  }


    if(!data){
      return (
         <h1>Loading...</h1>
      );
    }else{
      return (
        <>
          <CssBaseline/>
            <AppBar position="sticky">
              <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Weather App
                </Typography>      
              </Toolbar>
            </AppBar>
            <main>
            </main>
        </>          
    );
    }

  //   <ul>
  //   <li>{data.lat}</li>
  //   <li>{data.lon}</li>
  //   <li>{data.timezone}</li>
  //   <li>{data.timezone_offset}</li>
  //   {data.hourly.map((item,key) => 
  //     <li key={key}>
  //       <SimpleDateTime dateFormat="MDY" dateSeparator="/"  timeSeparator=":">{item.dt}</SimpleDateTime>
  //     </li>
  //   )}
  // </ul>




}




export default WeatherPage;
import React, { useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {API_KEY, API_BASE_URL} from '../apis/config'
import CardLayout from "/Users/davidvincent/Desktop/weather-app/weather-app/weather-app/src/CardLayout.js";
import {Card,Divider,CardActions,CardContent,Button,Grid,Box,AppBar,Typography,Toolbar,CssBaseline} from '@mui/material';
//import Carousel from 'react-bootstrap/Carousel'
//import Address  from '/Users/davidvincent/Desktop/weather-app/weather-app/weather-app/src/Address.js';
//import Header  from '/Users/davidvincent/Desktop/weather-app/weather-app/weather-app/src/Header.js';
import axios from 'axios';
//mport { makeStyles } from '@material-ui/core/styles';
import SimpleDateTime  from 'react-simple-timestamp-to-date';

function WeatherPage() {
  const [data, setData] = React.useState([]);
  useEffect(() => {
    axiosGet();
  }, []);
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
        slidesToSlide: 3
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 720 },
        items: 3,
        slidesToSlide: 2
      },
      mobile: {
        breakpoint: { max: 720, min: 0 },
        items: 1,
        slidesToSlide: 1
      }
    };

    const bull = (
      <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
      >
        •
      </Box>
    );
    
  const axiosGet = () => {
    axios.get(`${API_BASE_URL}/data/2.5/onecall?lat=38.0401&lon=-78.4851&exclude=minutely&units=imperial&appid=${API_KEY}`)
    .then(data => setData(data.data))
  }


    if(!data.hourly){
      return (
         <h1>Loading...</h1>
      );
    }else{
      return (
        <>
          <CssBaseline/>
            <AppBar elevation={0} position="sticky">
              <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Weather App
                </Typography>      
              </Toolbar>
            </AppBar>
              <Carousel
                swipeable={true}
                draggable={true}
                showDots={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={false}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={0}
                containerClass="carousel-container"
                 
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                slidesToSlide={2}
                sliderClass=""            
              >     
                {data.hourly.map(({dt,temp,feels_like, main, weather}) => (
                  <div key={dt}>
                      <CardLayout
                        time={dt}
                        temp={temp}
                        feel={feels_like}
                        iconCode={weather[0].icon}
                        description={weather[0].description}
                      />
                  </div>
                ))} 
              </Carousel>  
              <Divider sx={{color:"blue"}}/>
                <Button variant="outlined" sx={{my: "10px", ml: "10px"}}>Current</Button>
                <Button variant="outlined" sx={{my: "10px", ml: "10px"}}>daily</Button>
                <Button variant="outlined" sx={{my: "10px", ml: "10px"}}>hourly</Button>
              <Divider/> 
              <Typography variant="h3" sx={{my: "10px"}} align="center">
                 News
              </Typography>      
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
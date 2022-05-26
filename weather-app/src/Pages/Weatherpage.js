import React, { useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
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
        breakpoint: { max: 1024, min: 464 },
        items: 3,
        slidesToSlide: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2,
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
              <Carousel
                swipeable={true}
                draggable={true}
                showDots={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                slidesToSlide={2}
                sliderClass=""            
              >
                <Card variant="outlined" sx={{ minWidth: 150,m: "1rem" }}>
                  <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Card Uno
                    </Typography>
                    <Typography variant="h5" component="div">
                      be{bull}nev{bull}o{bull}lent
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      adjective
                    </Typography>
                    <Typography variant="body2">
                      well meaning and kindly.
                      <br />
                      {'"a benevolent smile"'}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
                <Card variant="outlined" sx={{ minWidth: 150,m: "1rem" }}>
                  <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                      Card Dos
                    </Typography>
                    <Typography variant="h5" component="div">
                      be{bull}nev{bull}o{bull}lent
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      adjective
                    </Typography>
                    <Typography variant="body2">
                      well meaning and kindly.
                      <br />
                      {'"a benevolent smile"'}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
                <Card variant="outlined" sx={{ minWidth: 150,m: "1rem" }}>
                  <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                      Card Tres
                    </Typography>
                    <Typography variant="h5" component="div">
                      be{bull}nev{bull}o{bull}lent
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      adjective
                    </Typography>
                    <Typography variant="body2">
                      well meaning and kindly.
                      <br />
                      {'"a benevolent smile"'}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
                <Card variant="outlined" sx={{ minWidth: 150,m: "1rem" }}>
                  <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                      Card Cuatro
                    </Typography>
                    <Typography variant="h5" component="div">
                      be{bull}nev{bull}o{bull}lent
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      adjective
                    </Typography>
                    <Typography variant="body2">
                      well meaning and kindly.
                      <br />
                      {'"a benevolent smile"'}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Carousel>  
              <Divider/>
                <Button variant="outlined" sx={{my: "10px", ml: "10px"}}>Weekly</Button>
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
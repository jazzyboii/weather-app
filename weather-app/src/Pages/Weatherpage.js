import React from 'react';
import {Box,Card,CardActions,CardContent,Button,Grid,AppBar,Typography,Toolbar,CssBaseline} from '@mui/material';
import Address  from '/Users/davidvincent/Desktop/weather-app/weather-app/weather-app/src/Address.js';
import Header  from '/Users/davidvincent/Desktop/weather-app/weather-app/weather-app/src/Header.js';


function WeatherPage() {
    return (
      <>
       <CssBaseline/>
        <AppBar position="sticky">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Weather App
            </Typography>
            <Button color="inherit">New Questions</Button>       
          </Toolbar>
        </AppBar>
        <main>
          <Grid container>
            <Grid item xs={12} sm={6} md={4}>
              <Card  style={{marginBottom: "2em"}} variant="outlined">
                            <CardContent>
                            </CardContent>
                            <CardContent>       
                            </CardContent>
                            <CardActions >
                                <Button size="medium">Current Location</Button>
                            </CardActions>
              </Card> 
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card  style={{marginBottom: "2em"}} variant="outlined">
                            <CardContent>
                            </CardContent>
                            <CardContent>       
                            </CardContent>
                            <CardActions >
                                <Button size="medium">Current Location</Button>
                            </CardActions>
              </Card> 
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card  style={{marginBottom: "2em"}} variant="outlined">
                            <CardContent>
                            </CardContent>
                            <CardContent>       
                            </CardContent>
                            <CardActions >
                                <Button size="medium">Current Location</Button>
                            </CardActions>
              </Card> 
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card  style={{marginBottom: "2em"}} variant="outlined">
                            <CardContent>
                            </CardContent>
                            <CardContent>       
                            </CardContent>
                            <CardActions >
                                <Button size="medium">Current Location</Button>
                            </CardActions>
              </Card> 
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card  style={{marginBottom: "2em"}} variant="outlined">
                            <CardContent>
                            </CardContent>
                            <CardContent>       
                            </CardContent>
                            <CardActions >
                                <Button size="medium">Current Location</Button>
                            </CardActions>
              </Card> 
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card  style={{marginBottom: "2em"}} variant="outlined">
                            <CardContent>
                            </CardContent>
                            <CardContent>       
                            </CardContent>
                            <CardActions >
                                <Button size="medium">Current Location</Button>
                            </CardActions>
              </Card> 
            </Grid>          
          </Grid>          
        </main>
          
      </>          
    );
}


export default WeatherPage;
import React from "react";
import {Box,Card,CardActions,CardContent,Button,TextField,Grid} from '@mui/material';
//import {useHistory} from "react-router-dom";

class Address extends React.Component{
   constructor(props){
       super(props)
       this.state = {
           city: "",
           state: "",
           country: "",
           zipcode: "",
           currentLocation: false
       }
   }
   componentDidMount = () => {
       if(this.state.currentLocation){
            navigator.geolocation.getCurrentPosition(function(position) {
                console.log("Latitude is :", position.coords.latitude);
                console.log("Longitude is :", position.coords.longitude);
            });
       }else{
            this.setState({
                currentLocation: true
            });
       }
   } 
   
   submitLocation(){
        console.log(this.state.city + "," + this.state.state + "," + this.state.country + "," + this.state.zipcode)
   }

   render(){
        return (
            <>
                <Grid item style={{marginBottom: "2em"}} >
                    <Card sx={{ minWidth: 275 }} style={{marginBottom: "2em"}} variant="outlined">
                        <CardContent>
                            <TextField 
                                variant="outlined" 
                                label="City" 
                                fullWidth 
                                style={{marginBottom: "2em"}}
                                value={this.state.city}
                                onChange={(e) => this.setState({city : e.target.value})}
                            />  
                            <TextField 
                                variant="outlined" 
                                label="State" 
                                fullWidth
                                value={this.state.state}
                                onChange={(e) => this.setState({state : e.target.value})}
                            />
                        </CardContent>
                        <CardContent>
                            <TextField 
                                variant="outlined" 
                                label="Country" 
                                fullWidth
                                value={this.state.country}
                                onChange={(e) => this.setState({country : e.target.value})}
                            />        
                        </CardContent>
                        <CardActions >
                            <Button size="medium" onClick={this.componentDidMount}>Current Location</Button>
                        </CardActions>
                    </Card> 
                    <Card sx={{ minWidth: 275 }} variant="outlined">
                        <CardContent>
                            <TextField 
                                variant="outlined" 
                                label="Zipcode" 
                                fullWidth
                                value={this.state.zipcode}
                                onChange={(e) => this.setState({zipcode : e.target.value})} 
                            />
                        </CardContent>
                    </Card>
                </Grid>
                <Box textAlign='center'>
                    <Button variant='contained' onClick={() =>  {window.location.href='/Weatherpage';this.submitLocation()}}>
                        Submit
                    </Button>
                </Box> 
            </>
        );    
   }  
}; 




//import {useEffect,useState} from "react";

export default Address;
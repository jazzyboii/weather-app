import React from 'react';
import {Box,Card,CardActions,CardContent,Button,TextField,Typography,Grid,} from '@mui/material';
import "./App.css";
//import { styled } from '@mui/material/styles';
//style={{justifyContent: 'center'}}


function App(){
    return (
      <>
      </>
    );

}















function App1() {
    return (
      <>
       <Grid container 
        justify="center" 
        alignItems="center" 
        direction="column" 
        spacing={5}
        style={{marginBottom: "1em"}}
      >
        <Grid item>
          <Typography variant="h4" color="primary" style={{marginTop: "1em"}} >
            Weather app
          </Typography>
        </Grid>
        <Grid item >
          <Login/>
        </Grid>          
       </Grid>
       <Box textAlign='center'>
        <Button variant='contained'>
          Submit
        </Button>
       </Box>           
      </>
    );
}

const Login = () => {
  return (
    <>
      <Card sx={{ minWidth: 275 }} style={{marginBottom: "2em"}} variant="outlined">
        <CardContent>
          <TextField variant="outlined" label="City" fullWidth style={{marginBottom: "2em"}}/>  
           <TextField variant="outlined" label="State" fullWidth/>
        </CardContent>
        <CardContent>
          <TextField variant="outlined" label="Country" fullWidth/>        
        </CardContent>
        <CardActions >
          <Button size="medium">Current Location</Button>
        </CardActions>
      </Card> 
      <Card sx={{ minWidth: 275 }} variant="outlined">
      <CardContent>
        <TextField variant="outlined" label="Zipcode" fullWidth/>
      </CardContent>
      </Card>    
    </>
       
  );  
}

export default App1;




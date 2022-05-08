import React from 'react';
import {Typography,Grid} from '@mui/material';




class Header extends React.Component{
    render(){
        return (
            <>
                <Grid item>
                    <Typography variant="h4" color="primary" style={{marginTop: "1em"}} >
                        Weather app
                    </Typography>
                </Grid>
            </>
        );        
    }
}; 

export default Header;
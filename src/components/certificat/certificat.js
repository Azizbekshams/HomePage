import * as React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import { Box, Button, Col, Grid, Link, Paper } from '@mui/material';
import styled from '@emotion/styled';
import flat1 from "../../assets/img/certf1.png"

import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import GridViewIcon from '@mui/icons-material/GridView';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';



function Certifikat() {



  return (
    <Paper sx={{  backgroundColor:"#F9F9FA", boxShadow:"none", border:"none", borderRadius:"0" }}>
    <Container maxWidth='lg'>
    <Box sx={{ flexGrow: 1, marginTop:{md:"100px", xs:'10px'}, backgroundColor:"#F9F9FA", boxShadow:"none", border:"none", display:"flex", flexDirection:"column", justifyContent:"center" }}>
      
        <Typography variant="h2" sx={{color:"#213342", paddingTop:"50px", textAlign:"center",fontSize:"35px", fontWeight:"400", marginBottom:"50px"}}>Все сертификаты </Typography>


      <Grid container spacing={2}>

        <Grid item xs={12} md={3}  >
            
                <Card sx={{backgroundImage:`url("${flat1}")`, width:"270px", height:"360px", backgroundPosition:"center center", backgroundRepeat:"no-repeat", backgroundSize:"contain" }}>

                </Card>
              
             
            

        </Grid>

        <Grid item xs={12} md={3} sx={{display:{md:'block',xs:'none'},}} >
            
                <Card sx={{backgroundImage:`url("${flat1}")`, width:"270px", height:"360px", backgroundPosition:"center center", backgroundRepeat:"no-repeat", backgroundSize:"contain" }}>

                </Card>
              
             
            

        </Grid>
        <Grid item xs={12} md={3}sx={{display:{md:'block',xs:'none'},}} >
            
                <Card sx={{backgroundImage:`url("${flat1}")`, width:"270px", height:"360px", backgroundPosition:"center center", backgroundRepeat:"no-repeat", backgroundSize:"contain" }}>

                </Card>
              
             
            

        </Grid>
        <Grid item xs={12} md={3} sx={{display:{md:'block',xs:'none'},}}  >
            
                <Card sx={{backgroundImage:`url("${flat1}")`, width:"270px", height:"360px", backgroundPosition:"center center", backgroundRepeat:"no-repeat", backgroundSize:"contain" }}>

                </Card>
              
             
            

        </Grid>

      

      
     
       
      </Grid>
      <Button  variant="contained" color="warning" sx={{backgroundColor:"#E31F26",   margin:"20px auto"}}> 
      Все новости</Button>
    </Box>

    </Container>
      </Paper>
  )
}

export default Certifikat
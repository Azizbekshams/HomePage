import * as React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import { Box, Button, Col, Grid, Link, Paper } from '@mui/material';
import styled from '@emotion/styled';
import new1 from "../../assets/img/news1.png"
import new2 from "../../assets/img/new2.png"
import new3 from "../../assets/img/new3.png"
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import GridViewIcon from '@mui/icons-material/GridView';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';



function VideoCard() {



  return (
    <Paper sx={{  backgroundColor:"white", boxShadow:"none", border:"none", borderRadius:"0" }}>
    <Container maxWidth='lg'>
    <Box sx={{ flexGrow: 1, marginTop:{md:"100px", xs:'10px'}, backgroundColor:"white", boxShadow:"none", border:"none" , display:"flex", flexDirection:"column", justifyContent:"center"}}>
      
        <Typography variant="h2" sx={{color:"#213342", paddingTop:"50px", textAlign:"center",fontSize:"35px", fontWeight:"400", marginBottom:"50px"}}>Отзывы </Typography>


      <Grid container spacing={2}>

        <Grid item xs={12} md={4} sx={{"&:hover":{backgroundColor:"white",borderRadius:"10px", cursor:"pointer",boxShadow: "rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;"}}} >
            <Box> 
                <Card >
                <iframe width="360" height="270" src="https://www.youtube.com/embed/-_PgEOmzM08" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Card>
              
         
            
            </Box>

        </Grid>
        <Grid item xs={12} md={4} sx={{display:{md:'block',xs:'none'},"&:hover":{backgroundColor:"white",borderRadius:"10px", cursor:"pointer",boxShadow: "rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;"}}} >
            <Box> 
                <Card >
                <iframe width="360" height="270" src="https://www.youtube.com/embed/5KPCpDVeAnk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Card>
              
         
            
            </Box>

        </Grid>
        <Grid item xs={12} md={4} sx={{display:{md:'block',xs:'none'},"&:hover":{backgroundColor:"white",borderRadius:"10px", cursor:"pointer",boxShadow: "rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;"}}} >
            <Box> 
                <Card >
                <iframe width="360" height="270" src="https://www.youtube.com/embed/GTaMnjzScc8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Card>
              
         
            
            </Box>

        </Grid>
      
       
     
       
      </Grid>

      <Button  variant="contained" color="warning" sx={{backgroundColor:"#E31F26",   margin:"20px auto"}}> 
      Все отзывы</Button>
    </Box>

    </Container>
      </Paper>
  )
}

export default VideoCard
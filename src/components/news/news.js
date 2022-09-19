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



function News() {



  return (
    <Paper sx={{  backgroundColor:"white", boxShadow:"none", border:"none", borderRadius:"0" }}>
    <Container maxWidth='lg'>
    <Box sx={{ flexGrow: 1, marginTop:{md:"100px", xs:'10px'}, backgroundColor:"white", boxShadow:"none", border:"none" , display:"flex", flexDirection:"column", justifyContent:"center"}}>
      
        <Typography variant="h2" sx={{color:"#213342", paddingTop:"50px", textAlign:"center",fontSize:"35px", fontWeight:"400", marginBottom:"50px"}}>Последние новости </Typography>


      <Grid container spacing={2}>

        <Grid item xs={12} md={4} sx={{"&:hover":{backgroundColor:"white",borderRadius:"10px", cursor:"pointer",boxShadow: "rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;"}}} >

            <Box> 
                <Card sx={{backgroundImage:`url("${new1}")`, width:{md:"360px",xs:"260px"}, height:{md:"270px", xs:'190px'}, backgroundPosition:"center center", backgroundRepeat:"no-repeat", backgroundSize:"cover" }}>

                </Card>
              
              <CardContent>
               
                <Typography variant='h5' sx={{color:"#213342", display:"flex", flexDirection:"row", alignItems:"center",fontSize:{md:'24px', xs:'12px'}, fontWeight:"600"}}>

                Что происходило на рынке квартир Гродно в октябре

            </Typography>

            <Typography variant='h6' sx={{color:"#7798B5", display:"flex", flexDirection:"row", alignItems:"center"}}>

            19 ноя 2021

</Typography>

              </CardContent>
            
            </Box>

        </Grid>

        <Grid item xs={4} md={4} sx={{display:{md:'block',xs:'none'},"&:hover":{backgroundColor:"white",borderRadius:"10px", cursor:"pointer",boxShadow: "rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;"}}} >
            <Box> 
                <Card sx={{backgroundImage:`url("${new2}")`, width:"360px", height:"270px", backgroundPosition:"center center", backgroundRepeat:"no-repeat", backgroundSize:"cover" }}>

                </Card>
              
              <CardContent>
               
                <Typography variant='h5' sx={{color:"#213342", display:"flex", flexDirection:"row", alignItems:"center", fontWeight:"600"}}>

                Рекорды и итоги октября на рынке квартир

            </Typography>

            <Typography variant='h6' sx={{color:"#7798B5", display:"flex", flexDirection:"row", alignItems:"center"}}>

            16 ноя 2021

</Typography>

              </CardContent>
            
            </Box>

        </Grid>
        
        <Grid item xs={4} md={4} sx={{display:{md:'block',xs:'none'},"&:hover":{backgroundColor:"white",borderRadius:"10px", cursor:"pointer",boxShadow: "rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;"}}} >
            <Box> 
                <Card sx={{backgroundImage:`url("${new3}")`, width:"360px", height:"270px", backgroundPosition:"center center", backgroundRepeat:"no-repeat", backgroundSize:"cover" }}>

                </Card>
              
              <CardContent>
               
                <Typography variant='h5' sx={{color:"#213342", display:"flex", flexDirection:"row", alignItems:"center", fontWeight:"600"}}>

                Обзор рынка квартир в Гродно за Сентябрь 2021 года

            </Typography>

            <Typography variant='h6' sx={{color:"#7798B5", display:"flex", flexDirection:"row", alignItems:"center"}}>

            12 ноя 2021

</Typography>

              </CardContent>
            
            </Box>

        </Grid>

       
     
       
      </Grid>


      <Button  variant="contained" color="warning" sx={{backgroundColor:"#E31F26",   margin:"20px auto"}}> 
      Все новости</Button>
    </Box>

    </Container>
      </Paper>
  )
}

export default News
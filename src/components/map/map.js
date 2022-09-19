import * as React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import personal from "../../assets/img/map.png"
import mapicon from "../../assets/img/mapicon.png"
import { Container } from '@mui/system';
import CheckIcon from '@mui/icons-material/Check';
import { Box, Button, Link, Paper } from '@mui/material';

function Map() {
  return (

   <Paper sx={{display:"flex",marginTop:"100px",paddingTop:{md:"100px", xs:'10px'}, flexDirection:"row", boxShadow:"none", border:"none", backgroundColor:"#F9F9FA"}}>
    <Container maxWidth="lg">

     <Box sx={{display:"flex", flexDirection:{md:"row", xs:'column'}, boxShadow:"none", border:"none", justifyContent:"space-between"}}>

        <Box sx={{position:"relative"}}>

      <img className='pers1' style={{ borderRadius:'30px'}} src={personal} alt="" />    

      <Box sx={{position:"absolute", display:"flex", flexDirection:"column", alignItems:"center", top:{md:"30%", xs:'10%'}, right:"30%", backgroundColor:"rgba(255,255,255,0.7)", padding:{md:"30px", xs:'5px'}, width:{md:"375px", xs:'155px'}, textAlign:"center", borderRadius:"10px", }}>  
      <img className="mapicon" src={mapicon} alt="" />

      <Typography variant="h4" sx={{fontSize:{md:"30px" , xs:'14px'}}}> Поиск на карте  </Typography>
      <Typography variant="h6" sx={{fontSize:{md:"24px" , xs:'10px'}}}> Смотрите жилье рядом с парком,
работой или родственниками  </Typography>
<Button variant="contained" color="warning" sx={{backgroundColor:"#E31F26",fontSize:{md:"24px" , xs:'10px'} ,marginTop:"20px"}}> 
Найти на карте</Button>
 
      </Box>
        </Box>
 

         <CardContent sx={{marginLeft:"10px", marginTop:{md:'0',xs:'20px'},backgroundColor:"white",width:{md:"460px",xs:'230px'} ,borderRadius:"30px", padding:"30px 20px", display:"flex", flexDirection:"column", justifyContent:{md:"space-between", xs:'none'}}}>
 <Box> 
    <Typography variant='h5' sx={{color:"#213342", fontSize:"14px"}}> Квартиры</Typography>

<Box sx={{display:"flex",flexDirection:{md:"row", xs:'column'}, alignItems:{md:"center", xs:'left'}, justifyContent:{md:"space-between",xs:'none'}}}>
    <Box>
        <Typography variant='h6' sx={{color:"#7798B5", fontSize:"12px",marginTop:"10px"}}> 1-комнатные   <b style={{color:"#213342", marginLeft:"5px"}}> 43</b>  </Typography> 
        <Typography variant='h6' sx={{color:"#7798B5", fontSize:"12px",marginTop:"10px"}}> 2-комнатные  <b style={{color:"#213342", marginLeft:"5px"}}> 43</b> </Typography>
        <Typography variant='h6' sx={{color:"#7798B5", fontSize:"12px",marginTop:"10px"}}> 3-комнатные  <b style={{color:"#213342", marginLeft:"5px"}}> 43</b> </Typography>
        </Box>
    <Box sx={{display:{md:'block', xs:'none'}}}>
    <Typography variant='h6' sx={{color:"#7798B5", fontSize:"12px",marginTop:"10px"}}> 4-комнатные <b style={{color:"#213342", marginLeft:"5px"}}> 43</b> </Typography> 
        <Typography variant='h6' sx={{color:"#7798B5", fontSize:"12px",marginTop:"10px"}}> 5-комнатные <b style={{color:"#213342", marginLeft:"5px"}}> 43</b> </Typography>
        <Typography variant='h6' sx={{color:"#7798B5", fontSize:"12px",marginTop:"10px"}}> 6-комнатные <b style={{color:"#213342", marginLeft:"5px"}}> 43</b> </Typography>
        </Box>
</Box>
        
 </Box>
 <Box> 
    <Typography variant='h5' sx={{color:"#213342", marginTop:"30px", fontSize:"16px"}}> Дома и участки</Typography>

    <Typography variant='h6' sx={{color:"#7798B5", fontSize:"12px",marginTop:"10px"}}> Дома   <b style={{color:"#213342", marginLeft:"5px"}}> 26</b>  </Typography> 
        <Typography variant='h6' sx={{color:"#7798B5", fontSize:"12px",marginTop:"10px"}}> Участки  <b style={{color:"#213342", marginLeft:"5px"}}> 21</b> </Typography>
       
 </Box>
 <Box> 
    <Typography variant='h5' sx={{color:"#213342", marginTop:"30px", fontSize:"16px"}}> Коммерческая недвижимость</Typography>

    <Typography variant='h6' sx={{color:"#7798B5", fontSize:"12px",marginTop:"10px"}}> Продажа   <b style={{color:"#213342", marginLeft:"5px"}}> 32</b>  </Typography> 
        <Typography variant='h6' sx={{color:"#7798B5", fontSize:"12px",marginTop:"10px"}}> Аренда  <b style={{color:"#213342", marginLeft:"5px"}}> 41</b> </Typography>
       
 </Box>
        

       

        </CardContent>

       

       
     </Box>
    </Container>
   </Paper>
  )
}

export default Map
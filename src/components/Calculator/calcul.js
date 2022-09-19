import * as React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Box, Button, Link, Paper, TextField } from '@mui/material';
import build from '../../assets/img/3d-buildingsfon.png'
import { pink } from '@mui/material/colors';



function Calcul() {
  const [value, setValue] = React.useState('USD');
 const [selectedValue, setSelectedValue] = React.useState('a');


  const handleChange = (event) => {
    setValue(event.target.value);
    setSelectedValue(event.target.value)
  };
  
 



  return (
    <Paper sx={{backgroundColor:"#F9F9FA", paddingBottom:"50px", paddingTop:"10px", borderRadius:"none",boxShadow:"none"}}>

        <Container maxWidth="md" >
            <Box sx={{display:"flex", flexDirection:"column", alignItems:"center" , marginTop:"100px", backgroundColor:"#F9F9FA",}}>
<Typography variant="h3" sx={{fontSize:{md:"34px", xs:"23px", textAlign:"center"}}} >Калькулятор тарифов и услуг</Typography>
        <Typography variant="h4" sx={{fontSize:{md:"28px", xs:"16px", textAlign:"center", marginTop:"10px"}}} >рассчитайте стоимость наших услуг</Typography>

<Box sx={{borderRadius:{md:"30px", xs:"10px"}, backgroundColor:"#213342", width:{xs:"320px", md:"100%"}, height: {md:"240px", xs:"340px"}, marginTop:"50px", position: "relative"
}}>
    <img src={build} style={{  position:"absolute", top:"0", left:"0"}} alt="" />
    
<Box  sx={{paddingTop:"40px", display:"flex", flexDirection:{md:"row", xs:"column"}, justifyContent:"space-around",  }}>

<Box sx={{display:"flex", flexDirection:"column", alignItems:"center"}}>
  <Typography variant="h5" sx={{color:"white",zIndex:"2", fontFamily:"Montserrat", marginBottom:"20px" }}>Введите стоимость квартиры </Typography>

   <TextField sx={{ border:"1px solid white", width:{md:"450px", xs:"300px"}, borderRadius:"3px", backgroundColor:"white"}}  /> 

<FormControl >
     
      <RadioGroup sx={{display:"flex", flexDirection:"row"}}
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}

      >
        


        <FormControlLabel sx={{color:"white"}} value="USD" control={<Radio />} label="USD" />
        <FormControlLabel sx={{color:"white"}} value="BYR" control={<Radio />} label="BYR" />
      </RadioGroup>
    </FormControl>
 </Box>
   
   <Box >

   <Typography variant="h5" sx={{color:"white",zIndex:"2", fontFamily:"Montserrat",textAlign:"center", marginBottom:{md:"20px", xs:"5px"} }}>Стоимость услуг </Typography>

    <Box sx={{display:"flex", flexDirection:"row", alignItems:"center"}}>

      <TextField sx={{ border:"1px solid white", width:"90px", borderRadius:"3px",marginLeft:{md:"0", xs:"10px"},marginRight:{md:"30px", xs:"5px"}, "&::placeholder":{color:"white"} ,backgroundColor:"white"}} />
    <Typography variant="h6" sx={{color:"white",zIndex:"2", fontFamily:"Montserrat", marginBottom:"20px" }}>или </Typography>
   <TextField sx={{ border:"1px solid white",marginLeft:{md:"30px", xs:"5px"}, width:{md:"150px", xs:"160px"}, borderRadius:"3px", backgroundColor:"white"}} /></Box>
   </Box>
   

   

</Box>
<Button variant="contained" color="warning" sx={{backgroundColor:"#E31F26", position:'absolute', right:{md:"50px", xs:"35%"}, bottom:{md:"30px", xs:"15px"}}}>
Cвязаться
</Button>

 

</Box>
            </Box>
        
        </Container>
    </Paper>
  )
}

export default Calcul
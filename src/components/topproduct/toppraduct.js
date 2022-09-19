import * as React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import { Box, Button, Col, Grid, Link, Paper } from '@mui/material';
import styled from '@emotion/styled';
import flat1 from "../../assets/img/flat1.png"
import flat2 from "../../assets/img/flat2.png"
import flat3 from "../../assets/img/flat3.png"
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import GridViewIcon from '@mui/icons-material/GridView';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';

import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import analitik from '../../assets/img/analitiksvg.svg'



const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


const images = [
  {
    label: 'г. Волковыск, ул. Доватора, 3',
    label2: '3-комнатная квартира в Волковыске ',
    label3: 'Площадь: 55м2', 
    label4: 'г. Стоимость: 24900$ / 63948.',
    imgPath:`${flat1}`
  },
  {
    label: 'г. Волковыск, ул. Доватора, 3',
    label2: '6-комнатная квартира в Волковыске ',
    label3: 'Площадь: 55м2', 
    label4: 'г. Стоимость: 12900$ / 63948.',
    imgPath:`${flat2}`
  },
  {
    label: 'г. Волковыск, ул. Доватора, 3',
    label2: '3-комнатная квартира в Волковыске ',
    label3: 'Площадь: 65м2', 
    label4: 'г. Стоимость: 74900$ / 63948.',
    imgPath:`${flat3}`
  },
  {
    label: 'г. Волковыск, ул. Доватора, 3',
    label2: '1-комнатная квартира в Волковыске ',
    label3: 'Площадь: 34м2', 
    label4: 'г. Стоимость: 45900$ / 63948.',
    imgPath:`${flat2}`
  },
  
];


function Toppraduct() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };


  return (
    <Paper sx={{  backgroundColor:"#F9F9FA", boxShadow:"none", border:"none", borderRadius:"0" }}>

    <Container maxWidth='lg'>

    <Box sx={{ flexGrow: 1, marginTop:"100px", display:{xs:"none", md:"block"},backgroundColor:"#F9F9FA", boxShadow:"none", border:"none" }}>
      
        <Typography variant="h2" sx={{color:"#213342", paddingTop:"50px", textAlign:"center",fontSize:"35px", fontWeight:"400", marginBottom:"50px"}}>Лучшие предложения месяца </Typography>


      <Grid container spacing={2}>
        <Grid item xs={4} md={4} sx={{"&:hover":{backgroundColor:"white",borderRadius:"10px", cursor:"pointer",boxShadow: "rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;"}}} >
            <Box> 
                <Card sx={{backgroundImage:`url("${flat1}")`, width:"360px", height:"270px", backgroundPosition:"center center", backgroundRepeat:"no-repeat", backgroundSize:"cover" }}>

                </Card>
              
              <CardContent>
                <Typography variant='h6' sx={{color:"#7798B5", display:"flex", flexDirection:"row", alignItems:"center"}}>

            <LocationOnOutlinedIcon/>  г. Волковыск, ул. Доватора, 3

            </Typography>

                <Typography variant='h5' sx={{color:"#213342", display:"flex", flexDirection:"row", alignItems:"center", fontWeight:"600"}}>

             2-комнатная квартира в Волковыске 

            </Typography>

                <Typography variant='h6' sx={{color:"#213342", display:"flex", flexDirection:"row", alignItems:"center", fontWeight:"400"}}>

             <GridViewIcon sx={{color:"red", marginRight:"10px"}} /> Площадь: 55м2

            </Typography>

                <Typography variant='h6' sx={{color:"#213342", display:"flex", flexDirection:"row", alignItems:"center", fontWeight:"400"}}>

             <PaidOutlinedIcon sx={{color:"red", marginRight:"10px"}} /> Стоимость: 24900$ / 63948.18р.

            </Typography>

              </CardContent>
            
            </Box>

        </Grid>

        <Grid item xs={4} md={4} sx={{"&:hover":{backgroundColor:"white",borderRadius:"10px", cursor:"pointer",boxShadow: "rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;"}}} >
            <Box> 
                <Card sx={{backgroundImage:`url("${flat3}")`, width:"360px", height:"270px", backgroundPosition:"center center", backgroundRepeat:"no-repeat", backgroundSize:"cover" }}>

                </Card>
              
              <CardContent>
                <Typography variant='h6' sx={{color:"#7798B5", display:"flex", flexDirection:"row", alignItems:"center"}}>

            <LocationOnOutlinedIcon/>  г. Волковыск, ул. Доватора, 3

            </Typography>

                <Typography variant='h5' sx={{color:"#213342", display:"flex", flexDirection:"row", alignItems:"center", fontWeight:"600"}}>

             2-комнатная квартира в Волковыске 

            </Typography>

                <Typography variant='h6' sx={{color:"#213342", display:"flex", flexDirection:"row", alignItems:"center", fontWeight:"400"}}>

             <GridViewIcon sx={{color:"red", marginRight:"10px"}} /> Площадь: 55м2

            </Typography>

                <Typography variant='h6' sx={{color:"#213342", display:"flex", flexDirection:"row", alignItems:"center", fontWeight:"400"}}>

             <PaidOutlinedIcon sx={{color:"red", marginRight:"10px"}} /> Стоимость: 24900$ / 63948.18р.

            </Typography>

              </CardContent>
            
            </Box>
          

        </Grid>

        <Grid item xs={4} md={4} sx={{"&:hover":{backgroundColor:"white",borderRadius:"10px", cursor:"pointer",boxShadow: "rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;"}}} >
            <Box> 
                <Card sx={{backgroundImage:`url("${flat1}")`, width:"360px", height:"270px", backgroundPosition:"center center", backgroundRepeat:"no-repeat", backgroundSize:"cover" }}>

                </Card>
              
              <CardContent>
                <Typography variant='h6' sx={{color:"#7798B5", display:"flex", flexDirection:"row", alignItems:"center"}}>

            <LocationOnOutlinedIcon/>  г. Волковыск, ул. Доватора, 3

            </Typography>

                <Typography variant='h5' sx={{color:"#213342", display:"flex", flexDirection:"row", alignItems:"center", fontWeight:"600"}}>

             2-комнатная квартира в Волковыске 

            </Typography>

                <Typography variant='h6' sx={{color:"#213342", display:"flex", flexDirection:"row", alignItems:"center", fontWeight:"400"}}>

             <GridViewIcon sx={{color:"red", marginRight:"10px"}} /> Площадь: 55м2

            </Typography>

                <Typography variant='h6' sx={{color:"#213342", display:"flex", flexDirection:"row", alignItems:"center", fontWeight:"400"}}>

             <PaidOutlinedIcon sx={{color:"red", marginRight:"10px"}} /> Стоимость: 24900$ / 63948.18р.

            </Typography>

              </CardContent>
            
            </Box>
          

        </Grid>
     
       
      </Grid>
    </Box>

    <Typography variant="h3" sx={{color:"#213342", paddingTop:"50px",display:{md:"none",xs:"flex"}, textAlign:"center",fontSize:{md:"35px", xs:'22px'}, fontWeight:"400", marginBottom:"50px"}}>Лучшие предложения месяца </Typography>


<Box sx={{ maxWidth: 400, flexGrow: 1, display:{md:"none", xs:"block"} }}>
 
 <AutoPlaySwipeableViews
    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
    index={activeStep}
    onChangeIndex={handleStepChange}
    enableMouseEvents
  >
    {images.map((step, index) => (
      <div key={step.label}>
        {Math.abs(activeStep - index) <= 2 ? (
          <Box
            component="img"
            sx={{
              height: 255,
              display: 'block',
              maxWidth: 400,
              overflow: 'hidden',
              width: '100%',
            }}
            src={step.imgPath}
            alt={step.label}
          />
        ) : null}
      </div>
    ))}
  </AutoPlaySwipeableViews>

  <Paper
    square
    elevation={0}
    sx={{
      display: 'flex',
      flexDirection:"column",
      alignItems: 'left',
      paddingTop:"20px",
      height: 150,
      pl: 2,
      bgcolor: 'background.default',
    }}
  >

      <Typography>{images[activeStep].label}</Typography>
     <Typography variant='h6' sx={{color:"#7798B5", display:"flex", flexDirection:"row", alignItems:"center"}}>

<LocationOnOutlinedIcon/>  {images[activeStep].label2}
</Typography>

<Typography variant='h6' sx={{color:"#213342", display:"flex", flexDirection:"row", alignItems:"center", fontWeight:"400"}}>

         <GridViewIcon sx={{color:"red", marginRight:"10px"}} />{images[activeStep].label3}

        </Typography>

<Typography variant='h6' sx={{color:"#213342", display:"flex", flexDirection:"row", alignItems:"center", fontWeight:"400"}}>

<PaidOutlinedIcon sx={{color:"red", marginRight:"10px"}} />  {images[activeStep].label4}

</Typography>
  
  </Paper>
  
  

  <MobileStepper
  sx={{marginTop:"10px", background:"none"}}
    steps={maxSteps}
    position="static"
    activeStep={activeStep}
    nextButton={
      <Button
        size="small"
        onClick={handleNext}
        disabled={activeStep === maxSteps - 1}
      >
       
        {theme.direction === 'rtl' ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </Button>
    }
    backButton={
      <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
        {theme.direction === 'rtl' ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      
      </Button>
    }
  />
</Box>




    </Container>
      </Paper>
  )
}

export default Toppraduct
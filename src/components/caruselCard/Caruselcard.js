

import React from 'react'
import { Button, Card, Container, Grid, Paper, Typography } from '@mui/material';
import Carousel from 'react-grid-carousel'
import backfon from '../../assets/img/fonback20.png'
import user1 from '../../assets/img/Фото1.png'
import user2 from '../../assets/img/Фото2.png'
import user3 from '../../assets/img/Фото3.png'
import user4 from '../../assets/img/Фото4.png'


// backgroundImage:`url:('${backfon}')`, backgroundSize:"cover"

function Caruselcard() {

  
 
  return (
    
    <Paper sx={{marginTop:{md:"200px" , xs:'0'},paddingTop:{md:"100px", xs:'0'} ,borderRadius:"0", border:'0', boxShadow:"0",backgroundColor:"#213342", width:"100%", height:{md:"621px", xs:"321px"},display:{md:'block', xs:"none"}, position:"relative" }}>

<img src={backfon} style={{position:"absolute", width:"100%",height:"100%", top:"0",right:"0"}} alt="" />

    <Container maxWidth="xl" >

<Grid container sx={{display:"flex", flexDirection:"column", alignItems:{md:"center", },}}  >

 <Typography variant="h3" sx={{color:"white", marginBottom:{md:"100px", xs:'-200px'}}}> Специалисты компании «Магазин недвижимости»</Typography>

<Carousel  cols={4} xs={2} rows={1} gap={0}  loop>

      <Carousel.Item >

        <Grid sx={{backgroundColor:"white", padding:"20px",borderRadius:"10px", height:"338px", width:"260px"}}>

          <Card sx={{ width:"220px", height:"220px"}} >
            <img src={user1} alt="" />
             </Card>

          <Typography  variant='h5' sx={{color:"#213342",fontWeight:"600", textAlign:"center", marginTop:"10px"}}> Владимир Пыльский</Typography>
          <Typography variant='h6' sx={{color:"#7798B5", textAlign:"center",fontWeight:"400"}}> Директор по операциям
с недвижимостью</Typography>
        </Grid>
        
      </Carousel.Item>

      <Carousel.Item>

        <Grid sx={{backgroundColor:"white", padding:"20px",borderRadius:"10px",height:"338px", width:"260px"}}>

          <Card sx={{ width:"220px", height:"220px"}} >
            <img src={user2} alt="" />
             </Card>

          <Typography  variant='h5' sx={{color:"#213342",fontWeight:"600", textAlign:"center", marginTop:"10px"}}> Елена Пыльская</Typography>
          <Typography variant='h6' sx={{color:"#7798B5", textAlign:"center",fontWeight:"400"}}> Агент по операциям
с недвижимостью</Typography>
        </Grid>
        
      </Carousel.Item>

      <Carousel.Item>

        <Grid sx={{backgroundColor:"white", padding:"20px",borderRadius:"10px",height:"338px", width:"260px"}}>

          <Card sx={{ width:"220px", height:"220px"}} >
            <img src={user3} alt="" />
             </Card>

          <Typography  variant='h5' sx={{color:"#213342",fontWeight:"600", textAlign:"center", marginTop:"10px"}}> Евгения Савельева</Typography>
          <Typography variant='h6' sx={{color:"#7798B5", textAlign:"center",fontWeight:"400"}}> Агент по операциям
с недвижимостью</Typography>
        </Grid>
        
      </Carousel.Item>

      <Carousel.Item>

        <Grid sx={{backgroundColor:"white", padding:"20px",borderRadius:"10px",height:"338px", width:"260px"}}>

          <Card sx={{ width:"220px", height:"220px"}} >
            <img src={user4} alt="" />
             </Card>

          <Typography  variant='h5' sx={{color:"#213342",fontWeight:"600", textAlign:"center", marginTop:"10px"}}> Игорь Буров</Typography>
          <Typography variant='h6' sx={{color:"#7798B5", textAlign:"center",fontWeight:"400"}}> Агент по операциям с недвижимостью</Typography>
        </Grid>
        
      </Carousel.Item>
      
      <Carousel.Item>

        <Grid sx={{backgroundColor:"white", padding:"20px",borderRadius:"10px",height:"338px", width:"260px"}}>

          <Card sx={{ width:"220px", height:"220px"}} >
            <img src={user4} alt="" />
             </Card>

          <Typography  variant='h5' sx={{color:"#213342",fontWeight:"600", textAlign:"center", marginTop:"10px"}}> Игорь Буров</Typography>
          <Typography variant='h6' sx={{color:"#7798B5", textAlign:"center",fontWeight:"400"}}> Агент по операциям с недвижимостью</Typography>
        </Grid>
        
      </Carousel.Item>
      <Carousel.Item >

        <Grid sx={{backgroundColor:"white", padding:"20px",borderRadius:"10px", height:"338px", width:"260px"}}>

          <Card sx={{ width:"220px", height:"220px"}} >
            <img src={user1} alt="" />
             </Card>

          <Typography  variant='h5' sx={{color:"#213342",fontWeight:"600", textAlign:"center", marginTop:"10px"}}> Владимир Пыльский</Typography>
          <Typography variant='h6' sx={{color:"#7798B5", textAlign:"center",fontWeight:"400"}}> Директор по операциям
с недвижимостью</Typography>
        </Grid>
        
      </Carousel.Item>

      <Carousel.Item>

        <Grid sx={{backgroundColor:"white", padding:"20px",borderRadius:"10px",height:"338px", width:"260px"}}>

          <Card sx={{ width:"220px", height:"220px"}} >
            <img src={user2} alt="" />
             </Card>

          <Typography  variant='h5' sx={{color:"#213342",fontWeight:"600", textAlign:"center", marginTop:"10px"}}> Елена Пыльская</Typography>
          <Typography variant='h6' sx={{color:"#7798B5", textAlign:"center",fontWeight:"400"}}> Агент по операциям
с недвижимостью</Typography>
        </Grid>
        
      </Carousel.Item>

      <Carousel.Item>

        <Grid sx={{backgroundColor:"white", padding:"20px",borderRadius:"10px",height:"338px", width:"260px"}}>

          <Card sx={{ width:"220px", height:"220px"}} >
            <img src={user3} alt="" />
             </Card>

          <Typography  variant='h5' sx={{color:"#213342",fontWeight:"600", textAlign:"center", marginTop:"10px"}}> Евгения Савельева</Typography>
          <Typography variant='h6' sx={{color:"#7798B5", textAlign:"center",fontWeight:"400"}}> Агент по операциям
с недвижимостью</Typography>
        </Grid>
        
      </Carousel.Item>
    

   


    </Carousel>

<Button variant="contained" color="warning" sx={{color:"white", backgroundColor:"#E31F26", marginTop:"50px"}}>Все специалисты </Button>
</Grid>
    </Container>
    </Paper>
  )
}

export default Caruselcard
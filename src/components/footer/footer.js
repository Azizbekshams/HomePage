import { Container, Grid, Paper, Typography, Box } from '@mui/material'
import React from 'react'
import Logo from '../../assets/img/Logo1.svg'
import vk from '../../assets/img/vkicon.png'
import youtube from '../../assets/img/youtubeicon.png'
import face from '../../assets/img/facebookicon.png'
import inst from '../../assets/img/instgraicon.png'

function Footer() {
  return (
    <Paper sx={{backgroundColor:"#213342", borderRadius:"none" , width:"100%", marginTop:"100px",  paddingTop:"50px"}}>
        <Container maxWidth="lg">
            <Grid container spacing={2} sx={{paddingBottom:"50px"}}>
                <Grid item xs={12} md={3} sx={{display:"flex", flexDirection:"column", justifyContent:"space-between", alignItems:'center', textAlign:'center'}}>
               <img src={Logo} style={{width:"176px",marginTop:"10px", height:"50px"}} alt="" />
               <Typography sx={{color:"white",marginTop:"10px"}}>ООО «Магазин недвижимости»</Typography>
               <Typography sx={{color:"white",marginTop:"10px"}}>УНП 124764878</Typography>
               <Box sx={{display:"flex",marginTop:"10px", flexDirection:"row",}}>
                <img style={{marginRight:"10px"}}   src={vk} alt="" />
                <img style={{marginRight:"10px"}}   src={inst} alt="" />
                <img style={{marginRight:"10px"}}   src={youtube} alt="" />
                <img  style={{marginRight:"10px"}}  src={face} alt="" />
               </Box>
               <Typography sx={{color:"white",marginTop:"10px", textDecoration:"underline"}}>Реквизиты</Typography>

                </Grid>
                <Grid item xs={12} md={3} sx={{display:"flex", flexDirection:"column", justifyContent:"space-between", alignItems:'center', textAlign:'center'}}>

               <Typography variant="h5" sx={{color:"white",marginTop:"10px"}}>г. Гродно</Typography>
               <Typography  variant="h6" sx={{color:"white",marginTop:"5px", fontSize:"12px", fontFamily:"Montserrat", fontWeight:"400xp"}}>+375 (152) 68-76-76</Typography>
               <Typography  variant="h6" sx={{color:"white",marginTop:"5px", fontSize:"12px", fontFamily:"Montserrat", fontWeight:"400xp"}}>+375 (152) 68-76-76</Typography>
               <Typography  variant="h6" sx={{color:"white",marginTop:"5px", fontSize:"12px", fontFamily:"Montserrat", fontWeight:"400xp"}}>230023, г. Гродно, Беларусь,
ул. Тимирязева, д. 10/1,
офис 4 (БЦ "Августовский")</Typography>
              

                </Grid>
                <Grid item xs={12} md={3} sx={{display:"flex", flexDirection:"column", justifyContent:"space-between", alignItems:'center', textAlign:'center'}}>

               <Typography variant="h5" sx={{color:"white",marginTop:"10px"}}>г. Гродно</Typography>
               <Typography  variant="h6" sx={{color:"white",marginTop:"5px", fontSize:"12px", fontFamily:"Montserrat", fontWeight:"400xp"}}>+375 (152) 68-76-76</Typography>
               <Typography  variant="h6" sx={{color:"white",marginTop:"5px", fontSize:"12px", fontFamily:"Montserrat", fontWeight:"400xp"}}>+375 (152) 68-76-76</Typography>
               <Typography  variant="h6" sx={{color:"white",marginTop:"5px", fontSize:"12px", fontFamily:"Montserrat", fontWeight:"400xp"}}>230023, г. Гродно, Беларусь,
ул. Тимирязева, д. 10/1,
офис 4 (БЦ "Августовский")</Typography>
              

                </Grid>
                <Grid item xs={12} md={3} sx={{display:"flex", flexDirection:"column", justifyContent:"space-between", alignItems:'center', textAlign:'center'}}>

               <Typography variant="h5" sx={{color:"white",marginTop:"10px"}}>г. Гродно</Typography>
               <Typography  variant="h6" sx={{color:"white",marginTop:"5px", fontSize:"12px", fontFamily:"Montserrat", fontWeight:"400xp"}}>+375 (152) 68-76-76</Typography>
               <Typography  variant="h6" sx={{color:"white",marginTop:"5px", fontSize:"12px", fontFamily:"Montserrat", fontWeight:"400xp"}}>+375 (152) 68-76-76</Typography>
               <Typography  variant="h6" sx={{color:"white",marginTop:"5px", fontSize:"12px", fontFamily:"Montserrat", fontWeight:"400xp"}}>230023, г. Гродно, Беларусь,
ул. Тимирязева, д. 10/1,
офис 4 (БЦ "Августовский")</Typography>
              

                </Grid>
               
            </Grid>
        </Container>
    </Paper>
  )
}

export default Footer
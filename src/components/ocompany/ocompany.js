import * as React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import personal from "../../assets/img/companyiconred.png"
import { Container } from '@mui/system';
import CheckIcon from '@mui/icons-material/Check';
import { Box, Button, Link, Paper } from '@mui/material';

function Ocomapany() {
  return (

   <Paper sx={{display:"flex",marginTop:"100px", flexDirection:"row", boxShadow:"none", border:"none"}}>

    <Container maxWidth="lg">

     <Box sx={{display:"flex", flexDirection:{md:"row", xs:"column-reverse"}, boxShadow:"none", border:"none", justifyContent:"space-between", alignItems:"center"}}>

         <CardContent sx={{marginLeft:{md:"20px", xs:"0"}, backgroundColor:"#F9F9FA",width:{md:"640px",xs:"100%"}, borderRadius:"30px", padding:"60px 30px"}}>

        <Typography variant='h4' sx={{color:"#213342"}}> О компании
</Typography>

        <Typography variant='h5' sx={{color:"#213342", marginTop:"20px", fontSize:{md:"20px", xs:"14px"}}}> «Магазин недвижимости» – риэлтерское агентство в Гродно
и Гродненской области. Мы сопровождаем клиента от мысли о купле-продаже недвижимости до юридически грамотной
и успешной сделки. Специализируемся на продаже, покупкеи обмене квартир, домов и коммерческой недвижимости, осуществляем юридическое сопровождение сделок, помогаем с оценкой и аналитикой, выгодным инвестированием, переводом квартир в нежилой фонд
и другими услугами</Typography>

       
<Button variant="contained" color="warning" sx={{backgroundColor:"#E31F26", marginTop:"54px"}}> 
Подробнее</Button>

        </CardContent>

        <img  style={{ borderRadius:'30px',}} src={personal} className='pers' alt="" />

       
     </Box>
    </Container>
   </Paper>
  )
}

export default Ocomapany
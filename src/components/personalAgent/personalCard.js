import * as React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import personal from "../../assets/img/golos.png"
import { Container } from '@mui/system';
import CheckIcon from '@mui/icons-material/Check';
import { Box, Button, Link, Paper } from '@mui/material';


function PersonalCard() {
  return (
   <Paper sx={{marginTop:{md:"100px", xs:'100px'}, flexDirection:"row", boxShadow:"none", border:"none"}}>
    <Container maxWidth="lg">

     <Box sx={{display:"flex", flexDirection:{md:"row", xs:'column'}, boxShadow:"none", border:"none"}}>
        <img className='cardper' style={{ borderRadius:'30px'}} src={personal} alt="" />

        <CardContent xs={12}  sx={{marginLeft:{md:"20px", xs:'5px'}, backgroundColor:"#F9F9FA", borderRadius:"30px", padding:{md:"60px 30px", xs:'10px 5px'}}}>
        <Typography variant='h4' sx={{color:"#213342"}}> Ваш персональный агент
по недвижимости</Typography>
        <Typography variant='h5' sx={{color:"#213342", marginTop:"20px"}}> Голось Эдуард Марьянович</Typography>

        <Typography variant='h6' sx={{color:"#213342", marginTop:"20px"}}><CheckIcon sx={{color:"red", fontWeight:"400"}}/> Уже 17 лет в волковысской недвижимости;
</Typography>
        <Typography variant='h6' sx={{color:"#213342", marginTop:"10px"}}><CheckIcon sx={{color:"red", fontWeight:"400"}}/> Более 1000 сделок;
</Typography>
        <Typography variant='h6' sx={{color:"#213342", marginTop:"10px"}}><CheckIcon sx={{color:"red", fontWeight:"400"}}/> Самый дорогой объект продал за 350 000$;

</Typography>
        <Typography variant='h6' sx={{color:"#213342", marginTop:"10px"}}><CheckIcon sx={{color:"red", fontWeight:"400"}}/> Самая длинная цепочка сделок – 5 объектов;
</Typography>
        <Typography variant='h6' sx={{color:"#213342", marginTop:"10px"}}><CheckIcon sx={{color:"red", fontWeight:"400"}}/> Самую быструю сделку провел за 1 час 20 минут;
</Typography>
        <Typography variant='h6' sx={{color:"#213342", marginTop:"10px"}}><CheckIcon sx={{color:"red", fontWeight:"400"}}/> Живет в Волковыске с 1961 года – любит свой город и знает его «как свои пять пальцев»;
</Typography>
        <Typography variant='h6' sx={{color:"#213342", marginTop:"10px"}}><CheckIcon sx={{color:"red", fontWeight:"400"}}/> Служил в морской авиации военно-морского флота. Награжден правительствами 4 стран. Раньше защищал страну, а теперь клиентов от невыгодных сделок;
</Typography>
        <Typography variant='h6' sx={{color:"#213342", marginTop:"10px"}}><CheckIcon sx={{color:"red", fontWeight:"400"}}/> Главное в жизни – семья. Женат. Дочь
</Typography>

<Button variant="contained" color="warning" sx={{backgroundColor:"#E31F26", marginTop:"54px"}}> 
Задать вопрос эксперту</Button>
        </CardContent>
     </Box>
    </Container>
   </Paper>
  )
}

export default PersonalCard
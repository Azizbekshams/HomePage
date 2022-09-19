import * as React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

import img1 from '../../assets/img/Баннер2.png'
import img2 from '../../assets/img/MaskGroup1.png'
import { Container } from '@mui/system';
import vek from "../../assets/img/Vector.png"
import { Box, Button, Link, Paper, TextField } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MapIcon from '@mui/icons-material/Map';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import ZoomInIcon from '@mui/icons-material/ZoomIn';
import SelectUnstyled, { selectUnstyledClasses } from '@mui/base/SelectUnstyled';
import OptionUnstyled, { optionUnstyledClasses } from '@mui/base/OptionUnstyled';
import PopperUnstyled from '@mui/base/PopperUnstyled';
import { styled, alpha } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import Slider from '@mui/material/Slider';



const StyledMenu = styled((props) => (
  <Menu
  
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 250,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '10px 15px',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));



function valuetext(value) {
  return ( ` ${value} ${'$'} ' ` );
}




const blue = {
  100: '#DAECFF',
  200: '#99CCF3',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  900: '#003A75',
};

const grey = {
  50: '#f6f8fa',
  100: '#eaeef2',
  200: '#d0d7de',
  300: '#afb8c1',
  400: '#8c959f',
  500: '#6e7781',
  600: '#57606a',
  700: '#424a53',
  800: '#32383f',
  900: '#24292f',
};

const StyledButton = styled('button')(
  ({ theme }) => `
  font-family: Montserrat;
  font-size: 0.875rem;
  box-sizing: border-box;
  min-height: calc(1.5em + 22px);
  min-width: 200px;
  padding: 12px;
  border-radius: 10px;
  text-align: left;
  line-height: 1.5;
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;

  &:hover {
    background: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
    border-color: ${theme.palette.mode === 'dark' ? grey[600] : grey[300]};
  }

  &.${selectUnstyledClasses.focusVisible} {
    border-color: ${blue[400]};
    outline: 3px solid ${theme.palette.mode === 'dark' ? blue[500] : blue[200]};
  }

  &.${selectUnstyledClasses.expanded} {
    &::after {
      content: '▴';
    }
  }

  &::after {
    content: '▾';
    float: right;
  }
  `,
);

const StyledListbox = styled('ul')(
  ({ theme }) => `
  font-family: Montserrat;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 6px;
  margin: 12px 0;
  min-width: 200px;
  border-radius: 5px;
  overflow: auto;
  outline: 0px;
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  `,
);

const StyledOption = styled(OptionUnstyled)(
  ({ theme }) => `
  list-style: none;
  padding: 8px;
  border-radius: 8px;
  cursor: default;

  &:last-of-type {
    border-bottom: none;
  }

  &.${optionUnstyledClasses.selected} {
    background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};
    color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
  }

  &.${optionUnstyledClasses.highlighted} {
    background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  }

  &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
    background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};
    color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
  }

  &.${optionUnstyledClasses.disabled} {
    color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
  }

  &:hover:not(.${optionUnstyledClasses.disabled}) {
    background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  }
  `,
);

const StyledPopper = styled(PopperUnstyled)`
  z-index: 1;
`;

const CustomSelect = React.forwardRef(function CustomSelect(props, ref) {
  const components = {
    Root: StyledButton,
    Listbox: StyledListbox,
    Popper: StyledPopper,
    ...props.components,
  };
  

  return <SelectUnstyled {...props} ref={ref} components={components} />;
});




const Header =()=> {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const [value2, setValue2] = React.useState([20000, 37000]);


  const handleChange2 = (event, newValue2) => {
    setValue2(newValue2);
  };


  return (
    <>

   
    <div  className='headerBanner' style={{ backgroundImage:`url(${img1})` }}>

        {/* <Box sx={{display:{xs:'none', md:'flex',xl:'flex'}}}>
           <img className="vektr" src={vek} alt="" /> 
        </Box>
        */}
        
        <div className='hdrb'>
            
      <Container  maxWidth="lg"> 

     

    

      <Typography container variant="h2" sx={{fontSize:{xs:"30px", md:"60px"}, fontWeight:"700",color:"white",fontFamily:"Montserrat",textAlign:{xs:"center",md:"left"}, marginTop:{xs:"155px", md:"209px"},width:{xs:"280px", md:"700px"}}}>Поможем купить  
Вашу недвижимость
</Typography>

<Typography container variant="h6" sx={{fontSize:{xs:"20px", md:"40px"},textAlign:{xs:"center",md:"left"}, fontFamily:"Montserrat", fontWeight:"400",color:"white"}}>быстро, выгодно, безопасно
</Typography>


<Box sx={{display:"flex",marginTop:{md:"20", xs:"30px"}, flexDirection:{md:"row", xs:"column"}, alignItems:"center"}}>
<Button size="large"
          sx={{ color:"white",fontSize:{xs:"12px", md:"18px"}, fontFamily:"Montserrat" ,fontWeight:'400', marginRight:{md:"20px", xs:"0"},  backgroundColor:"#E31F26", boxShadow:"none"  }}
          variant="contained" color="warning"
        
      >

        Консультация

      </Button>
      <Typography   sx={{ display:{md:'flex', xs:"none"}, color:"white", fontFamily:"Montserrat",  fontWeight:'400', }} > или</Typography>
<Button
          sx={{ color:"white", fontFamily:"Montserrat",marginLeft:{md:"20px", xs:"0"},  fontWeight:'600', textDecoration:"underline" }}
          variant="text" 
        
      >

Бесплатная оценка

      </Button>

</Box>

    </Container>

        </div>


    </div> 
    
 

    <Container maxWidth="lg" sx={{ position:"relative",}} >

    <Paper sx={{backgroundColor:"#213342", color:"white", height:{md:"250px" , xs:"600px"},borderRadius:"10px", width:{md:"100%",xs:"90%"},  position:"absolute", top:{xs:"300px", md:"-35px"}, left:{md:"0",xs:"5%"}}}>

        

      <Box sx={{ maxWidth: { xs: 130, sm: 480 }, marginLeft:"80px"  }}>
      <Tabs
        
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="true"
        aria-label=""
       
      >
        <Tab   sx={{color:"white" , 
      fontWeight:"600",marginRight:{xs:"50px", md:"0px"}, }} label="Квартиры" />

        <Tab sx={{color:"white" ,
      fontWeight:"600"}}label="Дома и участки" />

        <Tab sx={{color:"white" ,marginLeft:{xs:"20px", md:"0px"},
      fontWeight:"600"}}label="Коммерческая" />
      
      </Tabs>
    </Box>



<Box sx={{ margin:"35px 30px", padding:"14px 20px", borderRadius:"10px", display:"flex", flexDirection:{md:"row", xs:"column"}, alignItems:"center", justifyContent:"space-between"}}>

<CustomSelect sx={{marginBottom:"10px"}} defaultValue={10}>
      <StyledOption value={10}>Купить</StyledOption>
      <StyledOption value={20}>Twenty</StyledOption>
      <StyledOption value={30}>Thirty</StyledOption>
    </CustomSelect>
<CustomSelect sx={{marginBottom:"10px"}} defaultValue={10}>
      <StyledOption value={10}>Кол</StyledOption>
      <StyledOption value={20}>Twenty</StyledOption>
      <StyledOption value={30}>Thirty</StyledOption>
    </CustomSelect>
<CustomSelect sx={{marginBottom:"10px"}} defaultValue={10}>
      <StyledOption value={10}>Вторичка</StyledOption>
      <StyledOption value={20}>Twenty</StyledOption>
      <StyledOption value={30}>Thirty</StyledOption>
    </CustomSelect>

    <div>
    
      <Button
      sx={{backgroundColor:"white", color:'#1D242A', "&:hover":{backgroundColor:'White', },marginBottom:'10px', minWidth:"200px", minHeight:"45px",fontSize:'0.875rem', borderRadius:'10px'}}
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        Цена
      </Button>

      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <Typography >Цена в долларах США </Typography>
      <Box><TextField type='number' placeholder='Цена от'/> <TextField placeholder='Цена до' type='number'/> </Box>
      <Box sx={{ width: 300 }}>
      <Slider
      sx={{color:'#E31F26'}}

        getAriaLabel={() => '$'}
        value={value2}
        onChange={handleChange2}
        min={0}
  max={100000}
  step={1000}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
    </Box>
       
      </StyledMenu>
    </div>

<CustomSelect sx={{marginBottom:"10px"}} defaultValue={10}>
      <StyledOption value={10}>Укажите город </StyledOption>
      <StyledOption value={20}>Twenty</StyledOption>
      <StyledOption value={30}>Thirty</StyledOption>
    </CustomSelect>






</Box>



<Box 
sx={{margin:"0px 30px",
display:"flex", 
flexDirection:{md:"row", xs:"column-reverse"}, 
alignItems:"center", 
justifyContent:"space-between" }}>

 <Box>
    <Button 
  sx={{color:"white",borderRadius:"10px", border:"1px solid white",fontWeight:"400",width:{ xs:"200px"}, height:{ xs:"43px"},marginBottom:"20px" }} startIcon={<ZoomInIcon/>} variant="outlined">Расширенный поиск</Button></Box>

 <Box sx={{display:"flex", flexDirection:{md:"row", xs:"column"}}}>

   <Button startIcon={<MapIcon/>} 
   sx={{color:"white", marginRight:"10px",marginBottom:{xs:"20px"},borderRadius:"10px", border:"1px solid white", width:{ xs:"200px"}, height:{ xs:"43px"} }} variant="outlined">На карте</Button>


   <Button  sx={{backgroundColor:"#E31F26", width:{ xs:"200px"}, height:{ xs:"43px"},borderRadius:"10px",marginBottom:{xs:"20px"}, fontWeight:"400"}} variant="contained" color={'warning'}>Найти</Button>
    </Box>
 
</Box>






    </Paper>
    </Container> 
    
   
    
    </>
  )
}

export default Header
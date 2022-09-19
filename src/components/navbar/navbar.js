import * as React from 'react';
import {  MenuItem, Tooltip, Button,
        AppBar, Box, Toolbar, IconButton,Typography, Menu,
        Container,Modal  } from '@mui/material';

        import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
        import Link from '@mui/material/Link';

import telg1 from '../../assets/img/vkicon.png'
import telg2 from '../../assets/img/instgraicon.png'
import telg3 from '../../assets/img/youtubeicon.png'
import telg4 from '../../assets/img/vkicon.png'

import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../../assets/img/Logo1.svg'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import PhoneIcon from '@mui/icons-material/Phone';
import telegram from '../../assets/img/telegramicon.png'
import viber from '../../assets/img/vibericon.png'
import whatsap from '../../assets/img/whatsupicon.png'
import CloseIcon from '@mui/icons-material/Close';
import MailOutlineIcon from '@mui/icons-material/MailOutline';







const style = {
  position: 'absolute',
  top: '0',
  left: '0',
  width: "100%",
  bgcolor: '#213342',
  border: '0',
  px: 1,
 
};






const  Navbar=()=> {
  
  const [open1, setOpen1] = React.useState(false);
  const handleOpen = () => {
    setOpen1(true);
  };
  const handleClose1 = () => {
    setOpen1(false);
  };

    const [value, setValue] = React.useState(0);
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const [anchorEl11, setAnchorEl11] = React.useState(null);
    const open11 = Boolean(anchorEl11);
    const handleClick11 = (event) => {
      setAnchorEl11(event.currentTarget);
    };
    const handleClose11 = () => {
      setAnchorEl11(null);
    };

    
    const [anchorEl2, setAnchorEl2] = React.useState(null);
    const open2 = Boolean(anchorEl2);
    const handleClick2 = (event) => {
      setAnchorEl2(event.currentTarget);
    };
    const handleClose2 = () => {
      setAnchorEl2(null);
    };


    const [anchorEl3, setAnchorEl3] = React.useState(null);
    const open3 = Boolean(anchorEl3);
    const handleClick3 = (event) => {
      setAnchorEl3(event.currentTarget);
    };
    const handleClose3 = () => {
      setAnchorEl3(null);
    };


    const [anchorEl4, setAnchorEl4] = React.useState(null);
    const open4 = Boolean(anchorEl4);
    const handleClick4 = (event) => {
      setAnchorEl4(event.currentTarget);
    };
    const handleClose4 = () => {
      setAnchorEl4(null);
    };


    const [anchorEl5, setAnchorEl5] = React.useState(null);
    const open5 = Boolean(anchorEl5);
    const handleClick5 = (event) => {
      setAnchorEl5(event.currentTarget);
    };
    const handleClose5 = () => {
      setAnchorEl5(null);
    };






    return (
       <Container maxWidth="lg">

        <AppBar  sx={{ backgroundColor:"white", boxShadow:"none" }} color='default' position="static">
      
        <Toolbar disableGutters>

        

          <Typography
            variant="h6"
            noWrap

            component="a"
            href="/"
            sx={{
              
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
           
          <img src={Logo}/>
       
            
          </Typography>

{/* menu icon mobile */}

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}> 

            <IconButton 
              
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Modal
        hideBackdrop
        open={open1}
        onClose={handleClose1}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style,height:'100%',display:'flex', flexDirection:"column",  paddingBottom:"20px", alignItems:"center", justifyContent:"space-around" }}>
          
           <Box sx={{ display:'flex', flexDirection:"row", alignItems:"center", }}>  
          <Button  sx={{color:'white', marginRight:'35px', }} onClick={handleClose1} startIcon={<CloseIcon/>}></Button>
          <img src={Logo} width="106px" alt="" />
          <Button  sx={{color:'white',marginRight:'10px',marginLeft:"35px"}} startIcon={<PhoneIcon/>}> </Button>
</Box>


          <Box item sx={{ flexGrow: 0.5, ml:2,  display: { xs: 'flex', md: 'none' }, alignItems:'center', flexDirection:"column" }}>

       
          <Button
          sx={{ color:"#E31F26", fontWeight:'400',  }}
          variant="text"
        id="basic-button"
        endIcon={<KeyboardArrowDownIcon/>}
        startIcon={<FmdGoodIcon/>}
        aria-controls={open11 ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open11 ? 'true' : undefined}
        onClick={handleClick11}
        color="info"
      >
        Гродно 
      </Button>



      <Menu
        id="basic-menu"
        anchorEl={anchorEl11}
        open={open11}
        onClose={handleClose11}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose11}>Квартиры</MenuItem>
        <MenuItem onClick={handleClose11}>Дома и участки</MenuItem>
        <MenuItem onClick={handleClose11}>Коммерческая недвижимость</MenuItem>
        <MenuItem onClick={handleClose11}>На карте</MenuItem>
      </Menu>



          <Button
          sx={{ color:"white", fontWeight:'400',  }}
          variant="text"
        id="basic-button2"
        endIcon={<KeyboardArrowDownIcon/>}
        aria-controls={open2 ? 'basic-menu2' : undefined}
        aria-haspopup="true"
        aria-expanded={open2 ? 'true' : undefined}
        onClick={handleClick2}
        color="info"
      >
        Каталог 
      </Button>

      <Menu
      
        id="basic-menu2"
        anchorEl={anchorEl2}
        open={open2}
        onClose={handleClose2}
       
        MenuListProps={{
          'aria-labelledby': 'basic-button2',
        }}
      >
        <MenuItem  onClick={handleClose2}>Квартиры</MenuItem>
        <MenuItem onClick={handleClose2}>Дома и участки</MenuItem>
        <MenuItem onClick={handleClose2}>Коммерческая недвижимость</MenuItem>
        <MenuItem onClick={handleClose2}>На карте</MenuItem>
      </Menu>


          <Button
          sx={{ color:"white", fontWeight:'400',  }}
          variant="text"
        id="basic-button"
        endIcon={<KeyboardArrowDownIcon/>}
        aria-controls={open3 ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open3 ? 'true' : undefined}
        onClick={handleClick3}
        color="info"
      >
        Услуги 
      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl3}
        open={open3}
        onClose={handleClose3}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose3}>Квартиры</MenuItem>
        <MenuItem onClick={handleClose3}>Дома и участки</MenuItem>
        <MenuItem onClick={handleClose3}>Коммерческая недвижимость</MenuItem>
        <MenuItem onClick={handleClose3}>На карте</MenuItem>
      </Menu>


          <Button
          variant="text"
          sx={{ color:"white", fontWeight:'400',  }}
        id="basic-button"
        endIcon={<KeyboardArrowDownIcon/>}
        aria-controls={open4 ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open4 ? 'true' : undefined}
        onClick={handleClick4}
        color="info"
      >
        О нас 
      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl4}
        open={open4}
        onClose={handleClose4}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose4}>Квартиры</MenuItem>
        <MenuItem onClick={handleClose4}>Дома и участки</MenuItem>
        <MenuItem onClick={handleClose4}>Коммерческая недвижимость</MenuItem>
        <MenuItem onClick={handleClose4}>На карте</MenuItem>
      </Menu>

          <Button
          sx={{ color:"white", fontWeight:'400',  }}
          variant="text"
        id="basic-button"
        endIcon={<KeyboardArrowDownIcon/>}
        aria-controls={open5 ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open5 ? 'true' : undefined}
        onClick={handleClick5}
        color="info"
      >
        Блог
      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl5}
        open={open5}
        onClose={handleClose5}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose5}>Квартиры</MenuItem>
        <MenuItem onClick={handleClose5}>Дома и участки</MenuItem>
        <MenuItem onClick={handleClose5}>Коммерческая недвижимость</MenuItem>
        <MenuItem onClick={handleClose5}>На карте</MenuItem>
      </Menu>

      


          </Box> 


          <Box sx={{ display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
          <Button href='info@shoprealty.by' sx={{color:'white', fontFamily:'Montserrat'}} startIcon={<MailOutlineIcon/>} type="email"> info@shoprealty.by </Button>

          <Box > 
          <Button href='#' > <img src={telg1} alt="" /> </Button>
          <Button href='#' > <img src={telg2} alt="" /> </Button>
          <Button href='#' > <img src={telg3} alt="" /> </Button>
          <Button href='#' > <img src={telg4} alt="" /> </Button>

          </Box>
          <Button sx={{color:"white", textDecoration:'underline',fontFamily:'Montserrat'}}>Реквизиты</Button>

          </Box>
          

        </Box>

        
      </Modal>

          </Box>


     
          <Typography           
           variant="h6"
            noWrap
            component="a"
            href=""
            sx={{
              
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 400,
              textDecoration: 'none',
            }}
          >
            <img src={Logo} width="106px" alt="" />
          </Typography>


          <Box sx={{ flexGrow: 1, ml:2,  display: { xs: 'none', md: 'flex' }, alignItems:'center', justifyContent:'space-between' }}>


          <Button
          sx={{ color:"#E31F26", fontWeight:'400',  }}
          variant="text"
        id="basic-button"
        endIcon={<KeyboardArrowDownIcon/>}
        startIcon={<FmdGoodIcon/>}
        aria-controls={open11 ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open11 ? 'true' : undefined}
        onClick={handleClick11}
        color="info"
      >
        Гродно 
      </Button>



      <Menu
        id="basic-menu"
        anchorEl={anchorEl11}
        open={open11}
        onClose={handleClose11}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose11}>Квартиры</MenuItem>
        <MenuItem onClick={handleClose11}>Дома и участки</MenuItem>
        <MenuItem onClick={handleClose11}>Коммерческая недвижимость</MenuItem>
        <MenuItem onClick={handleClose11}>На карте</MenuItem>
      </Menu>



          <Button
          sx={{ color:"#213342", fontWeight:'400',  }}
          variant="text"
        id="basic-button2"
        endIcon={<KeyboardArrowDownIcon/>}
        aria-controls={open2 ? 'basic-menu2' : undefined}
        aria-haspopup="true"
        aria-expanded={open2 ? 'true' : undefined}
        onClick={handleClick2}
        color="info"
      >
        Каталог 
      </Button>

      <Menu
      
        id="basic-menu2"
        anchorEl={anchorEl2}
        open={open2}
        onClose={handleClose2}
       
        MenuListProps={{
          'aria-labelledby': 'basic-button2',
        }}
      >
        <MenuItem  onClick={handleClose2}>Квартиры</MenuItem>
        <MenuItem onClick={handleClose2}>Дома и участки</MenuItem>
        <MenuItem onClick={handleClose2}>Коммерческая недвижимость</MenuItem>
        <MenuItem onClick={handleClose2}>На карте</MenuItem>
      </Menu>


          <Button
          sx={{ color:"#213342", fontWeight:'400',  }}
          variant="text"
        id="basic-button"
        endIcon={<KeyboardArrowDownIcon/>}
        aria-controls={open3 ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open3 ? 'true' : undefined}
        onClick={handleClick3}
        color="info"
      >
        Услуги 
      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl3}
        open={open3}
        onClose={handleClose3}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose3}>Квартиры</MenuItem>
        <MenuItem onClick={handleClose3}>Дома и участки</MenuItem>
        <MenuItem onClick={handleClose3}>Коммерческая недвижимость</MenuItem>
        <MenuItem onClick={handleClose3}>На карте</MenuItem>
      </Menu>


          <Button
          variant="text"
          sx={{ color:"#213342", fontWeight:'400',  }}
        id="basic-button"
        endIcon={<KeyboardArrowDownIcon/>}
        aria-controls={open4 ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open4 ? 'true' : undefined}
        onClick={handleClick4}
        color="info"
      >
        О нас 
      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl4}
        open={open4}
        onClose={handleClose4}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose4}>Квартиры</MenuItem>
        <MenuItem onClick={handleClose4}>Дома и участки</MenuItem>
        <MenuItem onClick={handleClose4}>Коммерческая недвижимость</MenuItem>
        <MenuItem onClick={handleClose4}>На карте</MenuItem>
      </Menu>

          <Button
          sx={{ color:"#213342", fontWeight:'400',  }}
          variant="text"
        id="basic-button"
        endIcon={<KeyboardArrowDownIcon/>}
        aria-controls={open5 ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open5 ? 'true' : undefined}
        onClick={handleClick5}
        color="info"
      >
        Блог
      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl5}
        open={open5}
        onClose={handleClose5}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose5}>Квартиры</MenuItem>
        <MenuItem onClick={handleClose5}>Дома и участки</MenuItem>
        <MenuItem onClick={handleClose5}>Коммерческая недвижимость</MenuItem>
        <MenuItem onClick={handleClose5}>На карте</MenuItem>
      </Menu>

      <Link href="#"   sx={{ ml:5, textDecoration:"none", color:"#213342", fontWeight:'600',   }}>  📞+375 (29) 596 76 76 </Link>
      


      <Button
          sx={{ color:"#213342", fontWeight:'400',  }}
          variant="text"
       
      >
        <img src={telegram} alt="" />
      </Button>
          <Button
          sx={{ color:"#213342", fontWeight:'400',  }}
          variant="text"
        
      >
        <img src={viber} alt="" />

      </Button>

          <Button
          sx={{ color:"#213342"  }}
          variant="text" >
        <img src={whatsap} alt="" />
      </Button>

          </Box>



          <Box  sx={{  display:"flex",  flexDirection:"row", alignItems:"center", }}>

          <Button 
          sx={{ color:"white", display: { xs: 'none', md: 'flex' },  fontWeight:'400', backgroundColor:"#E31F26", boxShadow:"none"  }}
          variant="contained" color="warning"
        
      >

        Консультация

      </Button>

      <Button  sx={{ display: { xs: 'flex', md:'none'},  alignItems:"center", color:'black' }}  variant="text"  >

      <PhoneIcon  />
      </Button>


          </Box>

        </Toolbar>
      
    </AppBar></Container>
        
    )
  }

  export default Navbar;






//   {pages.map((page) => (
//     <Button
//       key={page}
//       onClick={handleCloseNavMenu}
//       sx={{ my: 2, color: 'white', display: 'block' }}
//     >
//       {page}
//     </Button>
//   ))}
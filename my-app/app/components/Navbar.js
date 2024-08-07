'use client' 

import '../styles.css';
import * as React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';


const drawerWidth = 240;
const navItems = [
  { text: 'Home', href: 'homepart' },
  { text: 'About Me', href: 'about' },
  { text: 'Services', href: 'services' },
  { text: 'Portfolio', href: 'portfolio' },
  { text: 'Contact Me', href: 'contact' },
];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton component="a" onClick={()=> {scrollToSection(item.href)}} sx={{ textAlign: 'center' }}>
              <ListItemText  primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: 'white', color: 'black' ,boxShadow:'none' }}>
        <Toolbar  sx={{ justifyContent: 'center', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: 'none', sm: 'flex' } ,alignItems: 'center'  , justifyContent:'space-between'}}>
            {navItems.map((item) => (
              <Button  className='navbar-link font-bold' onClick={()=> {scrollToSection(item.href)}} key={item.text} component="a"  sx={{ color: '#333', textTransform: 'none',marginLeft:'20px' , fontWeight:600,
                fontSize:'16px',
                fontStyle:'normal'}} >
                {item.text}
              </Button>
            ))}
          </Box>
          <Button
            href="#contact"
            sx={{
              backgroundColor: '#0077FF',
              marginLeft:'80px' ,
              color: 'white',
              borderRadius: '50px',
             textTransform :'none',
              padding: '8px 16px',
              '&:hover':{
                color:'#0077FF',
              },
              width:'160px',
              fontWeight:600,
              fontSize:'18px',
              fontStyle:'normal'
            }}
          >
            Let's chat
          </Button>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
export const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    const topOffset = section.getBoundingClientRect().top + window.scrollY- 64;
    window.scrollTo({
      top: topOffset,
      behavior: 'smooth'
    });
  }
};
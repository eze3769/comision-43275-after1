import React from 'react';

import { Box } from '@mui/material';

//RECOMENDADO POR MUI:
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import MenuIcon from '@mui/icons-material/Menu';
import CartWidget from '../cart-widget';

// export const ALTO_NAVBAR = '60px';

const NavBar = () => {

    const cartLength = 2;

  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" sx={{ backgroundColor: '#3B56FA' }}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Coder-Libre
        </Typography>
        <CartWidget cartLength={cartLength} />
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default NavBar;
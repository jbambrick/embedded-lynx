/*
const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Embedded Lynx</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/about">About</a>
            </div>
        </nav>
    );
}
 
export default Navbar;
*/

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';




export default function SearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >

          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
                <div>Embedded Lynx</div>
                {/* Need to address routing */}
                <Button variant="contained" href="/Home">Home</Button>
                <Button variant="contained" href="/About">About</Button>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
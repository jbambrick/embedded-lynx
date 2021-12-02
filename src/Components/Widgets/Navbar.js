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

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { CssBaseline } from "@material-ui/core";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <CssBaseline>
      <AppBar className="App-header" position="sticky">
        <Toolbar>
          <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Button className="logo">
              <NavLink className="logo" to="/">
                Logo
              </NavLink>
            </Button>

            <Button variant="contained">
              <NavLink to="/">Home</NavLink>
            </Button>
            <Button variant="contained">
              <NavLink to="/About">About</NavLink>
            </Button>
            <Button variant="contained">
              <NavLink to="/Projects">Projects</NavLink>
            </Button>
            <Button variant="contained">
              <NavLink to="/Links">Links</NavLink>
            </Button>
          </Typography>
        </Toolbar>
      </AppBar>
    </CssBaseline>
  );
}

export default Navbar;

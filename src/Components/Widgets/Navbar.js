import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { CssBaseline } from "@material-ui/core";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Icon } from "@mui/material";

function Navbar() {
  return (
    <>
      <CssBaseline>
        <AppBar className="App-header" position="sticky">
          <div className="nav-backdrop">
            <Toolbar className="toolbar">
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

                <div className="buttons">
                  <Button className="navlinks" variant="text">
                    <NavLink className="navlinks" to="/">
                      Home
                    </NavLink>
                  </Button>
                  <Button variant="text">
                    <NavLink
                      className="navlinks"
                      to="/About"
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      About
                    </NavLink>
                  </Button>
                  <Button variant="text">
                    <NavLink className="navlinks" to="/Projects">
                      Projects
                    </NavLink>
                  </Button>
                  <Button variant="text">
                    <NavLink className="navlinks" to="/Links">
                      Links
                    </NavLink>
                  </Button>
                  <Button>
                    <NavLink className="navlinks" to="/Contact">
                      Contact
                    </NavLink>
                  </Button>
                </div>
              </Typography>
            </Toolbar>
          </div>
        </AppBar>
      </CssBaseline>
    </>
  );
}

export default Navbar;

// #TODO change logo size when navbar state is changed

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { CssBaseline } from "@material-ui/core";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { Drawer } from "@mui/material";

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 30) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const [logo, setLogo] = useState(false);
  const changeLogo = () => {
    if (window.scrollY >= 10) {
      setLogo(true);
    } else {
      setLogo(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  window.addEventListener("scroll", changeLogo);


  return (
    <>
      <CssBaseline className="navbarz">
        <AppBar
          title="navbar"
          className={navbar ? "navbar active" : "navbar"}
          position="sticky"
          sx={{bgcolor: '#7b2ff7'}}
        >
          <motion.div
          initial={{
            x: -500,
            y: 0,
            scale: 1,
            rotate: 0,
          }}
          animate={{
            x: 0,
            y: 0,
            scale: 1,
            rotate: 0,
          }}
          exit={{
            x: 0,
            y: 0,
            scale: 1,
            rotate: 0,
          }}
          transition={{ duration: 1 }} 

        className="nav-backdrop">
            <Toolbar className="toolbar">
              <Typography
                variant="h4"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              >
                <Button>
                  <NavLink className={logo ? "logo actives" : "logo"} to="/">
                    Logo
                  </NavLink>
                  </Button>

                <div className="buttons">
                  <Button variant="text">
                    <NavLink className="navlinks" to="/About">
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
          </motion.div>
        </AppBar>
      </CssBaseline>
    </>
  );
}

export default Navbar;

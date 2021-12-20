import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import {Nav} from  "./TopNav.styles";


function TopNav() {
  return (
    <Typography>
      <AppBar className="TopNav" position="sticky">
        <Nav>
          <motion.div           initial={{
          x: -100,
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
        transition={{ duration: 1 }}>© Embedded Lynx 2021</motion.div>
        </Nav>
      </AppBar>
    </Typography>
  );
}

export default TopNav;
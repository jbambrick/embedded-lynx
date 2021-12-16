import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";

function TopNav() {
  return (
    <Typography>
      <AppBar className="TopNav" position="sticky">
        <nav>
          <motion.div           initial={{
          x: 1200,
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
        </nav>
      </AppBar>
    </Typography>
  );
}

export default TopNav;
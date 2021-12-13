import * as React from "react";
import { Card } from "@mui/material";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Opacity } from "@material-ui/icons";

const Home = () => {
  return (
    <Typography>
      <motion.div
        initial={{
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
        transition={{ duration: 0.5 }}

      >
        <div className="home">
          <Card className="card">
            <div className="backdrop">
              <div className="card-child">
                <motion.div
                  whileHover={{scale:1.1,
                  transition: {duration: 1}}}
                  whileTap={{ scale: 0.95 }}>
                  <h1>
                    <section>Design. Create. Implement.</section>
                  </h1>
                </motion.div>


                <motion.button
                  whileHover={{scale:1.2,transition: {duration: 0.5}}}
                  whileTap={{ scale: 0.98 }}
                  className="contactButton"
                  variant="contained"
                  style={{ backgroundColor: "rgb(216, 0, 216)", width: '160px',height: '50px', borderRadius: '18px', borderStyle: 'none' }}
                >
                  <NavLink className="contact" to="/Contact">
                    Contact
                  </NavLink>
                </motion.button>
   
              </div>
            </div>
          </Card>
          <div className="page">
            <h1>The standard Lorem Ipsum passage, used since the 1500s</h1>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
            <h1>The standard Lorem Ipsum passage, used since the 1500s</h1>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
            <h1>The standard Lorem Ipsum passage, used since the 1500s</h1>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
          </div>
        </div>
      </motion.div>
    </Typography>
  );
};

export default Home;

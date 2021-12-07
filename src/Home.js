import * as React from "react";
import { Card } from "@mui/material";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <Typography>
      <div className="container">
        <div className="home">
          <Card className="card">
            <div className="backdrop">
              <div className="card-child">
                <h1>
                  <section>Design. Create. Implement.</section>
                </h1>

                <Button
                  className="contactButton"
                  variant="contained"
                  style={{ backgroundColor: "rgba(255, 0, 0, 0.918)" }}
                >
                  <NavLink className="contact" to="/Contact">
                    Contact
                  </NavLink>
                </Button>
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
      </div>
    </Typography>
  );
};

export default Home;

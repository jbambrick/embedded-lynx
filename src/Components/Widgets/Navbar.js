import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "./Drawer.js";

const useStyles = makeStyles((theme) => ({

  logo: {
    flexGrow: "1",
    cursor: 'crosshair',
    paddingLeft: '20px'

  },
  link: {
    textDecoration: "none",
    color: "white",

    marginLeft: theme.spacing(12),
    "&:hover": {
      color: "rgb(194, 5, 147)",
      borderBottom: "1px solid rgb(216, 0, 216)",
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position="sticky" style={{ background: 'rgb(194, 5, 147)'}}>
      <CssBaseline />
      <Toolbar >

        <Typography variant="h5" className={classes.logo}>
          <Link to="/">
            NavLogo
          </Link>
        </Typography>

        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <Link to="/about" className={classes.link}>
              About
            </Link>
            <Link to="/projects" className={classes.link}>
              Projects
            </Link>
            <Link to="/contact" className={classes.link}>
              Contact
            </Link>

          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
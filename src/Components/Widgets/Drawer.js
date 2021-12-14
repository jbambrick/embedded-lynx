import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
 makeStyles
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";


const useStyles = makeStyles(()=>({
    link:{
        textDecoration:"none",
        fontSize: "20px",
        fontFamily: '"Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif'
    },
    icon:{
        color: "white"
    }
}));

function DrawerComponent() {
const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        
      >
        <List className="drawer">
        <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/">Embedded Lynx</Link>
            </ListItemText>
          </ListItem>
         <ListItem onClick={() => setOpenDrawer(false)} >
            <ListItemText>
              <Link to="/">Home</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/about">About</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/projects">Projects</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/contact">Contact</Link>
            </ListItemText>
          </ListItem>

        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
      <MenuIcon style={{color:'white'}} />
      </IconButton>
    </>
  );
}
export default DrawerComponent;
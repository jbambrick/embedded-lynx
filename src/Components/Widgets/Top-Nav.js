import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { CssBaseline } from "@material-ui/core";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

function TopNav() {
  return (
    <Typography>
      <AppBar className="TopNav" position="sticky">
        <nav>
          <div>Embedded Lynx 2021</div>
        </nav>
      </AppBar>
    </Typography>
  );
}

export default TopNav;

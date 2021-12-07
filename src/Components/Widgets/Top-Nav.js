import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";

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

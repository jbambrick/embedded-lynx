import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Typography } from "@material-ui/core";
import { width } from "@mui/system";

export default function CardComponent() {
    return (
<Typography style={{display: 'inline-flex'}}>
    <Card variant="outlined">
        <CardContent className="cardBlock">Angular</CardContent>
    </Card>
    <Card>
        <CardContent className="cardBlock">Angular</CardContent>
    </Card>
    <Card>
        <CardContent className="cardBlock">CSS/SCSS</CardContent>
    </Card>
    <Card>
        <CardContent className="cardBlock">React-Native</CardContent>
    </Card>
</Typography>
    

    )

};

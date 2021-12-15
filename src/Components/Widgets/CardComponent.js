import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Typography } from "@material-ui/core";
import { motion } from "framer-motion";

//TODO add framer motion to cards

export default function CardComponent() {
    return (
<Typography className="skillCard">
    <Card variant="outlined" style={{borderRadius: '0px'}}>
        <CardContent className="cardBlock">ReactJS</CardContent>
    </Card>
    <Card variant="outlined" style={{borderRadius: '0px'}}>
        <CardContent className="cardBlock">Angular</CardContent>
    </Card>
    <Card variant="outlined" style={{borderRadius: '0px'}}>
        <CardContent className="cardBlock">CSS/SCSS</CardContent>
    </Card>
    <Card variant="outlined" style={{borderRadius: '0px'}}>
        <CardContent className="cardBlock">Adobe</CardContent>
    </Card>
</Typography>
    

    )

};

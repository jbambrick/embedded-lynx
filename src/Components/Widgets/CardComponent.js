import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Typography } from "@material-ui/core";
import { width } from "@mui/system";

export default function CardComponent() {
    return (
        <Card style={{ width: '33vw', height: 200 }}>
            <CardContent>
                <Typography sx={{fontSize: 14}} color="rgb(194, 5, 147)">
                    CARD WORKS
                </Typography>
            </CardContent>
        </Card>

    )

}
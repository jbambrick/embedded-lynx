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
<motion.div
                  whileHover={{scale:1.03, }}
                  whileTap={{ scale: 0.98 }}>
    <Card variant="outlined" style={{borderRadius: '0px'}}>
        <CardContent className="cardBlock">ReactJS</CardContent>
    </Card>
    </motion.div>
    <motion.div
                  whileHover={{scale:1.03, }}
                  whileTap={{ scale: 0.98 }}>
    <Card variant="outlined" style={{borderRadius: '0px'}}>
        <CardContent className="cardBlock">Angular</CardContent>
    </Card>
    </motion.div>
    <motion.div
                  whileHover={{scale:1.03, }}
                  whileTap={{ scale: 0.98 }}>
    <Card variant="outlined" style={{borderRadius: '0px'}}>
        <CardContent className="cardBlock">CSS/SCSS</CardContent>
    </Card>
    </motion.div>
    <motion.div
                  whileHover={{scale:1.03, }}
                  whileTap={{ scale: 0.98 }}>
    <Card variant="outlined" style={{borderRadius: '0px'}}>
        <CardContent className="cardBlock">Adobe</CardContent>
    </Card>
    </motion.div>
</Typography>
    

    )

};

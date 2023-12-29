import * as React from 'react';
import { useRef } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { useState, useEffect, setState } from "react";
import Grid from '@mui/material/Grid';
import App, { tablify, parse_bool, theme, get_columns } from "../App";
import Navbar from './Navbar';

import Typography from '@mui/material/Typography';
import { createTheme, makeStyles, ThemeProvider } from '@mui/material/styles';
import { TableBody, TableHead, TableRow, Box, Divider, Button, Link } from '@mui/material';
/*


        <Box sx={{height:"400px",
                    width:"400px",
                backgroundColor:"Gainsboro",
                borderRadius:"20px",
                marginLeft:"30%",
                boxShadow:1}}>
                    
    */

export default function Headshot(props) {









    return (
            <Box sx={props.sx}
        component="img"
        src={require('../resources/headshot.jpg')}
        ></Box>




    );





}
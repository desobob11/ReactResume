import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { useState, useEffect, setState } from "react";
import Grid from '@mui/material/Grid';
import App, { tablify, parse_bool, theme, get_columns } from "../App";
import Navbar from './Navbar';


import Typography from '@mui/material/Typography';
import { createTheme, makeStyles, ThemeProvider } from '@mui/material/styles';
import { TableBody, TableHead, TableRow, Box, Divider } from '@mui/material';





export default function Homepage() {


    const thisTheme = createTheme({
        typography: {
            allVariants: {
                color: "Black",
                fontSize:100
            }
        }
    });


    return (
        <ThemeProvider theme={thisTheme}>
            <CssBaseline />
        <Navbar/>
        <Typography>
            Hello
        </Typography>
            <Typography>
                Hello
            </Typography>
            <Typography>
                Hello
            </Typography>
            <Typography>
                Hello
            </Typography>
            <Typography>
                Hello
            </Typography>
            <Typography>
                Hello
            </Typography>
            <Typography>
                Hello
            </Typography>
            <Typography>
                Hello
            </Typography>
            <Typography>
                Hello
            </Typography>
            
        </ThemeProvider>


    );
}
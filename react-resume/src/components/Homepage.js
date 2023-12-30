import * as React from 'react';
import { useRef } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { useState, useEffect, setState} from "react";
import Grid from '@mui/material/Grid';
import App, { tablify, parse_bool, theme, get_columns } from "../App";
import Navbar from './Navbar';
import AboutSection from './AboutSection';
import Headshot from './Headshot';
import ExperienceSection from './ExperienceSection';
import '../App.css'


import Typography from '@mui/material/Typography';
import { createTheme, makeStyles, ThemeProvider } from '@mui/material/styles';
import { TableBody, TableHead, TableRow, Box, Divider, Button, Link} from '@mui/material';





export default function Homepage() {


    const thisTheme = createTheme({
        typography: {
            allVariants: {
                color: "Black",
                fontSize:100
            }
        },
        palette: {
            background: {
                default:"white"
            }
        }
    });


    const aboutRef = useRef(null);
    const experienceRef = useRef(null);



    return (
        <ThemeProvider theme={thisTheme}>
            <CssBaseline />
        <Box display="inline">
                <Navbar aboutRef={aboutRef} experienceRef={experienceRef}></Navbar>
                <AboutSection className={"main-fade"} ref={aboutRef}></AboutSection>
                <ExperienceSection ref={experienceRef}></ExperienceSection>
                <Typography variant="h1" sx={{color:"white"}}>Hello</Typography>
                <Typography variant="h1" sx={{ color: "white" }}>Hello</Typography>
                <Typography variant="h1" sx={{ color: "white" }}>Hello</Typography>
                <Typography variant="h1" sx={{ color: "white" }}>Hello</Typography>
                <Typography variant="h1" sx={{ color: "white" }}>Hello</Typography>
                <Typography variant="h1" sx={{ color: "white" }}>Hello</Typography>
                <Typography variant="h1" sx={{ color: "white" }}>Hello</Typography>
                <Typography variant="h1" sx={{ color: "white" }}>Hello</Typography>
                <Typography variant="h1" sx={{ color: "white" }}>Hello</Typography>
                <Typography variant="h1" sx={{ color: "white" }}>Hello</Typography>
                <Typography variant="h1" sx={{ color: "white" }}>Hello</Typography>
                <Typography variant="h1" sx={{ color: "white" }}>Hello</Typography>
                <Typography variant="h1" sx={{ color: "white" }}>Hello</Typography>

        </Box>
        </ThemeProvider>
        

    );
}
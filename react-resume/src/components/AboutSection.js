import * as React from 'react';
import { useRef, forwardRef } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { useState, useEffect, setState } from "react";
import Grid from '@mui/material/Grid';
import App, { tablify, parse_bool, theme, get_columns } from "../App";
import Navbar from './Navbar';
import Headshot from './Headshot';
import { styled } from "@mui/material/styles";
import '../index.css'
import '../App.css'

import Typography from '@mui/material/Typography';
import { createTheme, makeStyles, ThemeProvider } from '@mui/material/styles';
import { TableBody, TableHead, TableRow, Box, Divider, Button, Link } from '@mui/material';









const AboutSection = forwardRef((props, ref) => {
    return (
        <Grid className={'main-fade non-scrollable'} ref={ref} container spacing={2} sx={{
            marginTop: "160px",
            display: "inline-flex"
        }}>

            <Grid item xs={8} display='flex'>
                <Headshot sx={{
                    height: "400px",
                    width: "400px",
                    borderRadius: "50%",
                    marginLeft: "25%",
                    boxShadow: 15
                }}
                ></Headshot>
                <Grid item xs={8} sx={{ width: "100px" }}>
                    <Typography variant="h1" sx={{
                        fontFamily: "Open Sans",
                        marginLeft: "182px"
                    }}>
                        Hi!
                    </Typography>
                    <Typography sx={{
                        fontFamily: "Open Sans",
                        marginLeft: "190px",
                        marginTop: "10px",
                        fontSize: 30,
                        width: "100",
                        width: "40vw"
                    }}>
                        My name is Desmond O'Brien. I am a Computer Science and Economics student at the University of Calgary.
                        <p></p>
                        I am deeply passionate about software development, and you can usually find me rolling up my sleeves to tackle my next projet.

                    </Typography>
                </Grid>
            </Grid>


        </Grid>







    );
})

export default AboutSection;
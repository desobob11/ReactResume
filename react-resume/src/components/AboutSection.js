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

    var observer = null;
    useEffect(() => {
        observer = new IntersectionObserver(entries => {
            entries.forEach(x => {
                if (x.isIntersecting) {
                   x.target.classList.add('main-fade');
                }
            });
        });
        observer.observe(document.querySelector('.fader'));
    })


    return (
        <Grid className={'non-scrollable fader'} ref={ref} container spacing={2} sx={{
            marginTop: "15vh",
            marginBottom: "40px",
            opacity:0,
            width:"100vw"
        }}>

            <Grid item xs={8} display='flex' >
                <Headshot sx={{
                    display:"block",
                    height:"30vw",
                    width:"auto",
                    marginLeft: "15vw",
                    boxShadow: 15
                }}
                ></Headshot>
                <Grid item xs={8} sx={{ width: "10vw" }}>
                    <Typography variant="h1" sx={{
                        fontFamily: "Open Sans",
                        marginLeft: "10vw",
                        fontSize: { xs: "4rem", md: "7rem" }
                    }}>
                        Hi!
                    </Typography>
                    <Typography sx={{
                        fontFamily: "Open Sans",
                        marginLeft: "10vw",
                        marginTop: "10px",
                        fontSize: {xs: "0.8rem", md:"1.5rem"},
                        width: "30vw"
                    }}>
                        My name is Desmond O'Brien. I am a Computer Science and Economics student at the University of Calgary.
                        <p></p>
                        I am deeply passionate about software development, and you can usually find me rolling up my sleeves to tackle my next project.

                    </Typography>
                </Grid>
            </Grid>


        </Grid>







    );
})

export default AboutSection;
import * as React from 'react';
import { useRef } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { useState, useEffect, setState, forwardRef } from "react";
import Grid from '@mui/material/Grid';
import App, { tablify, parse_bool, theme, get_columns } from "../App";
import Navbar from './Navbar';
import Headshot from './Headshot';
import { styled } from "@mui/material/styles";
import '../index.css'
import '../App.css'
import ExperienceCard from './ExperienceCard';
import GitHubIcon from '@mui/icons-material/GitHub';

import { pong_text, bird_text, tank_text, stat_text, bulk_text, csd_text, gui_text } from '../resources/stringConsts.js'

import Typography from '@mui/material/Typography';
import { createTheme, makeStyles, ThemeProvider } from '@mui/material/styles';
import { TableBody, TableHead, TableRow, Box, Divider, Button, Link, Collapse, Container, CardContent, IconButton } from '@mui/material';
import ProjectCard from './ProjectCard.js';





const ContactSection = forwardRef((props, ref) => {


    var observer = null;
    useEffect(() => {
        observer = new IntersectionObserver(entries => {
            entries.forEach(x => {
                if (x.isIntersecting) {
                    x.target.classList.add('main-fade');
                }
            });
        });
        observer.observe(document.querySelector('.cont-fade'));
    })




    return (
        <Box sx={{marginBottom:"100px"}} ref={ref}>
        <Grid justifyContent="center" className='cont-fade' container  sx={{
            marginBottom: "40px",
            opacity: 0,
            display:"inline-flex"
        }}>
            <Grid item>
            <Typography  ref={ref} className="scrollable" variant="h1" sx={{
                fontFamily: "Open Sans",
                fontSize: { xs: "3rem", md: "4rem" },
            }}>
                Contact
            </Typography>
            <Grid item>
            <Typography className="scrollable" variant="h1" sx={{
                fontFamily: "Open Sans",
                    fontSize: { xs: "0.8rem", md: "1.5rem" },
                    width:"50vw"
            }}>
                <p></p>Thank you for taking a look at my website! <p></p>Please feel free to check out the link to my GitHub below, or contact me using my email address!
            </Typography>
            </Grid>

            </Grid>



        </Grid>
        <Grid container justifyContent="center">
            <IconButton sx={{ color: "DimGrey" }}  disableRipple
                onClick={() => {
                    const newWindow = window.open('https://github.com/desobob11', '_blank', 'noopener,noreferrer')
                    if (newWindow) newWindow.opener = null
                }}
            ><GitHubIcon sx={{fontSize:"4vw"}}></GitHubIcon></IconButton>

        </Grid>
            <Grid container justifyContent="center">
                <Typography ref={ref} className="scrollable" variant="h1" sx={{
                    fontFamily: "Open Sans",
                    fontSize: { xs: "0.8rem", md: "1.5rem", marginTop: "3vh" }
                }}>
                    desmondobrien01@outlook.com
                </Typography>
            </Grid>

        </Box>







    );
})

export default ContactSection
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

import {  pong_text, bird_text, tank_text, stat_text, bulk_text, csd_text, gui_text } from '../resources/stringConsts.js'

import Typography from '@mui/material/Typography';
import { createTheme, makeStyles, ThemeProvider } from '@mui/material/styles';
import { TableBody, TableHead, TableRow, Box, Divider, Button, Link, Collapse, Container, CardContent } from '@mui/material';
import ProjectCard from './ProjectCard.js';





const ProjectSection = forwardRef((props, ref) => {


    var observer = null;
    useEffect(() => {
        observer = new IntersectionObserver(entries => {
            entries.forEach(x => {
                if (x.isIntersecting) {
                    x.target.classList.add('main-fade');
                }
            });
        });
        observer.observe(document.querySelector('.proj-fade'));
    })




    return (
        <Grid className='proj-fade'container spacing={0} sx={{
            marginBottom: "40px",
            opacity: 0,
            display:"inline"
        }}>
            <Typography ref={ref} className="scrollable" variant="h1" sx={{
                fontFamily: "Open Sans",
                marginLeft: "10vw",
                fontSize: { xs: "3rem", md: "4rem" },
            }}>
                Projects
            </Typography>

            <Box sx={{marginTop:"40px"}}>
                <Grid justifyContent={"center"} container spacing={{ xs: 4, md: 10 }} /* row one */> 
                <Grid item>
                        <ProjectCard projTitle="Pong" projDescr={pong_text} projImg={require('../resources/proj_pong.png')} projLink="https://github.com/desobob11/Pong"></ProjectCard>

                </Grid>
                    <Grid item>
                        <ProjectCard projTitle="Jumpy Square" projDescr={bird_text} projImg={require('../resources/proj_bird.PNG')} projLink="https://github.com/desobob11/JumpySquare" />

                </Grid>
                <Grid item>
                        <ProjectCard projTitle="Tank Game" projDescr={tank_text} projImg={require('../resources/proj_tank.PNG')} projLink="https://github.com/desobob11/TankGame"></ProjectCard>
                </Grid>
            </Grid>
            </Box>      
            <Box sx={{ marginTop: "40px" }}>
                <Grid justifyContent={"center"} container spacing={{ xs: 4, md: 10 }} /*row 2*/>
                    <Grid item>
                        <ProjectCard projTitle="QuickStat" projDescr={stat_text} projImg={require('../resources/proj_stat.PNG')} projLink="https://github.com/desobob11/QuickStat" />
                    </Grid>
                    <Grid item>
                        <ProjectCard projTitle="BulkTransfer" projDescr={bulk_text} projImg={require('../resources/proj_bulk.PNG')} projLink="https://github.com/desobob11/FileTransfer"></ProjectCard>

                    </Grid>
                    <Grid item>
                        <ProjectCard projTitle="AESO CSD Scraper" projDescr={csd_text} projImg={require('../resources/proj_csd.PNG')} projLink="https://github.com/desobob11/CSD-Scraper"></ProjectCard>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ marginTop: "40px" }}>
                <Grid justifyContent={"center"} container spacing={{ xs: 4, md: 10 }} /*row 2*/>
                    <Grid item>
                        <ProjectCard projTitle="ScraperDB Master" projDescr={gui_text} projImg={require('../resources/proj_gui.PNG')} projLink="https://github.com/desobob11/CSD-Scraper" />
                    </Grid>

                </Grid>
            </Box>



        </Grid>







    );
})

export default ProjectSection
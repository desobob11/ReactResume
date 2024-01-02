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

import { bwb_text } from '../resources/stringConsts.js'

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
                    <ProjectCard></ProjectCard>

                </Grid>
                <Grid item>
                    <ProjectCard></ProjectCard>

                </Grid>
                <Grid item>
                    <ProjectCard></ProjectCard>
                </Grid>
            </Grid>
            </Box>      
            <Box sx={{ marginTop: "40px" }}>
                <Grid justifyContent={"center"} container spacing={{ xs: 4, md: 10 }} /*row 2*/>
                    <Grid item>
                        <ProjectCard></ProjectCard>

                    </Grid>
                    <Grid item>
                        <ProjectCard></ProjectCard>

                    </Grid>
                    <Grid item>
                        <ProjectCard></ProjectCard>
                    </Grid>
                </Grid>
            </Box>



        </Grid>







    );
})

export default ProjectSection
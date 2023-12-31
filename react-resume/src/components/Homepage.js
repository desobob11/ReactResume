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
import EducationSection from './EducationSection';
import Ellipses from './Ellipses';
import MobileBar from './MobileBar';
import ProjectSection from './ProjectSection';
import ContactSection from './ContactsSection';


import Typography from '@mui/material/Typography';
import { createTheme, makeStyles, ThemeProvider } from '@mui/material/styles';
import { TableBody, TableHead, TableRow, Box, Divider, Button, Link} from '@mui/material';





export default function Homepage() {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const Navigation = () => {
        if (screenWidth >= 800) {
            return (
                <Navbar aboutRef={aboutRef} experienceRef={experienceRef} educationRef={educationRef} projectRef={projectRef} contRef={contRef}></Navbar>
            );
        }
        else {
            return (
                <MobileBar aboutRef={aboutRef} experienceRef={experienceRef} educationRef={educationRef} projectRef={projectRef} contRef={contRef}></MobileBar>
            );
        }
    }

    useEffect(() => {
        const checkSize = () => {
            setScreenWidth(window.innerWidth);
        }
        window.addEventListener('resize', checkSize);
    }, []);


    const thisTheme = createTheme({
        typography: {
            allVariants: {
                color: "DimGrey",
                fontSize:100
            },
            h1: {
                color: "DimGrey",
                fontSize: 100
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
    const educationRef = useRef(null);
    const projectRef = useRef(null)
    const contRef = useRef(null)



    return (
        <ThemeProvider theme={thisTheme}>
            <CssBaseline />
            <Navigation></Navigation>
        <Grid  container direction="column" justifyContent="flex-start" alignItems="stretch" rowSpacing={0}>
            <Grid item >
                <AboutSection className={"main-fade"} ref={aboutRef}></AboutSection>
            </Grid>
            <Grid item >
                <Ellipses/>
            </Grid>
            <Grid item >
                <ExperienceSection ref={experienceRef}></ExperienceSection>
            </Grid>
            <Grid item >
                <Ellipses />
            </Grid>
            <Grid item >
                <EducationSection ref={educationRef}></EducationSection>
            </Grid>
            <Grid item>
                <Ellipses />
            </Grid>
            <Grid item>
                <ProjectSection  ref={projectRef}/>
            </Grid>
            <Grid item>
                <Ellipses />
            </Grid>
                <Grid item>
                    <ContactSection ref={contRef} />
                </Grid>


        </Grid>
        </ThemeProvider>
        

    );
}
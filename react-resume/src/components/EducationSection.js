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





const EducationSection = forwardRef((props, ref) => {

    const [open, setOpen] = useState(false);



    return (
        <Grid className={'main-fade'} container spacing={0} sx={{
            marginBottom: "40px"
        }}>


            <Grid item xs={8} display='flex' sx={{
            }}>

                <Grid item xs={8} sx={{ width: "100px" }}>
                    <Typography ref={ref} className="scrollable" variant="h1" sx={{
                        fontFamily: "Open Sans",
                        marginLeft: "182px",
                        fontSize: "60px"
                    }}>
                        Education
                    </Typography>
                    <Typography sx={{
                        fontFamily: "Open Sans",
                        marginLeft: "190px",
                        marginTop: "10px",
                        fontSize: 30,
                        width: "100",
                        width: "40vw"
                    }}>
                    </Typography>
                    <ExperienceCard image={require('../resources/logo_uofc.png')}
                        jobDescr={"BSc. Computer Science"}
                        jobTime={"Jan 2020 - Present"}
                        jobText={bwb_text}
                    ></ExperienceCard>

                    <ExperienceCard image={require('../resources/logo_uofc.png')}
                        jobDescr={"BA. Economics"} jobTime={"Sep 2018 - Present"}></ExperienceCard>

                </Grid>
            </Grid>



        </Grid>







    );
})

export default EducationSection
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

import {bwb_text} from '../resources/stringConsts.js'

import Typography from '@mui/material/Typography';
import { createTheme, makeStyles, ThemeProvider } from '@mui/material/styles';
import { TableBody, TableHead, TableRow, Box, Divider, Button, Link, Collapse, Container, CardContent } from '@mui/material';





    const ExperienceSection = forwardRef((props, ref) => {

        const [open, setOpen] = useState(false);



        return (
            <Grid className={'main-fade'}container spacing={2} sx={{
                marginTop: "160px",
                display: "inline-flex"
            }}>


                <Grid item xs={8} display='flex' sx={{
                    marginTop: "400px"
                }}>

                    <Grid item xs={8} sx={{ width: "100px" }}>
                        <Typography ref={ref} className="scrollable"  variant="h1" sx={{
                            fontFamily: "Open Sans",
                            marginLeft: "182px",
                            fontSize:"60px"
                        }}>
                            Experience
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
                        <ExperienceCard image={require('../resources/logo_bwb.png')}
                                        jobDescr={"Jr. Systems Analyst"}
                                        jobTime={"May 2023 - Present"}
                                        jobText={bwb_text}
                         ></ExperienceCard>

                        <ExperienceCard image={require('../resources/logo_msa.png')}
                            jobDescr={"Student Economist"} jobTime={"Sep 2022 - December 2022"}></ExperienceCard>


                        <ExperienceCard image={require('../resources/logo_msa.png')}
                                        jobDescr={"Summer Student"} 
                                        jobTime={"May 2022 - Sep 2022"}
                                        jobText={"Hello"}

                            ></ExperienceCard>
                        <ExperienceCard image={require('../resources/logo_rbc.png')}
                            jobDescr={"Client Advisor"} jobTime={"May 2021 - Oct 2021"}></ExperienceCard>
                        <ExperienceCard image={require('../resources/logo_nissan.png')}
                            jobDescr={"Auto Detailer"} jobTime={"Mar 2021 - May 2021"}></ExperienceCard>
                        <ExperienceCard image={require('../resources/logo_depot.png')}
                            jobDescr={"Retail Sales Associate"} jobTime={"Sep 2020 - Dec 2020"}></ExperienceCard>
                        <ExperienceCard image={require('../resources/logo_safeway.png')}
                            jobDescr={"Starbucks Barista"} jobTime={"Mar 2017 - Sep 2020"}></ExperienceCard>
                    </Grid>
                </Grid>



            </Grid>







        );
    })
    
export default ExperienceSection
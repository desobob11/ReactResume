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

import Typography from '@mui/material/Typography';
import { createTheme, makeStyles, ThemeProvider } from '@mui/material/styles';
import { TableBody, TableHead, TableRow, Box, Divider, Button, Link } from '@mui/material';





    const ExperienceSection = forwardRef((props, ref) => {
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
                            marginLeft: "182px"
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
                            Sample

                        </Typography>
                    </Grid>
                </Grid>



            </Grid>







        );
    })
    
export default ExperienceSection
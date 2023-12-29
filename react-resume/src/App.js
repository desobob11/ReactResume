
import './App.css';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { ThemeProvider, createMuiTheme, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Homepage from './components/Homepage';
import './index.css'

const defaultTheme = createTheme();




function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Helmet>
        <meta name="theme-color" content="#673AAC" />
      </Helmet>
      <Router>

        <Routes>
          <Route path="/" element={<Homepage/>}/>

        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
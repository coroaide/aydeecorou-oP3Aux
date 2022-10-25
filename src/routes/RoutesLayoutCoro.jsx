import React, { useState } from "react";
import { Box, Grid } from "@material-ui/core";
import { NavbarCoro } from './NavbarCoro';
import { Routes, Route } from 'react-router-dom';
import { HomeCoro } from '../components/home/HomeCoro';
import { AboutCoro } from '../components/about/AboutCoro';
import './RoutesLayoutCoro.css';
export const RoutesLayoutCoro = () => {
    const [darkMode, setDarkMode] = useState(true);
    function handleClick() {
        setDarkMode(!darkMode);
    }
    return (
        <Grid container spacing={1} className={`content ${darkMode? 'dark': 'light'}`}>
            <Grid item xs={11} component={'header'} className={`${darkMode? 'dark': 'light'}`}>
                <NavbarCoro darkMode={darkMode} handleClick={handleClick}/>
            </Grid>
            <Grid item xs={11} className={`container-content ${darkMode} 'dark': 'light'}`}>
                <Routes>
                    <Route exact path={'/Home'} element={<HomeCoro/>} />
                    <Route exact path={'/AboutCoro'} element={<AboutCoro/>} />
                </Routes>
            </Grid>
            <Grid item xs={11} component={'footer'} >
                <Box   className={`${darkMode? 'dark': 'light'} text-footer`}
                   >
                <p>template created with &hearts; by <a target={'_blank'} href={'https://es.reactjs.org/'}>react js</a></p>
                <p>&copy; 2022</p>
            </Box>
        </Grid>
    </Grid>
    )
}

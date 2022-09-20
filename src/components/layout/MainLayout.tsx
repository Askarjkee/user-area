import React, {useState} from 'react';
import {useStyles} from "./MainLayout.styles";
import {AppBar, Button, IconButton, Toolbar, Typography} from "@mui/material";
import {Outlet,useLocation} from "react-router-dom"
import MenuIcon from '@mui/icons-material/Menu';


const MainLayout = () => {
    const classes = useStyles();
    const { pathname } = useLocation();

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {`${pathname.split('').slice(1).join('').toUpperCase()}`}
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <Outlet/>
        </>
    );
};

export default MainLayout;
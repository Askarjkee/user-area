import React, {useState} from 'react';
import {useStyles} from "./MainLayout.styles";
import {AppBar, Box, Button, IconButton, Menu, MenuItem, Toolbar, Typography} from "@mui/material";
import {Outlet, useLocation, useNavigate} from "react-router-dom"
import MenuIcon from '@mui/icons-material/Menu';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {AccountCircle} from "@mui/icons-material";
import {logout} from "../../redux/slice/auth/authSlice";


const MainLayout = () => {
    const classes = useStyles();
    const { pathname } = useLocation();
    const isAuth = useAppSelector(state => state.auth.authData?.isAuth);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

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
                    {
                        isAuth ?
                            <Box className={classes.user}>
                                <Button sx={{color: '#fff'}} onClick={() => dispatch(logout())}>Logout</Button>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    color="inherit"
                                >
                                    <AccountCircle />
                                </IconButton>
                            </Box>
                            :
                            <Button color="inherit" onClick={() => navigate('/login')}>Login</Button>
                    }
                </Toolbar>
            </AppBar>
            <Outlet/>
        </>
    );
};

export default MainLayout;
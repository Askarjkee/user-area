import React, {useState} from 'react';
import {Box, Button, TextField} from "@mui/material";
import {useStyles} from "../layout/MainLayout.styles";
import {useNavigate} from "react-router-dom";

const AuthPage = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const onSubmit = (e: React.SyntheticEvent): void => {
        e.preventDefault();
        console.log({userName, userPassword})
    }

    return (
        <Box className={classes.root}>
            <Box className={classes.title}>Auth page</Box>
            <form className={classes.inputRoot}>
                <TextField
                    label="username"
                    id="user-name"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className={classes.input}
                />
                <TextField
                    label="password"
                    id="user-password"
                    value={userPassword}
                    onChange={(e) => setUserPassword(e.target.value)}
                    type="password"
                    className={classes.input}
                />
                <Box className={classes.submit}>
                    <Button type="submit" onClick={(e) => onSubmit(e)}>
                        Login
                    </Button>
                    <Button onClick={() => navigate('/registration')}>
                        Registration
                    </Button>
                </Box>
            </form>
        </Box>
    );
};

export default AuthPage;
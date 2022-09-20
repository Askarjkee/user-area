import React, {useState} from 'react';
import {Box, TextField} from "@mui/material";
import {useStyles} from "../layout/MainLayout.styles";

const AuthPage = () => {
    const classes = useStyles();
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');

    return (
        <Box className={classes.root}>
            <Box>Auth page</Box>
            <Box className={classes.inputRoot}>
                <TextField
                    label="user name"
                    id="user-name"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
                <TextField
                    label="password"
                    id="user-password"
                    value={userPassword}
                    onChange={(e) => setUserPassword(e.target.value)}
                    type="password"
                />
            </Box>
        </Box>
    );
};

export default AuthPage;
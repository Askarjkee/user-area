import React, {useState} from 'react';
import {Box, Button, TextField} from "@mui/material";
import {useStyles} from "./RegistrationPage.styles";

const RegistrationPage = () => {
    const classes = useStyles();
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');

    return (
        <Box className={classes.root}>
            <Box className={classes.title}>
                Registration
            </Box>
            <form className={classes.form}>
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
                <Button>
                    Submit
                </Button>
            </form>
        </Box>
    );
};

export default RegistrationPage;
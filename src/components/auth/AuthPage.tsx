import React, {useState} from 'react';
import {Box, Button, TextField} from "@mui/material";
import {useStyles} from "./AuthPage.styles";
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {setAuthData} from "../../redux/slice/auth/authSlice";
import {LoadingButton} from "@mui/lab";

const AuthPage = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [status, setStatus] = useState('');
    const usersData = useAppSelector(state => state.auth.usersData);
    const dispatch = useAppDispatch();

    const onSubmit = (e: React.SyntheticEvent): void => {
        e.preventDefault();
        setStatus('loading');
        setTimeout(() => {
           const isCorrect = usersData.find(user => user.userName === userName && user.password === userPassword);
           if (isCorrect) {
               setStatus('');
               dispatch(setAuthData({userName, password: userPassword}));
               navigate('/');
           } else {
               setStatus('error')
           }
        }, 3000)
    }

    return (
        <Box className={classes.root}>
            <Box className={classes.title}>Auth page</Box>
            <form className={classes.inputRoot}>
                <TextField
                    disabled={status === 'loading'}
                    label="username"
                    id="user-name"
                    value={userName}
                    onChange={(e) => {
                        setUserName(e.target.value)
                        setStatus('');
                    }}
                    className={classes.input}
                    error={status === 'error'}
                />
                <TextField
                    disabled={status === 'loading'}
                    label="password"
                    id="user-password"
                    value={userPassword}
                    onChange={(e) => {
                        setUserPassword(e.target.value)
                        setStatus('');
                    }}
                    type="password"
                    className={classes.input}
                    error={status === 'error'}
                />
                {status === 'error' && <Box className={classes.error}>Wrong username or password</Box>}
                <Box className={classes.submit}>
                    <LoadingButton loading={status === 'loading'} type="submit" onClick={(e) => onSubmit(e)}>
                        Login
                    </LoadingButton>
                    <Button onClick={() => navigate('/registration')} >
                        Registration
                    </Button>
                </Box>
            </form>
        </Box>
    );
};

export default AuthPage;
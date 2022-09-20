import React, {useState} from 'react';
import {Box, TextField} from "@mui/material";
import {useStyles} from "./RegistrationPage.styles";
import {LoadingButton} from "@mui/lab";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {register} from "../../redux/slice/auth/authSlice";
import {useNavigate} from "react-router-dom";

const RegistrationPage = () => {
    const classes = useStyles();
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [status, setStatus] = useState('');
    const usersData = useAppSelector(state => state.auth.usersData);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e: React.SyntheticEvent): void => {
        e.preventDefault();
        setStatus('loading');
        setTimeout(() => {
            if (usersData.some(user => user.userName === userName)) {
                setStatus('error')
            } else {
                dispatch(register({userName, password: userPassword}))
                navigate('/login')
            }
        }, 3000)
    }

    return (
        <Box className={classes.root}>
            <Box className={classes.title}>
                Registration
            </Box>
            <form className={classes.form}>
                <TextField
                    disabled={status === 'loading'}
                    label="username"
                    id="user-name"
                    value={userName}
                    onChange={(e) => {
                        setStatus('');
                        setUserName(e.target.value);
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
                        setStatus('');
                        setUserPassword(e.target.value);
                    }}
                    type="password"
                    className={classes.input}
                    error={status === 'error'}
                />
                {status === 'error' && <Box sx={{color: 'red'}}>Такой пользователь уже существует</Box>}
                <LoadingButton loading={status === 'loading'} type="submit" onClick={(e) => handleSubmit(e)}>
                    Submit
                </LoadingButton>
            </form>
        </Box>
    );
};

export default RegistrationPage;
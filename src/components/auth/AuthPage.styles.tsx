import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles({
    root: {
        padding: '24px 24px'
    },
    title: {
        textAlign: 'center',
        marginBottom: '20px'
    },
    inputRoot: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
        margin: '0 auto',
    },
    input: {
        maxWidth: '250px',
        '& .MuiInputBase-root': {
            marginBottom: '20px',
        }
    },
    submit: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    error: {
        color: 'red',
    }
})
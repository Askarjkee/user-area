import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles({
    root: {
        padding: '24px 24px'
    },
    title: {
        textAlign: 'center',
        marginBottom: '20px',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        maxWidth: '250px',
        '& .MuiInputBase-root': {
            marginBottom: '20px',
        }
    }
})
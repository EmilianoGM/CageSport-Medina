import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    errorTitle: {
        color: 'white',
        textAlign: 'center',
        margin: '5px auto',
        fontSize: '2em'
    }
});


export const Error = (props) => {
    const classes = useStyles();

    return (<>
        <h1 className={classes.errorTitle}>Parece que hubo un problema.</h1>
    </>);

}
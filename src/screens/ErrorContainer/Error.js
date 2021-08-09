import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    errorStyle: {
        textAlign: 'center',
        margin: '5px auto',
        fontSize: '2em'
    },
    black: {
        color: 'black',
    },
    white: {
        color: 'white'
    }
});

export const Error = (props) => {
    const {title, message, light} = (props.location && props.location.state) || (props);
    const classes = useStyles();

    return (<>
        { title && message ? <>
            <h1 className={`${classes.errorStyle} ${light ? classes.white : classes.black}`} >{title}</h1>
            <p className={`${classes.errorStyle} ${light ? classes.white : classes.black}`} >{message}</p>
        </> : <h1 className={`${classes.errorStyle} ${classes.white}`}>Parece que hubo un problema.</h1>}
        {props.children}
    </>);

}
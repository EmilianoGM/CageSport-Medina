import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    errorStyle: {
        color: 'white',
        textAlign: 'center',
        margin: '5px auto',
        fontSize: '2em'
    }
});

export const Error = (props) => {
    const {title, message} = (props.location && props.location.state) || {};
    (() => {console.log("title", title)})();
    const classes = useStyles();

    return (<>
        { title && message ? <>
            <h1 className={classes.errorStyle}>{title}</h1>
            <p className={classes.errorStyle}>{message}</p>
        </> : <h1 className={classes.errorStyle}>Parece que hubo un problema.</h1>}
        {props.children}
    </>);

}
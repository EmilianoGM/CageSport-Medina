import React from 'react';
import {IconButton} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import useStyles from './ModalStyles';

export const Modal = props => {
    const classes = useStyles();
    const {flag, title, setFlag, children} = props;

    return (
        <div className={classes.modal + " " + (flag ? classes.show : classes.hide)}  >
            <div className={classes.modalContent + " slide-in-top"} >
                <div className={classes.modalHeader}>
                    <IconButton onClick={() => {setFlag()}} aria-label="close" className={classes.closeButton}>
                        <CloseIcon />
                    </IconButton>
                    <h1 className={classes.dialogTitle}> {title} </h1>      
                </div>
                <div className={classes.modalBody}>
                    {children}
                </div>
            </div>
        </div>
    );
}
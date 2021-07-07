import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Button} from '@material-ui/core';

import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    customForm: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorMessage: {
        textAlign: 'center',
        fontSize: '0.6em',
        color: 'red'
    },
    customInput:{
        width: '100%'
    },
    actionsContainer: {
        marginTop: '10px'
    },
    totalContainer: {
        display: 'flex',
    },
    total: {
        fontSize: "1.5em",
        fontFamily: "Bebas Neue",
        margin: 'auto 0px'
    },
    submitContainer: {
        textAlign: "right"
    },
    submmitButton: {
        fontSize: "1.2em",
        backgroundColor: "white",
        padding: 5,
        fontFamily: "Bebas Neue",
        border: "5px solid #95273D",
        '&:hover': {
            borderColor: "white",
            color: "white",
            backgroundColor: "#FF5F5F"
        }
    },
}));

const ordenInitialState = {
    firstName: '',
    lastName: '',
    phone: '',
    email: ''
}

const errorInitialState = {
    firstName: false,
    lastName: false,
    phone: false,
    email: false,
    emailConfirmation: false
}

const validationsRegEx = {
    firstName: /^[a-zA-ZáéíóúÁÉÍÓÚ][a-zA-ZáéíóúÁÉÍÓÚ \s]*$/,
    lastName: /^[a-zA-ZáéíóúÁÉÍÓÚ][a-zA-ZáéíóúÁÉÍÓÚ \s]*$/,
    phone: /^[0-9]{8,11}$/,
    email: /^[^\s@]+@[^\s@]+$/
}

const validationMessages = {
    firstName: 'El nombre solo puede contener letras y apostrofes.',
    lastName: 'El apellido solo puede contener letras y apostrofes.',
    phone: 'Solo admite números sin guiones. Minimo 8 caracteres, Máximo 11.',
    email: 'Debe tener formato de correo / email',
}

export const Order = props => {
    const { closed, handleClose } = props;
    const classes = useStyles();
    const [errors, setErrors] = useState(errorInitialState);
    const [ordenForm, setOrdenForm] = useState(ordenInitialState);

    const handleChange = e => {
        //console.log("Evento change:", e);
        const { name, value } = e.target;
        const regExp = validationsRegEx[name];
        if(!regExp.test(value)){
            setErrors({...errors, [name]: true});
        } else {
            setErrors({...errors, [name]: false});
            setOrdenForm({
                ...ordenForm,
                [name]: value
            });        
        }
    }

    const handleChangeEmailConfirmation = e => {
        const { name, value } = e.target;
        if(ordenForm['email'].localeCompare(value) !== 0){
            setErrors({...errors, [name]: true});
        } else {
            setErrors({...errors, [name]: false});
        }
    }

    const submitOrder = e => {
        console.log("Evento form:", e);
        e.preventDefault();
        //props.addOrden(ordenForm);
        let formValidation = true;
        for(const prop in ordenForm){
            let regExp = validationsRegEx[prop];
            if(!regExp.test(ordenForm[prop])){
                formValidation = false;
                break;
            }
        }
        if(formValidation){
            console.log("suceso");
            addNewOrder();
            handleClose();
        } else {
            console.log("error");
        }
    }

    const addNewOrder = () => {
        const date = new Date();
        let newOrder = {...ordenForm, date: date};
        console.log("Orden:", newOrder);
    }

    useEffect(() => {
        if(closed){
            setErrors(errorInitialState);
            setOrdenForm(ordenInitialState);
        }
    }, [closed]);

    return (
        <form onSubmit={submitOrder} className={classes.customForm}>
            <TextField placeholder="Ingresa tu nombre." className={classes.customInput} error={errors['firstName']} name="firstName" label="Nombre" required onChange={handleChange} />
            {errors['firstName'] ? <div className={classes.errorMessage}>
                {validationMessages['firstName']}
            </div> : <></>}
            <TextField placeholder="Ingresa tu apellido" className={classes.customInput} error={errors['lastName']} name="lastName" label="Apellido" required onChange={handleChange} />
            {errors['lastName'] ? <div className={classes.errorMessage}>
                {validationMessages['lastName']}
            </div> : <></>}
            <TextField placeholder="Tu teléfono sin guiones ni espacios." className={classes.customInput} error={errors['phone']} name="phone" label="Telefono" required onChange={handleChange} />
            {errors['phone'] ? <div className={classes.errorMessage}>
                {validationMessages['phone']}
            </div> : <></>}
            <TextField placeholder="Introducí tu email." className={classes.customInput} error={errors['email']} name="email" label="Email" required onChange={handleChange} />
            {errors['email'] ? <div className={classes.errorMessage}>
                {validationMessages['email']}
            </div> : <></>}
            <TextField placeholder="Volvé a introducir tu email." className={classes.customInput} error={errors['emailConfirmation']} name="emailConfirmation" label="Confirmacion email" required onChange={handleChangeEmailConfirmation} />
            {errors['emailConfirmation'] ? <div className={classes.errorMessage}>
                Los dos emails deben coincidir.
            </div> : <></>}
            <Grid className={classes.actionsContainer} container direction="row" alignItems="stretch">
                <Grid className={classes.totalContainer} item xs={6}>
                    <div className={classes.total}> Total: ${props.total}</div>
                </Grid>
                <Grid className={classes.submitContainer} item xs={6}>
                    <Button type='submit' className={classes.submmitButton}>
                        Finalizar pago
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
}
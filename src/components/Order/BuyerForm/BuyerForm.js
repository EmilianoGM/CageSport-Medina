import React, {useState, useEffect} from 'react';
import useStyles from './BuyerFormStyle';
import {Grid, Button, TextField} from '@material-ui/core';

/**
 * Clase con keys fistName, lastName, phone y email.
 */
class BuyerInfo {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
    }
}

const formInitialState = new BuyerInfo('', '', '', ''); 
const errorInitialState = {...new BuyerInfo( false, false, false, false), emailConfirmation: false};
const validationsRegEx = new BuyerInfo (
    /^[a-zA-ZáéíóúÁÉÍÓÚ][a-zA-ZáéíóúÁÉÍÓÚ \s]*$/,
    /^[a-zA-ZáéíóúÁÉÍÓÚ][a-zA-ZáéíóúÁÉÍÓÚ \s]*$/,
    /^[0-9]{8,11}$/,
    /^[^\s@]+@[^\s@]+$/
);
const validationMessages = new BuyerInfo( 
    'El nombre solo puede contener letras y apostrofes.',
    'El apellido solo puede contener letras y apostrofes.',
    'Solo admite números sin guiones. Minimo 8 caracteres, Máximo 11.',
    'Debe tener formato de correo / email',
);

/**
 * Muestra un formulario para introducir nombre, apellido, email, confirmacion de email y telefono del comprador.
 * @param {*} props ended: Dialog cerrado true/false | addOrder: function, recibe data del comprador | totalPrice: number, precio total.  
 * @returns 
 */
export const BuyerForm = props => {
    const { ended, addOrder, totalPrice} = props;
    const classes = useStyles();
    const [inputErrors, setInputErrors] = useState(errorInitialState); //errores en inputs.
    const [buyerFormData, setBuyerFormData] = useState(formInitialState); //datos del comprador
    const [formError, setFormError] = useState(false);
    /**
     * Maneja el cambio en un input del formulario y contrasta su valor con las validaciones comprobando errores.
     * @param {*} e Evento.
     */
    const handleChange = e => {
        const { name, value } = e.target;
        const regExp = validationsRegEx[name];
        if(!regExp.test(value)){
            setInputErrors({...inputErrors, [name]: true});
        } else {
            setInputErrors({...inputErrors, [name]: false});
            setBuyerFormData({
                ...buyerFormData,
                [name]: value
            });        
        }
    }

    /**
     * Maneja la confirmacion del email introducido en el input.
     * @param {*} e Evento
     */
    const handleChangeEmailConfirmation = e => {
        const { name, value } = e.target;
        if(buyerFormData['email'].localeCompare(value) !== 0){
            setInputErrors({...inputErrors, [name]: true});
        } else {
            setInputErrors({...inputErrors, [name]: false});
        }
    }

    /**
     * Envía la informacion del comprador para la orden, previa validación de la información recibida.
     * @param {*} e Evento.
     */
    const submitOrder = e => {
        e.preventDefault();
        let formValidation = true;
        for(const prop in buyerFormData){
            let regExp = validationsRegEx[prop];
            if(!regExp.test(buyerFormData[prop])){
                formValidation = false;
                break;
            }
        }
        if(formValidation){
            setFormError(false);
            addOrder(buyerFormData);
        } else {
            setFormError(true);
        }
    }

    useEffect(() => {
        if(ended){
            setInputErrors(errorInitialState);
            setBuyerFormData(formInitialState);
        }
    }, [ended]);

    return (
        <form onSubmit={submitOrder} className={classes.customForm}>
            <TextField placeholder="Ingresa tu nombre." className={classes.customInput} error={inputErrors['firstName']} name="firstName" label="Nombre" required onChange={handleChange} />
            {inputErrors['firstName'] ? <div className={classes.errorMessage}>
                {validationMessages['firstName']}
            </div> : <></>}
            <TextField placeholder="Ingresa tu apellido" className={classes.customInput} error={inputErrors['lastName']} name="lastName" label="Apellido" required onChange={handleChange} />
            {inputErrors['lastName'] ? <div className={classes.errorMessage}>
                {validationMessages['lastName']}
            </div> : <></>}
            <TextField placeholder="Tu teléfono sin guiones ni espacios." className={classes.customInput} error={inputErrors['phone']} name="phone" label="Telefono" required onChange={handleChange} />
            {inputErrors['phone'] ? <div className={classes.errorMessage}>
                {validationMessages['phone']}
            </div> : <></>}
            <TextField placeholder="Introducí tu email." className={classes.customInput} error={inputErrors['email']} name="email" label="Email" required onChange={handleChange} />
            {inputErrors['email'] ? <div className={classes.errorMessage}>
                {validationMessages['email']}
            </div> : <></>}
            <TextField placeholder="Volvé a introducir tu email." className={classes.customInput} error={inputErrors['emailConfirmation']} name="emailConfirmation" label="Confirmacion email" required onChange={handleChangeEmailConfirmation} />
            {inputErrors['emailConfirmation'] ? <div className={classes.errorMessage}>
                Los dos emails deben coincidir.
            </div> : <></>}
            <Grid className={classes.actionsContainer} container direction="row" alignItems="stretch">
                <Grid className={classes.totalContainer} item xs={6}>
                    <div className={classes.total}> Total: ${totalPrice}</div>
                </Grid>
                <Grid className={classes.submitContainer} item xs={6}>
                    <Button type='submit' className={classes.submmitButton}>
                        Finalizar pago
                    </Button>
                </Grid>
            </Grid>
            { formError ? <div className={classes.errorMessage}>Revisa los datos del formulario.</div> : <></> }
        </form>
    );
}
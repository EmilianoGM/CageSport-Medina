import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CartContext } from '../../contexts/CartContext/CartContext';
import { Button} from '@material-ui/core';
import {Dialog, DialogTitle, DialogContent} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import {Order} from '../Order/Order';
import { addOrderDocument } from '../../services/CloudFirestoreService';

const useStyles = makeStyles((theme) => ({
    customDialog:{
        width: '70%'
    },
    dialogTitle: {
        fontFamily: "Bebas Neue",
        color: '#95273D',
        fontSize: '1.5em'
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: 'white',
        backgroundColor: '#FFBCBC',
        '&:hover': {
            color: '#E61A1A',
            backgroundColor : '#D2D2D2'
        }
    }
}));

/*
<IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
 */


export const CustomDialog = props => {
    const { totalPrice } = props;
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const { itemsCompraArray, clearCart } = useContext(CartContext);
    
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    /*
    {item: id, titulo, detalle, precio, imagenUrl }
     */
    const generateOrder = (buyer) => {
        let date = new Date();
        let newItemsArray = [];
        itemsCompraArray.forEach(element => {
            let data = {
                id: element.item.id,
                title: element.item.titulo,
                price: element.item.precio,
                quantity: element.quantity
            }
            newItemsArray.push(data);
        });
        const newOrder = {
            buyer: buyer,
            items: newItemsArray,
            date: date,
            total: totalPrice
        }
        return newOrder;
    }
    
    const addNewOrder = (buyer) => {
        const newOrder = generateOrder(buyer);
        try{
            addOrderDocument(newOrder).then((docRef) => {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
        } catch(error) {
            console.log("Firebase add doc error:", error);
        }
    }
    /*
    const handleBlur = e => {
        const { name, value } = e.target;
        console.log("Name:", name);
        let regExp = /^[a-zA-ZáéíóúÁÉÍÓÚ][a-zA-ZáéíóúÁÉÍÓÚ \s]*$/;
        //let regExp = new RegExp('/^[a-zA-ZáéíóúÁÉÍÓÚ][a-zA-ZáéíóúÁÉÍÓÚ \s]*$/');
        let newError = {};
        if(!regExp.test(value)){
            //newError[name] = ['pattern'];
            //console.log("new errors", newError);
            setErrors(errors => [{...errors, [name]: ['pattern']}] );
            console.log('Errores', errors);
        }
    }*/

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Open dialog
            </Button>
            <Dialog fullWidth maxWidth='md' onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="form-dialog-title">
                    <span className={classes.dialogTitle}>Orden de pago</span>
                    <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    <Order addOrder={addNewOrder} totalPrice={totalPrice} handleClose={handleClose}/>
                </DialogContent>
            </Dialog>
        </div>
    );
}

/*
/^[^\s@]+@[^\s@]+$/
/^[0-9]{8,11}$/
/^[a-zA-ZáéíóúÁÉÍÓÚ][a-zA-ZáéíóúÁÉÍÓÚ \s]*$/
*/

/*
<form onSubmit={newOrden} className={classes.customForm}>
                        <div className={classes.formGroup}>
                            <label htmlFor="nombre">Nombre</label>
                            <input type="text" name="firstName" id="nombre"
                            onChange={handleChange}  required/>
                            { errors['firstName'] ? <div className={classes.errorMessage}>
                                {validationMessages['firstName']}
                            </div>: <></> }  
                        </div>
                        <div className={classes.formGroup}>
                            <label htmlFor="apellido">Apellido</label>
                            <input type="text" name="lastName" id="apellido"
                            onChange={handleChange}  required/>
                            { errors['lastName'] ? <div className={classes.errorMessage}>
                                {validationMessages['lastName']}
                            </div>: <></> }  
                        </div>
                        <div className={classes.formGroup}>
                            <label htmlFor="telefono">Telefono</label>
                            <input type="text" name="phone" id="telefono"
                            onChange={handleChange}  required/>
                            { errors['phone'] ? <div className={classes.errorMessage}>
                                {validationMessages['phone']}
                            </div>: <></> }  
                        </div>
                        <div className={classes.formGroup}>
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" id="email"
                            onChange={handleChange}  required/>
                            { errors['email'] ? <div className={classes.errorMessage}>
                                {validationMessages['email']}
                            </div>: <></> }  
                        </div>
                        <Button type='submit' onClick={handleClose} color="primary">
                            Subscribe
                        </Button>
                    </form>


<form onSubmit={newOrden} className={classes.customForm}>
    <TextField name="firstName" label="Nombre" required onChange={handleChange} />
    { errors['firstName'] ? <div className={classes.errorMessage}>
                                {validationMessages['firstName']}
                            </div>: <></> } 
    <TextField name="lastName" label="Apellido" required onChange={handleChange} />
    { errors['lastName'] ? <div className={classes.errorMessage}>
                                {validationMessages['lastName']}
                            </div>: <></> }  
    <TextField name="phone" label="Telefono" required onChange={handleChange} />
    { errors['phone'] ? <div className={classes.errorMessage}>
                                {validationMessages['phone']}
                            </div>: <></> }  
    <TextField name="email" label="Email" required onChange={handleChange} />
    { errors['email'] ? <div className={classes.errorMessage}>
                                {validationMessages['email']}
                            </div>: <></> }
    <Button type='submit' onClick={handleClose} color="primary">
        Subscribe
    </Button>
</form>

Errores -> con un mensaje o como obtenerlo, para quien
key: para quien, busqueda dinamica
value: tipos de errores
 [name field]: [tipo,]
 {
    firtName: [pattern, required],
    lastName: [pattern, required],
    phone: [pattern, required, min],
    email: [pattern, required]
 }
*/
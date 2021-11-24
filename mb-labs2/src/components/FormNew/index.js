import React from "react";
import Field from "../Field";
import Form from "../Form";
import {useForm} from 'react-hook-form';
import Button from "../Button";


const FormNew = () => {
    const { register, handleSubmit } = useForm ();
    
    const newUser = (user) => {
    console.log(user)
};
    return(
    <Form onSubimit = {handleSubmit (newUser)}>
    <Field.Text label = "Cidade do Evento" name = "name" type = "name" register={register}/> 
    <Field.Text label = "CEP" name = "name" type = "name"/> 
    <Field.Text label = "Email" name = "email" type = "email"/> 
    

    <Button>Enviar</Button>
     </Form>

);
    };

export default FormNew;
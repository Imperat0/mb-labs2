import React from "react";
import Field from "../Field";
import Form from "../Form";
import {useForm} from 'react-hook-form';
import Button from "../Button";


const FormNew = () => {
    const { register, handleSubmit  } = useForm ();
    
    const newUser = (user) => {
    console.log(user)
};
    return(
    <Form onSubimit = {handleSubmit (newUser)}>
    <Field.Text label = "Cidade do Evento" name = "name" type = "name" register={register}/> 
    <Field.Text label = "CEP" name = "name" type = "name" register={register}/> 
    <Field.Text label = " Seu E-mail" name = "email" type = "email" register={register}/> 
    <Field.Text label = "Estado" name = "name" type = "name" register={register}/>
    <Field.Text label = "Categoria" name = "name" type = "name" register={register}/>
    <Field.Text label = "Idade" name = "name" type = "number" register={register}/>
    
    

    <Button>Enviar</Button>
     </Form>

);
    };

export default FormNew;
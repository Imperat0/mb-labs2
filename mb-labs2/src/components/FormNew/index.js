import React from "react";
import Field from "../Field";
import Form from "../Form";
import {useForm} from 'react-hook-form';
import Button from "../Button";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from 'yup';

const FormNew = () => {
    
    const schema = yup.object().shape({
        name: yup.string().min(2).required(),
        cep: yup.string().min(8).max(8).required(),
        email: yup.string().email().required(),
        presencial: yup.string().min(2).required(),
        categoria: yup.string().min(2).required(),
        idade: yup.string().min(2).max(3).required(),
        tipo: yup.string().min(2).required(),
      })

    const { register, handleSubmit   } = useForm ({
        resolver: yupResolver(schema),
    });

    
    
    const newUser = (user) => {
    console.log(user)
};
    return(
    
    <Form onSubmit = {handleSubmit (newUser)}>
    <Field.Text label = "Cidade do Evento" name = "name" type = "name" register={register}/> 
    <Field.Text label = "CEP do Evento" name = "cep" type = "name" register={register}/> 
    <Field.Text label = " Seu E-mail" name = "email" type = "email" register={register}/> 
    <Field.Text label = "Presencial ou Online" name = "presencial" type = "text" register={register}/>
    <Field.Text label = "Categoria do Evento" name = "categoria" type = "text" register={register}/>
    <Field.Text label = "Faixa de idade" name = "idade" type = "number" register={register}/>
    <Field.Text label = "Qual é o tipo do Evento?" name = "tipo" type = "text" register={register}/>
    

    <Button>Buscar</Button>
     </Form>

);
    };

export default FormNew;
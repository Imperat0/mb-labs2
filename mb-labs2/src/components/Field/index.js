import React from "react";
import Input from "./Field/Input";
import Label from "./Label";
import Content from "./Content";

const Text = ( {label, type, name } ) => (
   <Label>
       <Content>{label}</Content>
       <Input type ={type} name = {name} />
   </Label>
);

const Field = {
    Text,
};

export default Field;
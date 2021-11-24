import React from "react";
import Field from "./components/Field";
import Form from "./components/Form";
import Main from "./components/Main";


function App() {
  return (
           <Main>
            <Form>
           <Field.Text label = "Cidade do Evento" name = "name" type = "name"/> 
            </Form>
          </Main>
  );
}

export default App;

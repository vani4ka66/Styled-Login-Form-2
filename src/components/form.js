//implement the styled-components logic here.
import React from "react";
import Button from "./Button";
import Input from "./Input";
import styled from 'styled-components'

const FormWrapper = styled.div`
        display: flex;
        flex-direction: column;
        width: 100%;
`

export default class Form extends React.Component{

    render(){
        return (<FormWrapper>
            
            <Input name='email' />
            <Input name="password" />
            <Button />

            </FormWrapper>) 
    }
}
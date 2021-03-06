//implement the styled-components logic here.
import React from "react";
import styled from 'styled-components'

const CardWrapper = styled.div`
        box-sizing: border-box;
        max-width: 410px;
        margin: 0 auto;
        padding: 0 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
`

const FormWrapper = styled.form`
        display: flex;
        flex-direction: column;
        width: 100%;
`

const InputWrapper = styled.input`
    padding: 1rem;
    border: 1px solid #999;
    margin-bottom: 1rem;
    font-size: 0.8rem;
  `

const StyleButton = styled.button`
        background: linear-gradient(to bottom, #6371c7, #5563c1);
        border-color: #3f4eae;
        border-radius: 3px;
        padding: 1rem;
        color: white;
        font-weight: 700;
        width: 100%;
        margin-bottom: 1rem;
        font-size: 0.8rem;
        cursor: pointer;
        `

export default class Form extends React.Component{

    render(){
        return (
        <CardWrapper>
            <FormWrapper>
            
                <InputWrapper name='email'></InputWrapper>
                <InputWrapper name="password"></InputWrapper>
                <StyleButton type="submit">Submit</StyleButton>

                </FormWrapper>
            </CardWrapper>) 
    }
}

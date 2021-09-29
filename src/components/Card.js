import React from "react";
import Form from "./form";
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

export default class Card extends React.Component{
    render(){
        return <CardWrapper>
            <Form />
        </CardWrapper>
    }
}
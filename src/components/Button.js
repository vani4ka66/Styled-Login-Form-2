import React from "react";
import styled from 'styled-components'

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

export default class Button extends React.Component{

   render(){
       return (
            <StyleButton type="submit">Submit</StyleButton>
       )
   }
        
}
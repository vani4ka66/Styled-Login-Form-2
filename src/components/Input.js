import React from "react";
import styled from 'styled-components'


const InputWrapper = styled.input`
    padding: 1rem;
    border: 1px solid #999;
    margin-bottom: 1rem;
    font-size: 0.8rem;
  `

export default class Input extends React.Component{
    constructor(props){
        super()
    }

    render(){
        return <InputWrapper name={this.props.name} placeholder={this.props.name} ></InputWrapper>
    }
}
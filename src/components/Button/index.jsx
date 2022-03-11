import React from "react";
import styled from 'styled-components'

const Button = ({children, onClick}) => {

    return (
        <StyledButton onClick={onClick}> {children} </StyledButton>
    )
}

const StyledButton = styled.button`
    padding: 10px 30px;
    margin-top: 10px;
    border-radius: 10px;
    align-self: center;
    background-color: #444140;
    color: white;
    border: none;
    cursor: pointer;
    font-weight: bold;
    font-size: 2em;
    &:hover {
        box-shadow: 5px 5px 5px gray;
    }
    &:active {
        background-color: #656160;
        box-shadow: 0 5px #666;
        transform: translateY(4px);
`

export  default Button
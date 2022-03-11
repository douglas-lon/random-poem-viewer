import React from 'react'
import styled from 'styled-components'

const Card = ({index, title, author, onClick}) => {

    return (
        <StyledArticle onClick={() => {onClick(index)}}>
            <StyledTitle> {title} </StyledTitle>
            <StyledSpan>From: {author} </StyledSpan>
        </StyledArticle>
    )
}

const StyledTitle = styled.h4`
    margin: 0;
    font-size: 1.2em;
`
const StyledSpan = styled.p`
    margin-top: 5em;
`

const StyledArticle = styled.article`
    margin-top: 3em;
    padding: 20px;
    min-height: 10em;
    width: auto;
    text-align: justify;
    border-radius: 10px;
    box-shadow: 7px 7px 5px #D9CDCB;
    background-color: #FCF9F8;
    flex-basis: 25%;
    &:hover {
        cursor: pointer;
        background-color: #ebe8e7;
    }
`

export default Card
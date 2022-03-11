import React, {Fragment} from "react";
import styled from 'styled-components'

const Reader = ({title, lines, author}) => {

    const renderLines = (line, index) => (
        <Fragment key={index}>
            <StyledP> {line} </StyledP>
        </Fragment>
    )

    return (
        <StyledArticle>
            <StyledTitle> {title} </StyledTitle>
            <div>
                {lines.map(renderLines)}
            </div>
            <StyledAuthor> {author} </StyledAuthor>
        </StyledArticle>
    )
}

const StyledP = styled.p`
    margin: 0;
    margin-bottom: 0.3em;
`
const StyledAuthor = styled.p`
    align-self: flex-end;
    font-style: oblique;
    font-size: 1.1em;
`

const StyledTitle = styled.h4`
    margin: 0;
    margin-bottom: 1em;
    font-size: 1.5em;
`

const StyledArticle = styled.article`
    display:flex;
    flex-direction: column;
    text-align: justify;
    padding: 2em;
    margin-top: 1em;
    margin-bottom: 1em;
    max-width: 40em;
    text-align: justify;
    border-radius: 10px;
    box-shadow: 7px 7px 5px #D9CDCB;
    background-color: #FCF9F8;
    align-self: center;
`

export default Reader
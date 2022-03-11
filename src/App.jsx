import React, { Fragment, useState, useEffect } from "react";
import Card from "./components/Card";
import Button from "./components/Button";
import { getPoems } from "./services/poemApi";
import { Layout } from "./global/styles";
import styled from 'styled-components'
import Reader from "./components/Reader";

function App() {

    const [poems, setPoems] = useState(null)
    //const [isReading, setIsReading] = useState(false)
    const [whichPoem, setWhichPoem] = useState(-1)

    const fetchPoems = async () => {
        let p = await getPoems()
        setPoems(p)
    }

    const readPoem = (i) => {
        setWhichPoem(i)
    }

    const leaveReader = () => {
        setWhichPoem(-1)
    }

    const showPoems = (poem, index) => (
        <Fragment key={index}>
            <Card
                index={index}
                {...poem}
                onClick={readPoem}
            />
        </Fragment>
    )

    const MyCards = (
        <SCardWrapper>
            {poems && poems.map(showPoems) }
        </SCardWrapper>
    )

    return  (
        <Layout>
            {whichPoem > 0 ? <Button onClick={leaveReader} > Back to All </Button> : <Button onClick={fetchPoems}> Randomize </Button>}
            
            {whichPoem > 0 ? <Reader {...poems[whichPoem]}  /> : MyCards}
            
        </Layout>
    )
}

const SCardWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    padding-left: 1em;
    padding-right: 1em;
    padding-bottom: 1em;
`

export default App;

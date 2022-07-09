import React from "react";
import styled from "styled-components";

const GameSelection = () => {
    return (
        <PageContainer>
            
                <GameContainer order={1}></GameContainer>
                <GameContainer order={2}></GameContainer>
                <GameContainer order={3}></GameContainer>
                <GameContainer order={4}></GameContainer>
                <GameContainer order={5}></GameContainer>
                <GameContainer order={6}></GameContainer>
        </PageContainer>
    )
}

export default GameSelection;

const PageContainer = styled.div `
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: purple;

`

const GameContainer = styled.div<GameProps>`
    position: absolute;
    top: ${props => props.order <= 3 ? "0": "0"};
    background-color: #eaeaea;
    height: 200px;
    width: 200px;
`

interface GameProps {
    order: number
}

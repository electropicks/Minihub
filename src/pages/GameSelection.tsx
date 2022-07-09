import React from "react";
import styled from "styled-components";

const GameSelection = () => {
    return (
        <PageContainer>
            <GameTable>
                    <GameContainer order={1}></GameContainer>
                    <GameContainer order={2}></GameContainer>
                    {/* <GameContainer order={3}></GameContainer>
                    <GameContainer order={4}></GameContainer>
                    <GameContainer order={5}></GameContainer>
                    <GameContainer order={6}></GameContainer> */}
            </GameTable>
        </PageContainer>
    )
}

export default GameSelection;

const GameTable = styled.table `
    position: absolute;
    overflow-x: auto;
    flex-wrap: wrap;
    flex-direction: row;
    top: 5%;
    left: 5%;
    width: 90%;
    height: 90%;
    background-color: #ffe1c6;
    display: flex;
    justify-content: space-around;
    align-items: center;
    align-content: center;
`

const PageContainer = styled.div `
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    background-color: #2f4858;

`

const GameContainer = styled.div<GameProps>`
    position: relative;
    background-color: #e3655b;
    height: 200px;
    width: 200px;
    margin: 10px;
`

interface GameProps {
    order: number
}

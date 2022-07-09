import React from "react";
import styled from "styled-components";

const GameSelection = () => {
    return (
        <div>
        <GameContainer order={1}></GameContainer>
        <GameContainer order={2}></GameContainer>
        <GameContainer order={3}></GameContainer>
        <GameContainer order={4}></GameContainer>
        <GameContainer order={5}></GameContainer>
        <GameContainer order={6}></GameContainer>
        </div>
    )
}

export default GameSelection;

const GameContainer = styled.div<GameProps>`
    position: absolute;
    top: ${props => props.order < 4 ? "30%" : "60%"};
    left: ${props => (props.order > 3 ? props.order - 3 : props.order) * 25 + "%" };
    background-color: #eaeaea;
    height: 200px;
    width: 200px;
`

interface GameProps {
    order: number
}

import React from "react";
import styled from "styled-components";

const GameSelection = () => {
    return (
        <GameContainer order={6}></GameContainer>
    )
}

export default GameSelection;

const GameContainer = styled.div<GameProps>`
    position: absolute;
    top: ${props => props.order < 4 ? "30%" : "60%"};
    left: ${props => (props.order > 3 ? props.order - 3 : props.order) * 25 + "%"};
    border: 20px solid green;
`

interface GameProps {
    order: number
}
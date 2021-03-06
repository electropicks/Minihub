import styled from "styled-components";
import React from 'react';
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <PageContainer>
      <HomeContainer>
        <Title>MINIHUB</Title>
        <DescriptionContainer>
          <DescriptionParagraph>
            Welcome!
          </DescriptionParagraph>
          <DescriptionParagraph>
            We're building cool things, and we'd like to share them with you.
          </DescriptionParagraph>
          <DescriptionParagraph>
            Made with {["โค๏ธ", "๐", "๐งก", "๐", "๐", "๐", "๐", "๐ค"][Math.floor(Math.random() * 8)]} by Liam &amp; Leo
          </DescriptionParagraph>
        </DescriptionContainer>

        <ButtonContainer>
          <EnterButton>
            <EnterButtonText onClick={() => navigate('/GameSelection')}>LET'S GO</EnterButtonText>
          </EnterButton>
        </ButtonContainer>
      </HomeContainer>
    </PageContainer>
  )
}

export default Home;

const HomeContainer = styled.div`
  background-color: #eaeaea;
  border-radius: 17px;
  width: 80vw;
  height: 630px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  
  @media screen and (min-width: 500px) {
    width: 450px;
  }

`

const Title = styled.div`
  font-family: 'Bebas Neue';
  margin: 15px;
  color: black;
  font-size: 79px;
  text-shadow: 1px 1px 0.25mm #a45959, 2px 2px 0.25mm #a48559, 3px 3px 0.25mm #a3a459, 4px 4px 0.25mm #68a459, 5px 5px 0.25mm #59a3a4, 6px 6px 0.25mm #5963a4, 7px 7px 0.25mm #6959a4;
`
const DescriptionContainer = styled.div`
  padding: 40px;
  color: #4b4b4b;
  font-family: 'Noto Sans';
  font-size: 20px;
  flex-grow: 1;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const DescriptionParagraph = styled.div`
  margin: 7px;
  width: 100%;
  text-align: center;
`
const ButtonContainer = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const EnterButton = styled.button`
  width: 80%;
  height: 50%;
  border-radius: 17px;
  border-width: 0px;
  background-color: #ffd27e;
  transition: all 250ms;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`

const EnterButtonText = styled.div`
  font-family: 'Bebas Neue';
  font-size: 49px;
  color: white;
`

const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: scroll;
`
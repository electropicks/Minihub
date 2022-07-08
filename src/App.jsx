import styled from "styled-components";

function App() {
  return (
    <PageContainer>
      <HomeContainer>
        <Title>MINIHUB</Title>
        <DescriptionContainer>
          <DescriptionParagraph>
            Welcome!
          </DescriptionParagraph>
          <DescriptionParagraph>
            This is a space for Liam &amp; Leo to collaborate. We're excited to share this space with you.
          </DescriptionParagraph>
          <DescriptionParagraph>
            Jump in below.
          </DescriptionParagraph>
        </DescriptionContainer>

        <ButtonContainer>
          <EnterButton>
            <EnterButtonText>LET'S GO</EnterButtonText>
          </EnterButton>
        </ButtonContainer>
      </HomeContainer>
    </PageContainer>
  )
}

export default App;

const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const HomeContainer = styled.div`
  background-color: #eaeaea;
  border-radius: 17px;
  width: 80vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;

  @media screen and (min-width: 500px) {
    width: 450px;
  }

  @media screen and (min-height: 700px) {
    height: 630px;
  }
`
const Title = styled.div`
  font-family: 'Bebas Neue';
  margin: 15px;
  color: black;
  font-size: 79px;
  text-shadow: 1px 1px #a45959, 2px 2px #a48559, 3px 3px #a3a459, 4px 4px #68a459, 5px 5px #59a3a4, 6px 6px #5963a4, 7px 7px #6959a4;
`
const DescriptionContainer = styled.div`
  padding: 30 px;
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
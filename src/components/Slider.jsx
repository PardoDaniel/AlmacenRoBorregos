import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import logo from './Integrado.png';
import logo2 from './roborregos.png';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    background-color: #1F4690;
    overflow: hidden;
`
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;

`
const Wrapper = styled.div`
  height: 100%;
  display: flex;
`
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`
const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 80%;
`
const InfoContainer = styled.div`
  flex: column;
  padding: 50px;
`;
const Title = styled.h1`
  font-size: 70px;
  color: white;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  color: white;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  color: white;
`;
function Slider() {
/*  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
*/  
  return (
    <Container>
      <Arrow direction="left" /*onClick={()=>handleClick("left")}*/>
        <ArrowLeftOutlined/>
      </Arrow>
      <Wrapper>
        <Slide bg="1F4690">
            <ImgContainer>
              <Image src={logo} alt="Logo"/>
            </ImgContainer>
              <Title>RESERVAR TL081</Title>
              <Desc>STOCK: 10</Desc>
              <Button>RESERVAR</Button>
            <InfoContainer></InfoContainer>
        </Slide>
        <Slide bg="#6c4d91">
            <ImgContainer>
              <Image src={logo2} alt="Logo"/>
            </ImgContainer>
              <Title>RESERVAR TL081</Title>
              <Desc>STOCK: 10</Desc>
              <Button>RESERVAR</Button>
            <InfoContainer></InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right" /*onClick={()=>handleClick("right")}*/>
        <ArrowRightOutlined/>
      </Arrow>
    </Container>
  )
}

export default Slider
import React, { useState, useEffect } from "react";
import {
  Container,
  Title,
  Content,
  Logo,
  ArrowDown,
  Background,
  WrapperArrow,
} from "./main.style";
import Animation from "../../atoms/animation/animation";
import Header from "../../molecules/header/header";

const Main = () => {
  const [visibleMenu, setVisibleMenu] = useState(false);

  useEffect(() => {
    window.onscroll = function () {
      let top = window.pageYOffset || document.documentElement.scrollTop;
      if (top > 400) {
        setVisibleMenu(true);
      } else {
        setVisibleMenu(false);
      }
    };
  }, [visibleMenu, setVisibleMenu]);
  return (
    <Container>
      <Header visible={visibleMenu} />
      <Background>
        <Content>
          <Animation animation="slideInUp" duration="1s">
            <Logo src="static/logos/cura-laranja.svg" alt="logo" />
          </Animation>
          <Animation delay="0.5s">
            <Title>
              I Mostra de Artes <br />
              Cênicas Negras
              <br />
              De Porto Alegre
              <br />2 a 7 de dezembro
            </Title>
          </Animation>
        </Content>
      </Background>
      <WrapperArrow>
        <a href="#about">
          <ArrowDown src="static/icons/arrow_down.svg" alt="" />
        </a>
      </WrapperArrow>
    </Container>
  );
};

export default Main;

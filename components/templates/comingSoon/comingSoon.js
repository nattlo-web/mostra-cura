import React from "react";
import Header from "../../molecules/header1/header";
import Footer from "../../molecules/footer/footer";
import { Container, Content, Title } from "./comingSoon.style";

const ComingSoon = () => {
  return (
    <Container>
      <Header visible />
      <Content>
        <Title>Em Breve</Title>
      </Content>
      <Footer />
    </Container>
  );
};

export default ComingSoon;

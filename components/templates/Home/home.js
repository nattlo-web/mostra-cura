import React from "react";
import Main from "../../organisms/main/main";
import About from "../../organisms/about/about";
import Programming from "../../organisms/programming/programming";
import Footer from "../../molecules/footer/footer";
import ComingSoon from "../comingSoon/comingSoon";

import { Container, Content, Text } from "./home.style";
const home = () => {
  return (
    <>
      <Container>
        <Main />
        <About />
        <Programming />
      </Container>
      <Footer />
      <Content>
        <Text>Todos os direitos reservados. Mostra CURA© 2020.</Text>
      </Content> 
    </>
  );
};

export default home;

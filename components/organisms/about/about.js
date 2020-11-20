import React, { useState } from "react";
import {
  Container,
  ContentAbout,
  Text,
  Strong,
  ContentManifest,
  ButtonManifest,
  ContainerWords,
  OrangeWord,
  BlueWord,
  BrownWord,
  TransparentWord,
} from "./about.style";

import Manifest from "../../molecules/manifest/manifest";

const About = () => {
  const [openModalManifest, setOpenModalManifest] = useState(false);

  return (
    <Container id="about">
      <ContentAbout>
        <Text>
          A{" "}
          <Strong>
            {" "}
            CURA - I Mostra de Artes Cênicas Negras de Porto Alegre
          </Strong>
          , surge em um contexto pandêmico, onde as feridas que já existiam se
          ampliam e dinamizam. Nesse sentido, o evento surge como o cuidado
          necessário para o fortalecimento da dignidade negra nas disputas
          artísticas cênicas. Um evento proposto por e para artistas negras e
          negros, com o intuito de celebrar e mapear as produções e os corpos
          que produzem o antídoto contra a doença colonial, através da arte.
        </Text>
      </ContentAbout>
      <ContentManifest>
        <ButtonManifest
          onClick={() => setOpenModalManifest(!openModalManifest)}
        >
          Leia nosso manifesto
        </ButtonManifest>
        {openModalManifest && (
          <Manifest
            openModal={openModalManifest}
            setOpenModal={setOpenModalManifest}
          />
        )}
      </ContentManifest>
      <ContainerWords>
        <BrownWord className="center animation01">antídoto</BrownWord>
        <BlueWord className="end  animation03">presente</BlueWord>
        <OrangeWord className="end animation02 hideMobile ">
          feitiçarias
        </OrangeWord>
        <BlueWord className="animation03 hideMobile">
          limpar, lavar e tratar
        </BlueWord>
        <OrangeWord className="animation02">experiências negras </OrangeWord>

        <BrownWord className="center animation03">dengo</BrownWord>
        <OrangeWord className="animation03 hideMobile ">festa</OrangeWord>
        <BrownWord className="mt animation01">
          fabulação de realidades positivas
        </BrownWord>

        <BlueWord className="animation01">dignidade </BlueWord>
        <BlueWord className="center animation02">ervas</BlueWord>

        <TransparentWord>Palavra transparente</TransparentWord>

        <OrangeWord className="animation02">unguentos</OrangeWord>
        <BrownWord className="animation02">continuidade </BrownWord>

        <TransparentWord>Palavra transparente</TransparentWord>
        <BrownWord className="end animation01">ebós</BrownWord>
        <OrangeWord className="end animation01">AXÉ</OrangeWord>
        <BrownWord className="center animation03 hideMobile ">cura </BrownWord>

        <BlueWord className="animation03 hideMobile ">
          estancar o que consome a carne
        </BlueWord>
      </ContainerWords>
    </Container>
  );
};

export default About;

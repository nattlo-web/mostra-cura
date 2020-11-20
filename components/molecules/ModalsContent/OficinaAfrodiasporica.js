import React from "react";
import Modal from "../modal/modal";
import { Title, customStyleModal, Paragraph, Bold } from "./manifest.style";
// import { Title } from "./manifest.style";

const Manifest = ({ openModal, setOpenModal }) => {
  return (
    <Modal
      openModal={openModal}
      setOpenModal={setOpenModal}
      customStyle={customStyleModal}
    >
      <Title>Manifesto</Title>
      <Paragraph>
        A cura que pensamos tem a ver com os movimentos necessários para a
        evolução. Para a cura de uma ferida é necessário estancar o que consome
        a carne, cessar a dor e sua causa. Após é necessário limpar, lavar e
        tratar com os unguentos, ervas, magias, feitiçarias: tecnologias
        ancestrais de cuidado e continuidade. Diante da cura o corpo fraturado
        se levanta e reconstitui sua dignidade no presente para a criação do
        futuro.
      </Paragraph>
      <Paragraph>
        A <Bold>CURA - I Mostra de Artes Cênicas Negras de Porto Alegre</Bold>,
        surge em um contexto pandêmico, onde as feridas que já existiam se
        ampliam e dinamizam. Nesse sentido, o evento surge como o cuidado
        necessário para o fortalecimento da dignidade negra nas disputas
        artísticas cênicas. Um evento proposto por e para artistas negras e
        negros, com o intuito de celebrar e mapear as produções e os corpos que
        produzem o antídoto contra a doença colonial, através da arte.
      </Paragraph>
      <Paragraph>
        Produções de artistas que discutem temas ligados questões e desejos
        individuais ao mesmo tempo que tocam e aprofundam questões de ordem
        coletiva, como a luta antirracista, o racismo, a fabulação de futuros
        positivos e a celebração da vida. A <Bold>Mostra CURA</Bold> apresenta
        em sua primeira edição as produções de artistas da cidade e de outros
        territórios do Brasil, marcando a presença e a potência nas Artes
        Cênicas da atualidade.
      </Paragraph>
      <Paragraph>
        Teatro, dança, performance, processos híbridos, conversas, axé, ebós,
        dengos, organização, festa: tudo está posto ao mesmo tempo. As produções
        da <Bold>Mostra CURA</Bold> propõem pensar as contra-colonizações
        cênicas e apontam modos futuros para os processos de criação. Um tempo
        pautado pelas experiências negras.
      </Paragraph>
    </Modal>
  );
};

export default Manifest;

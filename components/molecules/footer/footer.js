import React from "react";
import {
  Footer as FooterComponent,
  Content,
  Img,
  Text,
  Title,
  MediaSocial,
  MediaItem,
  Wrapper,
  SupportWrapper,
  ContainerApoio,
  ContainerPatrocinio,
  SmallText,
  Separator,
} from "./footer.style";
const Footer = () => {
  return (
    <FooterComponent>
      <SupportWrapper>
        <ContainerApoio>
          <SmallText>Apoio: </SmallText>
          <img className="imgFooter " src="static/img/macumba_lab.png"></img>
          <img className="imgFooter " src="static/img/svg_plusart.svg"></img>
          <img className="imgFooter " src="static/img/svg_ppga.svg"></img>
          <img
            className="imgFooterBig "
            src="static/img/olhares_cena.jpg"
          ></img>
        </ContainerApoio>
        <ContainerPatrocinio>
          <SmallText>Realização: </SmallText>
          <img
            className="imgFooterPatrocinio"
            src="static/img/prefeitura.png"
          ></img>
        </ContainerPatrocinio>
      </SupportWrapper>
      {/* <Separator></Separator> */}
      <Wrapper>
        <Content>
          <MediaSocial>
            <MediaItem>
              <a href="https://www.instagram.com/mostracura/">
                <img src="static/icons/instagram.svg"></img>
              </a>
            </MediaItem>
            <MediaItem>
              <a href="https://www.facebook.com/mostracura">
                <img src="static/icons/facebook.svg"></img>
              </a>
            </MediaItem>
            <MediaItem>
              <a href="https://www.youtube.com/channel/UCcsbzEF48M5HJiwliN1GkFw">
                <img src="static/icons/youtube.svg"></img>
              </a>
            </MediaItem>
          </MediaSocial>
        </Content>
        <Content>
          <Title>
            2 a 7 de dezembro <br /> Porto Alegre - Brasil
          </Title>
        </Content>
        <Content>
          <Img src="static/logos/cura.svg" alt="" />
        </Content>
      </Wrapper>
    </FooterComponent>
  );
};

export default Footer;

import styled from "styled-components";

export const Footer = styled.footer`
  background-color: var(--color-secondary);
  padding-top: 64px;
`;

export const Content = styled.div`
  @media screen and (max-width: 670px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 20px;
  }
`;

export const SupportWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 960px;
  margin: 0 auto;
  padding-bottom: 32px;
  border-bottom: 1px solid #f0e9e2;
  @media screen and (max-width: 1024px) {
    width: 90%;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const ContainerApoio = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    margin: 0 auto;
  }
  @media screen and (max-width: 580px) {
    flex-direction: column;
  }
`;
export const ContainerPatrocinio = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    margin: 24px auto 0 auto;
  }
  @media screen and (max-width: 580px) {
    flex-direction: column;
  }
`;
export const SmallText = styled.span`
  font-size: 16px;
  font-family: Roboto;
  color: var(--color-orange);
  font-weight: bold;
`;

// export const Separator = styled.span`
//   height: 2px;
//   background-color: var(--color-orange);
//   max-width: 60%;
// `;

export const Text = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 100%;
  color: #151416;
`;

export const Title = styled.h4`
  font-family: Infini;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 38px;
  text-align: center;
  color: var(--color-orange);
`;

export const Img = styled.img``;

export const MediaSocial = styled.ul`
  width: 176px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;

export const MediaItem = styled.li`
  transition: margin-top 0.2s;
  &:hover {
    margin-top: -6px;
  }
  &:nth-child(2) {
    padding: 0 16px;
  }
`;

export const Wrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 0;
  flex-wrap: wrap;

  @media screen and (max-width: 1024px) {
    width: 90%;
  }

  @media screen and (max-width: 670px) {
    flex-direction: column;
    justify-content: center;
  }
`;

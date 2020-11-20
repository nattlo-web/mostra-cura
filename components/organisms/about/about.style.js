import styled from "styled-components";

export const Container = styled.section`
  background: #fffaf5;
`;

export const ContentAbout = styled.div`
  max-width: 960px;
  min-height: 50vh;
  width: 90%;
  padding-top: 100px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  margin-bottom: 64px;

  @media screen and (max-width: 760px) {
    display: block;
  }
`;

export const ContentManifest = styled.div`
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonManifest = styled.button`
  cursor: pointer;
  z-index: 9;
  position: relative;
  background: #274c86;
  border: 3px solid #274c86;
  color: #f0e9e2;
  box-sizing: border-box;
  border-radius: 41px;
  outline: none;
  padding: 9px 32px;
  font-size: 16px;
  transition: background 0.5s;
  &:hover {
    background: transparent;
    border: 4px solid var(--color-blue);
    color: var(--color-blue);
  }
`;

export const Text = styled.p`
  color: var(--color-black);
  font-family: Roboto;
  font-style: normal;
  font-size: 22px;
  text-align: center;
  line-height: 216.69%;
`;

export const Strong = styled.span`
  font-weight: bold;
  color: #9c5021;
`;

export const ContainerWords = styled.div`
  width: 98%;
  background-color: transparent;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: -400px auto 0 auto;
  @media screen and (max-width: 1520px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const OrangeWord = styled.span`
  font-family: Infini;
  color: var(--color-primary);
  font-size: 56px;
  @media screen and (max-width: 768px) {
    font-size: 36px;
  }
`;
export const BlueWord = styled.span`
  color: var(--color-secondary);
  font-family: Infini;
  font-size: 48px;
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;
export const BrownWord = styled.span`
  font-family: Infini;
  color: var(--color-orange);
  font-size: 32px;
  @media screen and (max-width: 768px) {
    font-size: 24px;
    justify-self: center;
  }
`;
export const TransparentWord = styled.span`
  color: transparent;
`;

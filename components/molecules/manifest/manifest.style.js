import styled from "styled-components";

export const Title = styled.h2`
  font-size: 36px;
  margin: 0px 0 24px 0;
  font-family: Infini;
  text-align: center;
  /* line-height: 57px; */
`;

export const customStyleModal = `
   padding: 48px 56px;
   background-color:#fff;
   display: flex;
   flex-direction: column;
   &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--color-primary);
  }
  &::-webkit-scrollbar-track {
    display: none;

`;

export const Paragraph = styled.p`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 12px;
  padding: 0 16px;
`;
export const Bold = styled.span`
  font-size: 20px;
  line-height: 32px;
  font-weight: bold;
`;

import styled from "styled-components";
import Link from "next/link";

export const Wrapper = styled.div`
  width: 800px;
  margin: 64px auto 0 auto;
  /* margin-top: 64px; */
`;
export const DivItem = styled.div`
  max-width: 340px;
  display: flex;
  flex-direction: column;
  height: auto;
  margin-bottom: 32px;

  @media screen and (max-width: 768px) {
    height: auto;
    margin-bottom: 32px;
  }
`;

export const Alink = styled.a`
  cursor: pointer;
  font-family: Roboto Condensed;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  color: #9c5021;
  text-decoration: underline;
`;

export const Tag = styled.h4`
  font-family: Roboto Condensed;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  color: #9c5021;
`;
export const Title = styled.span`
  font-family: Roboto Condensed;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 26px;
  color: #07070d;
`;

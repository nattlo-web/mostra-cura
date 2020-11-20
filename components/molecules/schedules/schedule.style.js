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

  @media screen and (max-width: 768px) {
    height: auto;
    margin-bottom: 32px;
  }
`;

export const Alink = styled.a`
  cursor: pointer;
  margin-top: 8px;
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
  font-size: 18px;
  line-height: 24px;
  color: #07070d;
`;

export const Time = styled.span`
  font-family: Infini;
  color: #3060ad;
  font-size: 32px;
  margin-bottom: 16px;
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

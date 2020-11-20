import styled from "styled-components";

export const Container = styled.section`
  height: 100vh;
  background-color: #fffaf5;
`;

export const Background = styled.div`
  background-image: url("static/img/bg.svg");
  background-position-y: -150px;
  background-size: cover;
  background-repeat: no-repeat;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1024px) {
    background-position-y: 1px;
    background-position-x: right;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  @media screen and (max-width: 690px) {
    justify-content: center;
  }
`;

export const Title = styled.h1`
  font-family: Infini;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 57px;
  color: #f0e9e2;

  @media screen and (max-width: 760px) {
    text-align: center;
    font-size: 25px;
    line-height: 40px;
  }
`;

export const Logo = styled.img`
  width: 282px;
  height: 282px;
  margin-right: 72px;

  @media screen and (max-width: 760px) {
    margin-right: 0;
  }
`;

export const WrapperArrow = styled.div`
  margin-top: 20px;
  text-align: center;
`;

export const ArrowDown = styled.img`
  cursor: pointer;
  -webkit-animation: move 5s linear 4;
  animation: move 5s linear 4;
`;

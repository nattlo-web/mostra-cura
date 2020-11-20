import styled from "styled-components";

export const Container = styled.section`
  background: #f0e9e2;
  padding: 100px 0;
`;

export const Wrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  color: var(--color-orange);
`;

export const Content = styled.div``;

export const Dates = styled.ul`
  display: flex;
  justify-content: space-around;
  margin-top: 57px;
  flex-wrap: wrap;
`;

export const DateItem = styled.li`
  > button {
    background: transparent;
    border: none;
    font-family: Infini;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 57px;
    text-align: center;
    color: ${(props) => {
      const { checked } = props;
      return checked ? "#3060ad" : "#9c5021";
    }};
    cursor: pointer;
    border-bottom: 10px solid transparent;
    border-image: ${(props) => {
      const { checked } = props;
      return checked ? 'url("static/icons/line.svg") 10 stretch' : "none";
    }};
    outline: none;
    @media screen and (max-width: 540px) {
      font-size: 24px;
      margin: 0 16px;
      line-height: 42px;
    }
  }
`;

export const ProgrammingContainer = styled.div`
  display: flex;
  min-height: 60vh;
`;

export const Schedules = styled.div`
  flex: 1;
`;

export const WrapperButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  display: ${(props) => {
    const { removeButton } = props;
    return !removeButton ? "none" : "flex";
  }};
  > p {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: var(--color-blue);
    margin-top: 10px;
  }
  @media screen and (max-width: 540px) {
    display: none;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  background: transparent;
  outline: none;
  border: none;
  display: block;
`;

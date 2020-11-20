import React, { useState, useEffect } from "react";
import {
  Container,
  Title,
  Content,
  Wrapper,
  Dates,
  DateItem,
  ProgrammingContainer,
  Schedules,
  Button,
  WrapperButton,
} from "./programming.style";
import Schedule02 from "../../molecules/schedules/schedule02";
import Schedule03 from "../../molecules/schedules/schedule03";
import Schedule04 from "../../molecules/schedules/schedule04";
import Schedule05 from "../../molecules/schedules/schedule05";
import Schedule06 from "../../molecules/schedules/schedule06";
import Schedule07 from "../../molecules/schedules/schedule07";

const Programming = () => {
  const [active, setActive] = useState(2);

  return (
    <Container id="programa">
      <Wrapper>
        <Title>Programação</Title>
        <Content>
          <Dates>
            <DateItem checked={active === 2 ? true : null}>
              <button onClick={() => setActive(2)}>02/12</button>
            </DateItem>
            <DateItem checked={active === 3 ? true : null}>
              <button onClick={() => setActive(3)}>03/12</button>
            </DateItem>
            <DateItem checked={active === 4 ? true : null}>
              <button onClick={() => setActive(4)}>04/12</button>
            </DateItem>
            <DateItem checked={active === 5 ? true : null}>
              <button onClick={() => setActive(5)}>05/12</button>
            </DateItem>
            <DateItem checked={active === 6 ? true : null}>
              <button onClick={() => setActive(6)}>06/12</button>
            </DateItem>
            <DateItem checked={active === 7 ? true : null}>
              <button onClick={() => setActive(7)}>07/12</button>
            </DateItem>
          </Dates>
          <ProgrammingContainer>
            <WrapperButton removeButton={active !== 2}>
              <Button onClick={() => setActive(active - 1)}>
                <img
                  src="static/icons/arrow_left.svg"
                  alt="uma seta para lado direito ao clicar será direcionado para próxima data de eventos da mostra cura"
                />
              </Button>
              <p>
                Data <br />
                anterior
              </p>
            </WrapperButton>
            {active === 2 && <Schedule02>Agenda do dia 2</Schedule02>}
            {active === 3 && <Schedule03>Agenda do dia 3</Schedule03>}
            {active === 4 && <Schedule04>Agenda do dia 4</Schedule04>}
            {active === 5 && <Schedule05>Agenda do dia 5</Schedule05>}
            {active === 6 && <Schedule06>Agenda do dia 6</Schedule06>}
            {active === 7 && <Schedule07>Agenda do dia 7</Schedule07>}
            <WrapperButton removeButton={active !== 7}>
              <Button onClick={() => setActive(active + 1)}>
                <img
                  src="static/icons/arrow_right.svg"
                  alt="uma seta para lado direito ao clicar será direcionado para próxima data de eventos da mostra cura"
                />
              </Button>
              <p>
                Próxima <br />
                data
              </p>
            </WrapperButton>
          </ProgrammingContainer>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default Programming;

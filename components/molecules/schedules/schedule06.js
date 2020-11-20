import React, { useState, useEffect } from "react";
import Link from "next/link";
// import {
//   Container,
//   Title,
// } from "./programming.style";
import * as S from "./schedule.style";

const Schedule02 = () => {
  return (
    <S.Wrapper>
      <S.DivItem className="align-right">
        <S.Time>15h</S.Time>
        <S.Tag>RODA DA CURA</S.Tag>
        <S.Title>
          CENA ÚTERO: CORPO E PROCESSOS CRIATIVOS DE ARTISTAS MÃES | Dedy
          Ricardo (RS), Mayura Matos (RS), Joana Amaral (RS), Silvia Duarte (RS)
        </S.Title>
        <Link href="/embreve">
          <S.Alink>+ informações</S.Alink>
        </Link>
      </S.DivItem>

      <S.DivItem className="align-left">
        <S.Time>16:30h</S.Time>
        <S.Tag>ESPETÁCULO ONLINE</S.Tag>
        <S.Title>
          TECNOLOGIAS DO SUL: VOLTEI A FALAR COM AS ÁRVORES / FRUTA DO FUTURO |
          Conferência performática com Mario Lopes (Brasil/Finlândia) e Anna Tjé
          (França)
        </S.Title>
        <Link href="/embreve">
          <S.Alink>+ informações</S.Alink>
        </Link>
      </S.DivItem>

      <S.DivItem className="align-right">
        <S.Time>19h</S.Time>
        <S.Tag>ESPETÁCULO PRESENCIAL</S.Tag>
        <S.Title>
          O FEMININO SAGRADO: UM OLHAR DESCENDENTE DA MITOLOGIA AFRICANA |
          Afrosul Odomodê (RS)
        </S.Title>
        <Link href="/embreve">
          <S.Alink>+ informações</S.Alink>
        </Link>
      </S.DivItem>

      <S.DivItem className="align-left">
        <S.Time>21h</S.Time>
        <S.Tag>ESPETÁCULO ONLINE</S.Tag>
        <S.Title>DESENCAIXOTANDO CENAS NEGRAS | Grupo Caixa Preta (RS)</S.Title>
        <Link href="/embreve">
          <S.Alink>+ informações</S.Alink>
        </Link>
      </S.DivItem>
    </S.Wrapper>
  );
};

export default Schedule02;

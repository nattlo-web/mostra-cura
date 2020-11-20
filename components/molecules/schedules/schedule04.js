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
        <S.Time>9h-12h</S.Time>
        <S.Tag>OFICINA ONLINE</S.Tag>
        <S.Title>
          DRAMATURGIA AFRODIASPÓRICA: UM FOCO NA CONSTRUÇÃO DE NARRATIVAS NEGRAS
          | Onisajé (BA)
        </S.Title>
        <Link href="/embreve">
          <S.Alink>+ informações</S.Alink>
        </Link>
      </S.DivItem>

      <S.DivItem className="align-left">
        <S.Time>15h</S.Time>
        <S.Tag>RODA DA CURA</S.Tag>
        <S.Title>
          DRAMATURGIA COMO PRENÚNCIO: CORPO PALAVRA E A DANÇA DOS TANTOS NÓS |
          Cristiane Sobral (MG), Grace Passô / Silvana Rodrigues (RS)
        </S.Title>
        <Link href="/embreve">
          <S.Alink>+ informações</S.Alink>
        </Link>
      </S.DivItem>

      <S.DivItem className="align-right">
        <S.Time>19h</S.Time>
        <S.Tag>ESPETÁCULO PRESENCIAL</S.Tag>
        <S.Title>P E Ç A - Rita Rosa Lende (RS)</S.Title>
        <Link href="/embreve">
          <S.Alink>+ informações</S.Alink>
        </Link>
      </S.DivItem>

      <S.DivItem className="align-left">
        <S.Time>21h</S.Time>
        <S.Tag>ESPETÁCULO ONLINE</S.Tag>
        <S.Title>MACUMBA VIRTUAL - Saskia (RS)</S.Title>
        <Link href="/embreve">
          <S.Alink>+ informações</S.Alink>
        </Link>
      </S.DivItem>
    </S.Wrapper>
  );
};

export default Schedule02;

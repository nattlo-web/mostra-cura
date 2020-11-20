import React, { useState, useEffect } from "react";
import Link from "next/link";
// import {
//   Container,
//   Title,
// } from "./programming.style";
import * as S from "./schedule.style";

const Schedule03 = () => {
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
        <S.Tag>RODA DA CURA | ONLINE</S.Tag>
        <S.Title>
          AS GINGAS NEGRAS COMO FUNDAMENTO CÊNICO: JEITOS, MODOS E TEMPOS DE
          NARRAR HISTÓRIAS DO CORPO | Rui Moreira (RS/MG) / Iara Deodoro (RS) /
          Cleyce Colins (MA) / Manoel Timbaí (RS/BA)
        </S.Title>
        <Link href="/embreve">
          <S.Alink>+ informações</S.Alink>
        </Link>
      </S.DivItem>

      <S.DivItem className="align-right">
        <S.Time>19h</S.Time>
        <S.Tag>ESPETÁCULO PRESENCIAL</S.Tag>
        <S.Title>ENCANTO ZUMBI – Coletivo Montigente(RS) </S.Title>
        <Link href="/embreve">
          <S.Alink>+ informações</S.Alink>
        </Link>
      </S.DivItem>

      <S.DivItem className="align-left">
        <S.Time>21h</S.Time>
        <S.Tag>ESPETÁCULO ONLINE</S.Tag>
        <S.Title>O MURO | Denilson Tourinho (MG)</S.Title>
        <Link href="/embreve">
          <S.Alink>+ informações</S.Alink>
        </Link>
      </S.DivItem>
    </S.Wrapper>
  );
};

export default Schedule03;

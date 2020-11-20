import React, { useState, useEffect } from "react";
import Link from "next/link";
// import {
//   Container,
//   Title,
// } from "./programming.style";
import * as S from "./schedule.style";

import { useRouter } from "next/router";

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
        <Link href="embreve">
          <S.Alink>+ informações</S.Alink>
        </Link>
      </S.DivItem>

      <S.DivItem className="align-left">
        <S.Time>15h</S.Time>
        <S.Tag>RODA DA CURA</S.Tag>
        <S.Title>
          NEGRAS E NEGROS EM MOVIMENTO | Celina Alcântara (RS), Rodrigo França
          (RJ), Vera Lopes (RS/BA), Silvia Duarte (RS)
        </S.Title>
        <Link href="embreve">
          <S.Alink>+ informações</S.Alink>
        </Link>
      </S.DivItem>

      <S.DivItem className="align-right">
        <S.Time>19h</S.Time>
        <S.Tag>ESPETÁCULO PRESENCIAL</S.Tag>
        <S.Title>A MULHER ARRASTADA (RS)</S.Title>
        <Link href="embreve">
          <S.Alink>+ informações</S.Alink>
        </Link>
      </S.DivItem>

      <S.DivItem className="align-left">
        <S.Time>21h</S.Time>
        <S.Tag>ESPETÁCULO PRESENCIAL COM TRANSMISSÃO AO VIVO</S.Tag>
        <S.Title>
          SAMBA COM GLAU BARROS E PÂMELA AMARO - Dia Nacional do Samba
        </S.Title>
        <Link href="embreve">
          <S.Alink>+ informações</S.Alink>
        </Link>
      </S.DivItem>
    </S.Wrapper>
  );
};

export default Schedule02;

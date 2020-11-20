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
          VEÍCULO SUR: PERFOMATIVIDADE EM MOVIMENTO | Didam Hou Braga (MA), Malu
          Avelar (MG), Mário Lopes (Finlândia), Thiago Pirajira (RS)
        </S.Title>
        <Link href="/embreve">
          <S.Alink>+ informações</S.Alink>
        </Link>
      </S.DivItem>

      <S.DivItem className="align-left">
        <S.Time>19h</S.Time>
        <S.Tag>ESPETÁCULO ONLINE</S.Tag>
        <S.Title>CORPOS DITOS | Grupo Pretagô (RS)</S.Title>
        <Link href="/embreve">
          <S.Alink>+ informações</S.Alink>
        </Link>
      </S.DivItem>

      <S.DivItem className="align-right">
        <S.Time>21h</S.Time>
        <S.Tag>ESPETÁCULO ONLINE</S.Tag>
        <S.Title>
          REVERB | Mário Lopes (Brasil/Finlândia) e Malu Avelar (Brasil)
        </S.Title>
        <Link href="/embreve">
          <S.Alink>+ informações</S.Alink>
        </Link>
      </S.DivItem>

      <S.DivItem className="align-left">
        <S.Time>21h</S.Time>
        <S.Tag>EVENTO ONLINE</S.Tag>
        <S.Title>ENCERRAMENTO</S.Title>
        <Link href="/embreve">
          <S.Alink>+ informações</S.Alink>
        </Link>
      </S.DivItem>
    </S.Wrapper>
  );
};

export default Schedule02;

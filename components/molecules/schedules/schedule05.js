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
          REDE DE FESTIVAIS E MOSTRAS PRETAS: CURADORIA, ARTICULAÇÃO E
          ESTRATÉGIAS DE FUTURO - Thaise Machado (Festival Porongos-RS), Ellen
          de Paula e Gabriel Cândido (Festival Dona Ruth-SP), Thiago Pirajira
          (Mostra CURA-RS), Paulo Mattos (Segunda Black-RJ)
        </S.Title>
        <Link href="/embreve">
          <S.Alink>+ informações</S.Alink>
        </Link>
      </S.DivItem>

      <S.DivItem className="align-left">
        <S.Time>19h</S.Time>
        <S.Tag>ESPETÁCULO PRESENCIAL</S.Tag>
        <S.Title>SOBREVIVO – Rede Espiralar (RS)</S.Title>
        <Link href="/embreve">
          <S.Alink>+ informações</S.Alink>
        </Link>
      </S.DivItem>

      <S.DivItem className="align-right">
        <S.Time>21h</S.Time>
        <S.Tag>ESPETÁCULO ONLINE</S.Tag>
        <S.Title>ENSAIO SOBRE A CEBOLA | Coletivo Notas Pretas- RS</S.Title>
        <Link href="/embreve">
          <S.Alink>+ informações</S.Alink>
        </Link>
      </S.DivItem>

      <S.DivItem className="align-left">
        <S.Time>22h</S.Time>
        <S.Tag>ESPETÁCULO ONLINE</S.Tag>
        <S.Title>
          RETROSPECTIVA PRETA 2020 | Grace Passô (MG) e Novísimo Edgar (SP)
        </S.Title>
        <Link href="/embreve">
          <S.Alink>+ informações</S.Alink>
        </Link>
      </S.DivItem>
    </S.Wrapper>
  );
};

export default Schedule02;

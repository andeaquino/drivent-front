import React from "react";
import styled from "styled-components";

export default function HandleError(props) {
  const { error } = props;
  return (
    <ErrorWrapper>
      {error === 402 ? (
        <ErrorMessage>
          <p>Você precisa ter confirmado o pagamento antes</p> de fazer a escolha da hospedagem
        </ErrorMessage>
      ) : error === 412 ? (
        <ErrorMessage>
          <p>Sua modalidade de ingresso não inclui hospedagem.</p>Prossiga para a escolha de
          atividades
        </ErrorMessage>
      ) : (
        <p>Erro no servidor</p>
      )}
    </ErrorWrapper>
  );
}

const ErrorMessage = styled.h2`
  color: #8e8e8e;
  text-align: center;
`;

const ErrorWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

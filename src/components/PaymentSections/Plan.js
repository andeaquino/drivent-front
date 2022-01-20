import styled from "styled-components";

export default function Plan({ type }) {
  return (
    <PlanContainer key={type.id}>
      <PlanName> 
        {type.name}
      </PlanName>
      <PlanPrice> 
        {`${type.name.includes("Hotel") ? "+ " : ""}R$ ${type.price}`}
      </PlanPrice>
    </PlanContainer>
  );
}

const PlanContainer = styled.div`
    cursor: pointer;
    font-family: Roboto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: min(145px, 20vw);
    height: min(145px, 20vh);
    margin-right: 24px;
    background: #fff;
    border: 1px solid #CECECE;
    border-radius: 20px;
`;

const PlanName = styled.p`
    font-size: 16px;
    margin-bottom: 7px;
    color: #454545;
`;

const PlanPrice = styled.p`
    font-size: 14px;
    color: #898989;
`;

import styled from "styled-components";
import Plan from "./Plan";

export default function PaymentSection({ types, message, chosen, setChosen }) {
  return (
    <>
      <SectionMessage>
        {message}
      </SectionMessage>
      <PlansContainer>
        {
          types.map((type) => (
            <Plan type={type} chosen = {chosen} setChosen = {setChosen}/>
          ))
        }
      </PlansContainer>
    </>
  );
}

const PlansContainer = styled.div`
    display: flex;
    align-items: center;
`;

const SectionMessage = styled.p`
    font-family: Roboto;
    margin: 44px 0px 17px 0px;
    font-size: 20px;
    font-weight: 400;
    color: #8E8E8E;
`;

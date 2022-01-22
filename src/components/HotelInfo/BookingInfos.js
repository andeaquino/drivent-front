import styled from "styled-components";

export default function HotelWrapper({ infos }) {
  const { hotelImageUrl, hotelName, roomName, roomQuantity, roomType } = infos;

  return (
    <>
      <SubTitle>Você já escolheu um quarto</SubTitle>
      <WrapperContainer>
        <img src={hotelImageUrl} alt="" />
        <h3>{hotelName}</h3>
        <p>
          Quarto reservado
          <Types>
            {roomName} ({roomType})
          </Types>
        </p>
        <p>
          Pessoas no seu quarto
          <Types>
            {roomQuantity === 1
              ? "Apenas Você"
              : `Você e mais ${roomQuantity - 1}`}
          </Types>
        </p>
      </WrapperContainer>
    </>
  );
}

const WrapperContainer = styled.div`
  width: 200px;
  height: 270px;
  display: flex;
  flex-direction: column;
  background-color: #ffeed2;
  border-radius: 8px;
  padding: 15px;
  margin-top: 0px;
  gap: 15px;
  cursor: pointer;

  img {
    width: 170px;
    height: 110px;
    border-radius: 8px;
  }

  h3 {
    font-size: 20px;
    color: #343434;
  }

  p {
    font-size: 12px;
    font-weight: 700;
    color: #3c3c3c;
  }
`;

const SubTitle = styled.h2`
  color: #8e8e8e;
  width: 100%;
  margin: 50px 0px 20px;
`;

const Types = styled.span`
  display: block;
  margin-top: 5px;
  font-weight: 200;
`;

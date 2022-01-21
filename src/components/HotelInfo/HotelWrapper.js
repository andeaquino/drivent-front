import styled from "styled-components";

export default function HotelWrapper({ info, active, renderRooms }) {
  return (
    <WrapperContainer
      onClick={() => renderRooms(info)}
      key={info}
      selected={info.id === active.id}
    >
      <img src={info.img} alt="" />
      <h3>{info.name}</h3>
      <p>
        Tipo de acomodação:
        <Types>
          {info.availableTypes.map((types, index) => (
            <span key={index}>{types}</span>
          ))}{" "}
        </Types>
      </p>
      <p>
        Vagas disponíveis:
        <Types>{info.totalVacancy}</Types>
      </p>
    </WrapperContainer>
  );
}

const WrapperContainer = styled.div`
  width: 200px;
  height: 270px;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => (props.selected ? "#FFEED2" : "#e5e5e5")};
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

const Types = styled.span`
  display: block;
  margin-top: 5px;
  font-weight: 200;
`;
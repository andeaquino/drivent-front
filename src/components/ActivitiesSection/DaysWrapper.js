import styled from "styled-components";

export default function DaysWrapper({ info, active, renderActivities }) {
  return (
    <WrapperContainer onClick={() => renderActivities(info)} selected={info.id === active.id}>
      {info.name}
    </WrapperContainer>
  );
}

const WrapperContainer = styled.div`
  width: 170px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.selected ? "#FFEED2" : "#e5e5e5")};
  border-radius: 8px;
  gap: 15px;
  cursor: pointer;
`;

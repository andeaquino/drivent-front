import styled from "styled-components";

export default function DaysWrapper({ info, active, renderActivities }) {
  return (
    <WrapperContainer onClick={renderActivities} key={info} selected={info.id === active.id}>
      {info}
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
`;

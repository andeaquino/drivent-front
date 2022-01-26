import styled from "styled-components";
import Activity from "./Activity";

export default function Stage({ stage }) {
  const activities = [
    { id: 1, name: "Minecraft", startTime: "09:00", endTime: "10:00" },
    { id: 1, name: "Minecraft", startTime: "10:00", endTime: "11:00" },
    { id: 1, name: "Minecraft", startTime: "13:00", endTime: "15:00" },
  ];
  
  return (
    <StageContainer key={stage.id}>
      <StageName>{stage.name}</StageName>
      <ActivitiesContainer>
        {activities.map(activity => <Activity activity = {activity}/>)}
      </ActivitiesContainer>
    </StageContainer>
  );
}

const StageContainer = styled.div`
    font-family: Roboto;
    width: 33%;
    height: 400px;
`;

const StageName = styled.h2`
    font-size: 17px;
    text-align: center;
    color: #7B7B7B;
    margin-bottom: 10px;
`;

const ActivitiesContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    padding: 15px;
    align-items: center;
    border: 1px solid #D7D7D7;
`;

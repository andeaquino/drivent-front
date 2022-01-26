import styled from "styled-components";
import Stage from "./Stage";

export default function ActivityDay() {
  const stages = [
    { id: 1, name: "Auditório Principal" },
    { id: 2, name: "Auditório Lateral" },
    { id: 1, name: "Sala de Workshop" }
  ];

  return (
    <DayActivitiesContainer>
      {stages.map(stage => <Stage stage = {stage}/>)}
    </DayActivitiesContainer>
  );
}

const DayActivitiesContainer = styled.div`
    width: 100%;
    position: relative;
    display: flex;
`;

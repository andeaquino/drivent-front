import styled from "styled-components";
import Stage from "./Stage";

export default function ActivityDay({ activities, stages }) {
  return (
    <DayActivitiesContainer>
      {stages.map((stage) => (
        <Stage
          stage={stage}
          activities={activities.filter((activity) => activity.stage.id === stage.id)}
        />
      ))}
    </DayActivitiesContainer>
  );
}

const DayActivitiesContainer = styled.div`
  width: 100%;
  position: relative;
  margin-top: 30px;
  display: flex;
`;

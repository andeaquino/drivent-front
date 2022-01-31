import styled from "styled-components";
import Stage from "./Stage";

export default function ActivityDay({ activities, stages, dayId, selectedActivities }) {
  return (
    <DayActivitiesContainer key = {dayId}>
      {stages.map((stage) => (
        <Stage
          stage={stage}
          activities={activities.filter((activity) => activity.stage.id === stage.id)}
          dayId = {dayId}
          selectedActivities={selectedActivities}
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

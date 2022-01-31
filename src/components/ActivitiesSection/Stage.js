import styled from "styled-components";
import Activity from "./Activity";

export default function Stage({ stage, activities, dayId, selectedActivities }) {  
  return (
    <StageContainer key={`${dayId}${stage.id}`}>
      <StageName>{stage.name}</StageName>
      <ActivitiesContainer>
        {activities.map((activity, i) => (
          <Activity activity = {activity} nextActivity={activities[i+1] || {}}
            dayId={dayId} selectedActivities = {selectedActivities}/>
        ))}
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
    overflow-y: scroll;
`;

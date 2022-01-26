import styled from "styled-components";

export default function Activity({ activity }) {
  return (
    <ActivityContainer key={activity.id}>
      <ActivityInfo>
        <p className="bold">
          {activity.name}
        </p>
        <p>
          {activity.startTime} - {activity.endTime}
        </p>
      </ActivityInfo>
      <VaccanciesInfo>
        {activity.id}
      </VaccanciesInfo>
    </ActivityContainer>
  );
}

const ActivityContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 80px;
    padding: 10px;
    margin-bottom: 15px;
    background: #F1F1F1;
    border-radius: 5px;
`;

const ActivityInfo = styled.h2`
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 100%;

    .bold {
        font-weight: bold;
        margin-bottom: 7px;
    }

    p {
        font-size: 12px;
        line-height: 14px;
        color: #343434;
    }
`;

const VaccanciesInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 20%;
    height: 70%;
    border-left: 1px solid #D7D7D7;
`;

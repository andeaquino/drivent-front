import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

export default function Activity({ activity }) {
  const [height, setHeight] = useState(0);
  function calcHeight() {
    const start = Number(activity.startTime[0] + activity.startTime[1]) * 3600 + Number(activity.startTime[3] + activity.startTime[4]) * 60;
    const end = Number(activity.endTime[0] + activity.endTime[1]) * 3600 + Number(activity.endTime[3] + activity.endTime[4]) * 60;
    const height = Math.floor((end - start)/3600 - 1) * 10 + (end - start)/3600 * 80;

    setHeight(height);
  }

  useEffect(calcHeight, []);

  return (
    <ActivityContainer key={activity.id} height = {height}>
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
    height: ${props => `${props.height}px`};
    padding: 10px;
    margin-bottom: 10px;
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

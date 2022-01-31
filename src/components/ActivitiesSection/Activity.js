import { useEffect } from "react";
import { useState } from "react";
import { CgEnter } from "react-icons/cg";
import { MdHighlightOff, MdCheckCircleOutline } from "react-icons/md";
import { toast } from "react-toastify";
import styled from "styled-components";
import useApi from "../../hooks/useApi";

export default function Activity({ activity, nextActivity, dayId, selectedActivities }) {
  const [height, setHeight] = useState(0);
  const [restTime, setRestTime] = useState(0);
  const [isSelected, setIsSelected] = useState(selectedActivities.some(act => act.id === activity.id));
  const { activities } = useApi();

  function calcHeight() {
    const start = Number(activity.startTime[0] + activity.startTime[1]) * 3600 + Number(activity.startTime[3] + activity.startTime[4]) * 60;
    const end = Number(activity.endTime[0] + activity.endTime[1]) * 3600 + Number(activity.endTime[3] + activity.endTime[4]) * 60;
    const height = Math.floor((end - start)/3600 - 1) * 10 + (end - start)/3600 * 80;

    setHeight(height);
  }

  function calcRestTime() {
    if(!nextActivity.startTime) {
      setRestTime(10);
      return;
    }

    const start = Number(activity.endTime[0] + activity.endTime[1]) * 3600 + Number(activity.endTime[3] + activity.endTime[4]) * 60;
    const end = Number(nextActivity.startTime[0] + nextActivity.startTime[1]) * 3600 + Number(nextActivity.startTime[3] + nextActivity.startTime[4]) * 60;
    const restSpace = Math.floor((end - start)/3600) * 10 + (end - start)/3600 * 80;

    setRestTime(restSpace + 10);
  }

  function postActivity(id) {
    if(isSelected) {
      toast.error("Você já está inscrito nessa atividade");
      return;
    } 
    if(!activity.openVacancies) {
      toast.error("Esta atividade não possui nenhuma vaga disponível");
      return;
    }; 
    const confirmation = window.confirm("Tem certeza que deseja confirmar sua reserva?");
    if(!confirmation) return;
    activities.postActivities(id)
      .then(() => {
        toast("Sua reserva foi feita com sucesso");
        setIsSelected(true);
        selectedActivities.push(activity);
      }).catch((err) => {
        toast.error(err.response.data.message);
      });
  }

  useEffect(() => {
    calcHeight();
    calcRestTime();
  }, [dayId]);

  return (
    <ActivityContainer key={activity.id} height = {height} restTime = {restTime} isSelected = {isSelected}
      vacancies = {activity.openVacancies} onClick={() => postActivity(activity.id)}
    >
      <ActivityInfo>
        <p className="bold">
          {activity.name}
        </p>
        <p>
          {activity.startTime} - {activity.endTime}
        </p>
      </ActivityInfo>
      { isSelected ? 
        <VaccanciesInfo>
          <MdCheckCircleOutline color = {"#078632"}/>
          <p>Inscrito</p>
        </VaccanciesInfo> : 
        activity.openVacancies > 0 ? 
          <VaccanciesInfo>
            <CgEnter color = {"#078632"}/>
            <p>{activity.openVacancies} vagas</p>
          </VaccanciesInfo> :
          <VaccanciesInfo>
            <MdHighlightOff color = {"#CC6666"}/>
            <p className="red">Esgotado</p>
          </VaccanciesInfo>
      }
      
    </ActivityContainer>
  );
}

const ActivityContainer = styled.div`
    cursor: ${props => props.vacancies ? "pointer" : "not-allowed"};
    display: flex;
    align-items: center;
    width: 100%;
    height: ${props => `${props.height}px`};
    padding: 10px;
    margin-bottom: ${props => `${props.restTime}px`};
    background: ${props => props.isSelected ? "#D0FFDB" : "#F1F1F1"};
    border-radius: 5px;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
    transition: all .2s;

    :hover {
        background: ${props => props.vacancies ? "#D0FFDB" : "#FFD0DB"};
    }
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
    height: 90%;
    border-left: 1px solid #D7D7D7;

    svg {
        height: 30px;
        width: 20px;
    }

    .red {
        color: #CC6666;
    }

    p {
        font-size: 9px;
        color: #078632;
    }
`;

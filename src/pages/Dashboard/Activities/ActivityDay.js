import Stage from "./Stage";

export default function ActivityDay() {
  const stages = [
    { id: 1, name: "Auditório Principal" },
    { id: 2, name: "Auditório Lateral" },
    { id: 1, name: "Sala de Workshop" }
  ];

  return stages.map(stage => <Stage stage = {stage}/>);
}

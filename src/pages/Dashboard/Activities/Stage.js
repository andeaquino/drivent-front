export default function Stage({ stage }) {
  const activities = [
    { id: 1, name: "Minecraft", startTime: "09:00", endTime: "10:00" },
    { id: 1, name: "Minecraft", startTime: "10:00", endTime: "11:00" },
    { id: 1, name: "Minecraft", startTime: "13:00", endTime: "15:00" },
  ];
  
  return activities.map(stage => <p>activity</p>);
}

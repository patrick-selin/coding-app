// pages/dashboard.tsx
import { Title, Text } from "@mantine/core";

const Dashboard = () => {
  return (
    <div>
      <Title order={2}>Dashboard h2</Title>
      <Title order={3}>Dashboard h3</Title>
      <Title order={4}>Dashboard h4</Title>
      <h2>Dashboard h2</h2>
      <h3>Dashboard h3</h3>
      <h4>Dashboard h4</h4>
      <Text size="md">Welcome to your Dashboard!</Text>
    </div>
  );
};

export default Dashboard;

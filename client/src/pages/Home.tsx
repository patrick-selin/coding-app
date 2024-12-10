// pages/Home.tsx
import { Title } from "@mantine/core";
import TestItemsList from "../utils/constants/TestItemsList";
function Home() {
  return (
    <div>
      <Title order={1}>Home</Title>
      <TestItemsList />
    </div>
  );
}

export default Home;

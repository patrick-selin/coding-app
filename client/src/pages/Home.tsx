// pages/Home.tsx
import { Title } from "@mantine/core";
import TestItemsList from "../utils/constants/TestItemsList";
function Home() {
  return (
    <div>
      <Title order={1}>Vite + React with T - home</Title>
      <TestItemsList />
    </div>
  );
}

export default Home;

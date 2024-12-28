// pages/home.tsx
import { Title } from "@mantine/core";
import TestItemsList from "../utils/constants/TestItemsList";

// poista tama ku oikeet testit on kirjoitettu
// test
function Home() {
  return (
    <div>
      <Title order={1}>Home</Title>
      <TestItemsList />
    </div>
  );
}

export default Home;
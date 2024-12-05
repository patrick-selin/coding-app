// pages/Challenges.tsx
import { Title, Text } from "@mantine/core";
function Challenges() {
  return (
    <div>
      <Title order={2}>Challenges</Title>
      <Text size="md">List of all challenges:</Text>
      <ul>
        <li>array func</li>
        <li>toUpperCase</li>
        <li>setInterval</li>
      </ul>
    </div>
  );
}

export default Challenges;

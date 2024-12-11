import { Link } from "react-router";
import { useMantineColorScheme, Button, Group } from "@mantine/core";

const Navigation = () => {
  const { setColorScheme } = useMantineColorScheme();
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/challenges">Challenges</Link>
          </li>
        </ul>
      </nav>

      <div>
        <Group>
          <Button onClick={() => setColorScheme("light")}>Light</Button>
          <Button onClick={() => setColorScheme("dark")}>Dark</Button>
          <Button onClick={() => setColorScheme("auto")}>Auto</Button>
        </Group>
      </div>
      <hr />
    </div>
  );
};

export default Navigation;

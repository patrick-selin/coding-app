import { Link } from "react-router-dom";

const Navigation = () => {
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

      <hr />
    </div>
  );
};

export default Navigation;

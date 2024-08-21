import "./App.css";
import TestComponent from "./utils/test-component";
import testService from "./services/test-service";
import { useEffect, useState } from "react";

function App() {
  const [testData, setTestData] = useState([]);

  useEffect(() => {
    testService.getAll().then((testItems) => {
      setTestData(testItems);
    });
  }, []);

  return (
    <>
      <h1>Vite + React with TS</h1>
      <p>app</p>
      <TestComponent />
      <div>
        <h2>TestData</h2>
        <ul>
          {testData.map((item) => (
            <li key={item.id}>
              <h3>{item.content}</h3>
              <p>{item.important ? "Important" : "Not Important"}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;

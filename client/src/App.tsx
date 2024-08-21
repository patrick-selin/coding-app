import "./App.css";
import TestComponent from "./utils/test-component";
import testService from "./services/test-service";
import { useEffect, useState } from "react";

function App() {
  const [testData, setTestData] = useState([]);
  console.log("Hello from the APP");

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
        <ul></ul>
      </div>
    </>
  );
}

export default App;

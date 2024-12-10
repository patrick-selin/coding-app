import TestComponent from "../test-component";
import testService from "../../services/test-service";
import { useEffect, useState } from "react";

interface TestItem {
  id: number;
  content: string;
  important: boolean;
}
function TestItemsList() {
  const [testData, setTestData] = useState<TestItem[]>([]);

  useEffect(() => {
    testService.getAll().then((testItems) => {
      console.log("Fetched data:", testItems);
      setTestData(testItems);
    });
  }, []);

  return (
    <>
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

export default TestItemsList;

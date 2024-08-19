import React, { useState } from "react";

const TestComponent: React.FC = () => {
  const [randomNumber, setRandomNumber] = useState<number | null>(null);

  const generateRandomNumber = (): number => {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(randomNum);
    return randomNum;
  };

  return (
    <>
      <br />
      <br />
      <div>Test Component</div>
      <button onClick={generateRandomNumber}>Generate Random Number</button>
      {randomNumber !== null && <div>Random Number: {randomNumber}</div>}
    </>
  );
};

export default TestComponent;

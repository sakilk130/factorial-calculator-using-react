import React, { useState } from 'react';

export default function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(0);

  const submitHandler = (e) => {
    e.preventDefault();
    setResult(factorialCalculation(input));
  };

  const factorialCalculation = (number) => {
    if (number === 0 || number === 1) {
      return 1;
    } else {
      return number * factorialCalculation(number - 1);
    }
  };

  return (
    <div className="app">
      <h1>Factorial Calculator</h1>
      <form onSubmit={submitHandler}>
        <input
          type="number"
          placeholder="Enter a number..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <br />
        <button type="submit">Calculate Factorial</button>
      </form>
      <h2>Factorial: {result}</h2>
    </div>
  );
}

import { useState } from 'react';

export default function App() {
  const [advice, setAdvice] = useState('')

  async function fetchAdvice () {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    const { advice } = data.slip;

    setAdvice(advice);
  }

  return <div>
    <h1>First React App 2026 | Random Advice</h1>
    <h2>Advice: {advice}</h2>
    <button onClick={fetchAdvice}>Get advice</button>
  </div>
}

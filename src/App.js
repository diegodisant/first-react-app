import { useEffect, useState } from 'react';

export default function App() {
  const [advice, setAdvice] = useState('');
  const [readCount, setReadCount] = useState(0);

  async function fetchAdvice () {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    const { advice } = data.slip;

    setReadCount((count) => count + 1);

    setAdvice(advice);
  }

  useEffect(function () {
    fetchAdvice();
  }, []);

  return (
    <div>
      <h1>First React App 2026 | Random Advice</h1>
      <h2>Advice: {advice}</h2>
      <Message readCount={readCount}/>
      <button onClick={fetchAdvice}>Get advice</button>
    </div>
  );
}

function Message(props) {
  return (
    <p>
        You have read <strong>{props.readCount}</strong> advices
    </p>
  );
}

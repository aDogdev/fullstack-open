import { useState } from "react";

function Button({ text, handleClick }) {
  return <button onClick={handleClick}>{text}</button>;
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  const handleGoodClick = () => {
    const newGood = good + 1;
    setGood(newGood);
    setTotal(newGood + neutral + bad);
  };

  const handleNeutralClick = () => {
    const newNeutral = neutral + 1;
    setNeutral(newNeutral);
    setTotal(newNeutral + good + bad);
  };

  const handleBadClick = () => {
    const newBad = bad + 1;
    setBad(newBad);
    setTotal(newBad + good + neutral);
  };

  return (
    <div>
      <h2>give feedback</h2>
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />
      <h2>statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {total}</p>
      <p>average {(good - bad) / total}</p>
      <p>positive {(good * 100) / total}%</p>
    </div>
  );
};

export default App;

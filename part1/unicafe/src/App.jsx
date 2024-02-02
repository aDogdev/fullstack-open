import { useState } from "react";

function Button({ text, handleClick }) {
  return <button onClick={handleClick}>{text}</button>;
}

function Statistics({ good, neutral, bad, all }) {
  if (all === 0) {
    return <p>No feedback given</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>
            <h2>statistics</h2>
          </th>
        </tr>
      </thead>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={all} />
        <StatisticLine text="average" value={(good - bad) / all} />
        <StatisticLine text="positive" value={(good * 100) / all + "%"} />
      </tbody>
    </table>
  );
}

function StatisticLine({ text, value }) {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
}

function App() {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);

  const handleGoodClick = () => {
    const newGood = good + 1;
    setGood(newGood);
    setAll(newGood + neutral + bad);
  };

  const handleNeutralClick = () => {
    const newNeutral = neutral + 1;
    setNeutral(newNeutral);
    setAll(newNeutral + good + bad);
  };

  const handleBadClick = () => {
    const newBad = bad + 1;
    setBad(newBad);
    setAll(newBad + good + neutral);
  };

  return (
    <div>
      <h2>give feedback</h2>
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} all={all} />
    </div>
  );
}

export default App;

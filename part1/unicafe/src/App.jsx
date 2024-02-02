import { useState } from "react";

function Button({ text, handleClick }) {
  return <button onClick={handleClick}>{text}</button>;
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h2>give feedback</h2>
      <Button
        handleClick={() => {
          setGood(good + 1);
        }}
        text="good"
      />
      <Button
        handleClick={() => {
          setNeutral(neutral + 1);
        }}
        text="neutral"
      />
      <Button
        handleClick={() => {
          setBad(bad + 1);
        }}
        text="bad"
      />
      <h2>statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  );
};

export default App;

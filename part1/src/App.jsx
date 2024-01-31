function Header({ course }) {
  return <h1>{course}</h1>;
}

function Content({ part, exercises }) {
  return (
    <div>
      <Part part={part[0]} exercises={exercises[0]} />
      <Part part={part[1]} exercises={exercises[1]} />
      <Part part={part[2]} exercises={exercises[2]} />
    </div>
  );
}

function Part({ part, exercises }) {
  return (
    <p>
      {part} {exercises}
    </p>
  );
}

function Total({ exercises1, exercises2, exercises3 }) {
  return <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>;
}

function App() {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content
        part={[part1, part2, part3]}
        exercises={[exercises1, exercises2, exercises3]}
      />
      <Total
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
    </div>
  );
}

export default App;

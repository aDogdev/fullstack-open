function Header({ course }) {
  return <h1>{course}</h1>;
}

function Content({ part }) {
  return (
    <div>
      <Part part={part.part1} />
      <Part part={part.part2} />
      <Part part={part.part3} />
    </div>
  );
}

function Part({ part }) {
  return (
    <p>
      {part.name}: {part.exercises}
    </p>
  );
}

function Total({ part }) {
  return (
    <p>
      Number of exercises{" "}
      {part.part1.exercises + part.part2.exercises + part.part3.exercises}
    </p>
  );
}

function App() {
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };

  return (
    <div>
      <Header course={course} />
      <Content part={{ part1, part2, part3 }} />
      <Total part={{ part1, part2, part3 }} />
    </div>
  );
}

export default App;

function Header({ course }) {
  return <h1>{course}</h1>;
}

function Content({ part }) {
  return (
    <div>
      <Part part={part[0]} />
      <Part part={part[1]} />
      <Part part={part[2]} />
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
      Number of exercises:{" "}
      {part[0].exercises + part[1].exercises + part[2].exercises}
    </p>
  );
}

function App() {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  return (
    <div>
      <Header course={course} />
      <Content part={parts} />
      <Total part={parts} />
    </div>
  );
}

export default App;

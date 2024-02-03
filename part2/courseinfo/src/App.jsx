function Header({ course }) {
  return <h1>{course}</h1>;
}

function Total({ sumOfExercises }) {
  return <p>Number of exercises {sumOfExercises}</p>;
}

function Part({ part }) {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
}

function Content({ parts }) {
  return (
    <div>
      {parts.map((part) => {
        return <Part key={part.id} part={part} />;
      })}
    </div>
  );
}

function Course({ course }) {
  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
    </>
  );
}

function App() {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
    ],
  };
  return (
    <div>
      <Course course={course} />
      <Total
        sumOfExercises={
          course.parts[0].exercises +
          course.parts[1].exercises +
          course.parts[2].exercises
        }
      />
    </div>
  );
}

export default App;

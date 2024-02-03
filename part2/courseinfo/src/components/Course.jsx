function Header({ course }) {
  return <h1>{course}</h1>;
}

function Total({ total }) {
  return (
    <p>
      <strong>Number of exercises {total}</strong>
    </p>
  );
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
  const total = course.parts.reduce((acc, el) => {
    return acc + el.exercises;
  }, 0);
  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total total={total} />
    </>
  );
}

export { Course };

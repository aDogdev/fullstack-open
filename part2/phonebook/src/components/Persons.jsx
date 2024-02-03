function Persons({ personsToShow }) {
  return (
    <ul>
      {personsToShow &&
        personsToShow.map((person) => {
          return (
            <li key={person.id}>
              {person.name} {person.number}
            </li>
          );
        })}
    </ul>
  );
}

export { Persons };

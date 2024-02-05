function Persons({ personsToShow, handleDeletePerson }) {
  return (
    <ul>
      {personsToShow &&
        personsToShow.map((person) => {
          return (
            <li key={person.id}>
              {person.name} {person.number}{" "}
              <button
                onClick={() => {
                  handleDeletePerson(person.id);
                }}
              >
                delete
              </button>
            </li>
          );
        })}
    </ul>
  );
}

export { Persons };

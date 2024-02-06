import { useEffect, useState } from "react";
import { Persons } from "./components/Persons";
import { PersonForm } from "./components/PersonForm";
import { Filter } from "./components/Filter";
import { Notification } from "./components/Notification";
import {
  getAll,
  createPerson,
  deletePerson,
  updatePerson,
} from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumber,
      id: (persons.length + 1).toString(),
    };

    const equalName = persons.find((element) => element.name === newName);
    const changedPerson = { ...equalName, number: newNumber };

    if (equalName) {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        updatePerson(equalName.id, changedPerson)
          .then((returnedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id !== newPerson.id ? person : returnedPerson
              )
            );
            setNewName("");
            setNewNumber("");
          })
          .finally(() => {
            setMessage(`Updated ${changedPerson.name}`);
            setTimeout(() => {
              setMessage("");
            }, 2000);
          });
      } else return;
    } else {
      createPerson(newPerson)
        .then((newPerson) => {
          setPersons([...persons, newPerson]);
          setNewName("");
          setNewNumber("");
        })
        .finally(() => {
          setMessage(`Added ${newPerson.name}`);
          setTimeout(() => {
            setMessage("");
          }, 2000);
        });
    }
  };

  const personsToShow = showAll
    ? persons
    : persons.filter((person) =>
        person.name.toLowerCase().includes(filter.toLowerCase())
      );

  const handleChange = (e) => {
    const newFilter = e.target.value;
    setFilter(newFilter);
    newFilter === "" ? setShowAll(true) : setShowAll(false);
  };

  const handleDeletePerson = (id) => {
    if (
      window.confirm(
        `Delete ${persons.find((person) => person.id === id).name}?`
      )
    ) {
      deletePerson(id);
      setPersons(persons.filter((person) => person.id !== id));
    } else return;
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
      <Filter filter={filter} handleChange={handleChange} />
      <h3>Add a new</h3>
      <PersonForm
        handleSubmit={handleSubmit}
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
      />
      <h2>Numbers</h2>
      <Persons
        personsToShow={personsToShow}
        handleDeletePerson={handleDeletePerson}
      />
    </div>
  );
};

export default App;

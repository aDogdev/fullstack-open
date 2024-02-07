import { useState } from "react";
import { Countries } from "./components/Countries";
import { getAllCountries, getCountry } from "./services/countries";
import data from "./mocks/all.json";

function App() {
  const [countries, setCountries] = useState(null);
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newValue = value;

    getAllCountries().then((allCountries) =>
      setCountries(
        allCountries.filter((country) =>
          country.name.common
            .toLowerCase()
            .includes(newValue.toLocaleLowerCase())
        )
      )
    );
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        find countries{" "}
        <input
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button type="submit">Search</button>
      </form>
      {countries && <Countries countries={countries} />}
    </>
  );
}

export default App;

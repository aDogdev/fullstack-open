function Countries({ countries, handleShow }) {
  const { name, capital, area, flags, languages } = countries[0];
  return (
    <>
      {countries.length > 10 ? (
        "Too many matches, specify another filter"
      ) : countries.length <= 10 && countries.length > 1 ? (
        <>
          {Object.entries(countries).map(([key, value]) => {
            return (
              <li key={key}>
                {value.name.common}{" "}
                <button onClick={() => handleShow(value.name.common)}>show</button>
              </li>
            );
          })}
        </>
      ) : (
        <>
          <h1>{name.common}</h1>
          <p>capital {capital}</p>
          <p>area {area}</p>
          <h2>languages:</h2>
          <ul>
            {Object.entries(languages).map(([key, value]) => {
              return <li key={key}>{value}</li>;
            })}
          </ul>
          <img src={flags.png} alt={flags.alt} />
        </>
      )}
    </>
  );
}

export { Countries };

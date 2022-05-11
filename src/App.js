// 1. Please implement the task using a modern framework/ library (e.g., React.js, Angular.js or Vue.js).

// 2. The task.
// Using https://restcountries.com free API make a visualized representation of counties that displays country name, region, and area size. (Use https://restcountries.com/v2/all?fields=name,region,area to get only necessary data).

// Requirements:
// 2.1. Create a repository using GIT and push your work to a remote (e.g., GitHub, Gitlab).
// 2.2. Fetch the data from the endpoint.
// 2.3. Display a list for the data.
// 2.4. Make the list sortable alphabetically by name (ascending, descending).
// 2.5. Implement a filter(s) that filters countries:
//      2.5.1. That are smaller than Lithuania by area.
//      2.5.2. That are in “Oceania” region.

import React, { useState, useEffect } from "react";
import "./App.css";

import Title from "./components/Title";
import List from "./components/List";
import Button from "./components/Button";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v2/all?fields=name,region,area")
      .then((response) => response.json())
      .then((countries) => setCountries(countries))
      .catch((error) => console.log(error));
  }, []);

  const sortAscending = () => {
    const data = [...countries]; // copy array
    data.sort((a, b) => a.name.toUpperCase().localeCompare(b.name.toUpperCase()));
    setCountries(data);
  };

  const sortDescending = () => {
    const data = [...countries]; // copy array
    data.sort((a, b) => b.name.toUpperCase().localeCompare(a.name.toUpperCase()));
    setCountries(data);
  };

  const filterCountries = () => {
    const filterCountries = countries.filter(
      (item) => item.area < 65300 && item.region.includes("Oceania")
    );
    setCountries(filterCountries);
  };

  return (
    <div className="App">
      <Title
        title="REIZ TECH Assignment for the Front-End Developer intern position"
        author="Albertas Rinkevičius"
        email="albertas.rinkevicius@gmail.com"
        mob="+370 686 05132"
      />
      <div className="buttons">
        <div>
          <Button onClick={sortAscending}>Sort Ascending</Button>
          <Button onClick={sortDescending}>Sort Descending</Button>
        </div>
        <div>
          <Button onClick={filterCountries}>Filter Countries</Button>
        </div>
      </div>
      <List items={countries} />
    </div>
  );
}

export default App;

import React from "react";

function List({ items }) {
  return (
    <div>
      <ul>
        {items.map(({ name, region, area }) => {
          return (
            <li key={name}>
              <span>Country Name: <strong>{name}</strong></span>
              <span>Region: {region}</span>
              <span>Area Size: {area}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default List;

import React from "react";

function Title(props) {
  return (
    <>
      <h1>{props.title}</h1>
      <p>
        <span>{props.author}</span>
        {` • `}
        <span>
          <a href={`mailto:${props.email}`}>{props.email}</a>
        </span>
        {` • `}
        <span>{props.mob}</span>
      </p>
    </>
  );
}

export default Title;

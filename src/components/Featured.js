import React from "react";

const Featured = ({ match }) => {
  let name = match.params.name;
  let course = match.params.course;

  return (
    <div className="main-content">
      <h2>{name}</h2>
      <p>
        Introducing <strong>{name}</strong>, a teacher who loves teaching
        courses about <strong>{course}</strong>!
      </p>
    </div>
  );
};

export default Featured;

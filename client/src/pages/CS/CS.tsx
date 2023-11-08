import React from 'react'
import Card from "Components/Card";

const CS = () => {
  return (
    <div>
      {" "}
      <Card
        name="John"
        company="Acme Inc."
        telephone="555-555-5555"
        email="john.doe@example.com"
        year="2023"
      />
      <Card
        name="John"
        company="Acme Inc."
        telephone="555-555-5555"
        email="john.doe@example.com"
        year="2023"
      />{" "}
    </div>
  );
}

export default CS
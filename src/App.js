import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(dateNow);
  const dateNow = new Date().toLocaleTimeString();

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  function getTime() {
    const now = new Date().toLocaleTimeString();
    // setCount(now);
    setInterval(() => {
      setCount(now);
    }, 1000);
  }

  // useState harus berada dalam function, dan function
  //tsb memiliki 2 argument,"valuenya" dan "useState" nya

  const pets = [
    { name: "Meowsalot", species: "cat", age: "5", id: 123456789 },
    { name: "Barksalot", species: "dog", age: "3", id: 987654321 },
    { name: "Fluffy", species: "rabbit", age: "2", id: 123123123 },
    { name: "Purrsloud", species: "cat", age: "1", id: 456456456 },
    { name: "Paws", species: "dog", age: "6", id: 789789789 }
  ];

  function Mypet(props) {
    return (
      <li>
        this {props.nama} is species ${props.species} and age is {props.umur}
      </li>
    );
  }

  return (
    <div>
      <h1>My Favourite Boots</h1>
      <ul>
        {pets.map(x => {
          return (
            <Mypet nama={x.name} species={x.species} umur={x.age} key={x.id} />
          );
        })}
      </ul>
      <h1>{count}</h1>
      <button className="btn" onClick={getTime}>
        Get Time
      </button>
      <button className="btn" onClick={increase}>
        +
      </button>
      <button className="btn" onClick={() => setCount((count = 0))}>
        Reset
      </button>
    </div>
  );
}

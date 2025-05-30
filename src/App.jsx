import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import * as React from "react";

// List of items
const list = [
  {
    title: "React",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

// 1. Refactor App component to arrow function
const App = () => (
  <div>
    <h1>My Hacker Stories</h1>
    <Search />
    <hr />
    <List />
  </div>
);

// 4. Refactor Search to block body (with logic inside)
// 5. Add handler function for the input
const Search = () => {
  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} />
    </div>
  );
};

// 2. Refactor callback in map() to arrow function
// 3. Refactor List to arrow function and concise body
const List = () => (
  <ul>
    {list.map((item) => (
      <li key={item.objectID}>
        <span>
          <a href={item.url}>{item.title}</a>
        </span>{" "}
        <span>{item.author}</span>{" "}
        <span>{item.num_comments}</span>{" "}
        <span>{item.points}</span>
      </li>
    ))}
  </ul>
);

export default App;


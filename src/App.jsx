import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import * as React from "react";

const getStoredSearchTerm = () => {
  return localStorage.getItem('search') || '';
};

const App = () => {
  console.log("App renders");

  const initialStories = [
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

  const [searchTerm, setSearchTerm] = React.useState(getStoredSearchTerm);

  React.useEffect(() => {
    localStorage.setItem("search", searchTerm);
  }, [searchTerm]);

  const stories = initialStories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <h1>My Hacker Stories</h1>

      <Search
        id="search"
        label="Search"
        value={searchTerm}
        onInputChange={handleSearch}
      />

      <hr />
      <List list={stories} />
    </div>
  );
};

const Search = ({ id, label, value, onInputChange }) => {
  console.log("Search renders");

  return (
    <div>
      <label htmlFor={id}>{label} </label>
      <input
        id={id}
        type="text"
        value={value}
        onChange={onInputChange}
      />
    </div>
  );
};

const List = ({ list }) => {
  console.log("List renders");

  return (
    <ul>
      {list.map((item) => (
        <Item key={item.objectID} item={item} />
      ))}
    </ul>
  );
};

const Item = ({ item }) => {
  console.log("Item renders");

  return (
    <li>
      <span>
        <a href={item.url}>{item.title}</a>
      </span>{" "}
      <span>{item.author}</span>{" "}
      <span>{item.num_comments}</span>{" "}
      <span>{item.points}</span>
    </li>
  );
};

export default App;







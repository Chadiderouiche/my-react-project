import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function getTitle(title){
  return title;
} 
const App = () =>{
  const stories = [
  {
    title:"React",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title:"Redux",
    url: "https://reduxjs.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1, 
  },
]

return(
    <div>
      <h1>My hacker stories</h1>
      <search />
      <hr />
      <list list={stories}/>
    </div>
);
 } ;

const Search = () => {
  const [searchTerm,setSearchTerm] = React.useState('');
  const handlechange =(Event)=>{
    setSearchTerm(Event.target.value);
    console.log(Event);
    // value of target (here:input HTML element)
    console.log(Event.target.value);

  };
return(
    <div>     
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onchange={handlechange} />
      <p>
        Searching for  <strong>{searchTerm}</strong>
      </p>

    </div>
);
};
const List = (props) => (
    
      <ul>
        {props.list.map((item) => (
          <item key={item.objectifID} item={item} />

        ))}
      </ul>
);
const item=(props)=>(
 <li>
    <span>
      <a herf={item.url}>{item.title}</a>
    </span>
    <span>{item.author}</span>
    <span>{item.num_comments}</span>
    <span>{item.points}</span>
  </li>
);


export default App;
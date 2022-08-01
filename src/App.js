import React from 'react';
import './App.css';

const App = ()=> {
  const title ="Hello React";
  return (
    <div>
    <h1>{title}</h1>  
    <h2 onClick={() => alert("You clicked the message")}>This is my first react component</h2>
    </div>
    
  );
}

export default App;

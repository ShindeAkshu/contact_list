import React from 'react';
import './App.css';
import Contactcard from './ContactCard';
import { useState} from 'react';
import { useEffect } from 'react';

const App = ()=> {
  /* const contacts = [
    {avtarUrl:"https://via.placeholder.com/150",
    name:"Akshata Shinde",
    email:"fdghjkl@gmail.com",
    age: 19
    },
    {avtarUrl:"https://via.placeholder.com/150",
    name:"Jhon Ken",
    email:"fdghjkl@gmail.com",
    age: 25
    },

    {avtarUrl:"https://via.placeholder.com/150",
    name:"Manish Pol",
    email:"fdghjkl@gmail.com",
    age: 20
    }
   ];*/
   
   const [results , setResults] = useState([]);

   useEffect(() =>{
    fetch("https://randomuser.me/api/?results=5")
   .then(response => response.json()) 
   .then(data => {
    console.log(data)
    setResults(data.results);
   });
  },[])

  return(
    <div>
      {results.map((result,index)=>{
        return(
        <Contactcard key={index}
        avtarUrl= {result.picture.large}
        name={result.first}
        email={result.email}
        age={result.dob.age}/>
        )
      })}
     
    </div>
    
  ) 
}

export default App;



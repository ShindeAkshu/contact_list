import React from 'react';
import './App.css';
import Contactcard from './ContactCard';
import { useState } from 'react';

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
   
   const [contacts , setContacts] = useState([]);
   fetch("https://randomuser.me/api/?results=5")
   .then(response => response.json()) 
   .then(data => console.log(data));

  return(
    <div>
      {contacts.map((contact,index)=>{
        return(
        <Contactcard key={index}
        avtarUrl= {contact.avtarUrl}
        name={contact.name}
        email={contact.email}
        age={contact.age}/>
        )
      })}
     
    </div>
    
  ) 
}

export default App;



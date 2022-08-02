import React from 'react';
import './App.css';
import Contactcard from './ContactCard';

const App = ()=> {
   const contacts = [
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
   ]
  return(
    <div>
      <Contactcard 
      avtarUrl= "https://via.placeholder.com/150"
      name="akshata shinde" 
      email="fdghjkl@gmail.com"
       age={19}/>
      <Contactcard 
      avtarUrl= "https://via.placeholder.com/150"
      name="Manish pol" 
      email="qwefgh@gmail.com"
       age={30}/>
      <Contactcard 
      avtarUrl= "https://via.placeholder.com/150"
      name="Jhon ken" 
      email="zxcvl@gmail.com"
       age={22}/>
        

       
     
      
    </div>
    
  ) 
}

export default App;

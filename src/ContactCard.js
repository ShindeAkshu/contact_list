import React from "react";
import { useState } from "react";
const Contactcard = () => {
    const [showAge,setShowAge] =useState(true);
<div className='contact-card'>
      <img src="https://via.placeholder.com/150" alt='profile'></img>
      <div className='users-details'>
        <p>Name:akshta</p>
        <p>Email:sakshata@gmailcom</p>
        <button>Show Age</button>
        {showAge && <p>Age:25</p> }
      </div>
    
    </div>
}




export default Contactcard;
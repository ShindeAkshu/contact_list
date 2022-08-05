import React from "react";
import { useState } from "react";

const Contactcard = (props) => {

    const [showAge,setShowAge] =useState(false);
<div className='contact-card'>
      <img src={props.avtarUrl} alt='profile'></img>
      <div className='users-details'>
        <p>Name:{props.name}</p>
        <p>Email:{props.email}</p>
        <button onClick={() =>setShowAge(!showAge)}>Show Age</button>
        {showAge && <p>Age:{props.age}</p> }
      </div>
    
    </div>
}

export default Contactcard;
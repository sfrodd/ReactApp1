import React, { useState } from 'react'
import "../index.css"
function  CounterApp(){
   const [counter, setCounter]=useState(0);
   const [myMessage, setMyMessage]=useState(true);
   
   function increment(){
      setCounter(counter+1);
      setMyMessage(!myMessage);
   };

   return (
    <div>
    <h1 style={{color:'blue'}}>{counter}</h1>
    <button id="myBtn" style={{button:'button'}} className="btn-t" onClick={increment}>ClickMe</button>
    <div>
    </div>
    {myMessage && <h1 style={{color:'red'}}> Hello World</h1>}
    </div>
   );

}

export default CounterApp;
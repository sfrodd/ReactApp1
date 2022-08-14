import React, {useReducer } from 'react';

function reducer(state,action){
         switch (action.type){
            case "INC" : return {count:state.count+1, message:state.message}
            
            case "TOG" : return {count:state.count, message:!state.message}

         }

}

export default function CounterR(){

const [state, dispatch] = useReducer(reducer, {count:0, message:true});

function doSomething(){

    dispatch({type:"INC"});
    dispatch({type:'TOG'});

}

return(
<div>
<h1 style={{color:'green'}}>Goodbye World</h1>
<div>
  <h1>{state.count}</h1>
</div>
<button onClick={doSomething}>ClickMe</button>
{state.message && <h2 style={{color:'brown'}}>Greate World</h2>}
</div>
);
}


import React, { Component } from 'react';
import { useState } from 'react';

function AddtoBasket(params){
    let newItem=params;
    const [cartItems, setcartItems]= useState([]);

    function addtoCart(newItem){

         setcartItems(cartItems.push(newItem));

    }
    function showItems(){
       
        for(let item in cartItems)
            console.log(item);

    }
    return(
    <div>
    <button onClick={addtoCart({newItem})}>Clickme to AddItem</button>
    <button onClick={showItems}>Show all ITems</button>
    </div>
    );
}

export default AddtoBasket;
import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const AddItem = () => {
  const [ itemName, setItemName ] = useState('');
  const [ itemDesc, setItemDesc ] = useState('');
  const [ itemLoc, setItemLoc ] = useState('');
  const [ itemExp, setItemExp ] = useState('');
  const [ postId , setPostId ] = useState();

  const navigate = useNavigate();


  const saveItem = (e) => {
    e.preventDefault();
    const item = {itemName:itemName, itemDesc:itemDesc, itemLoc:itemLoc, itemExp:itemExp};
    fetch(`http://localhost:8080/api/items`, {
      method: 'POST',
      headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
      },
      body: JSON.stringify({item})
    }).then((response) => {
      console.log('Json',JSON.stringify(item));
      console.log('Response',response);
      console.log('item',item);
      // navigate('/');
    }).catch(error => console.log(error))
  }


  return(
    <>
      <h1>Add Item</h1>
      <form >
         <label>Item Name: </label>
         <input type='text' name="itemName" value={itemName} placeholder='Enter Name' onChange={(e)=> setItemName(e.target.value)}/>
         <br/>
         <label>Item Desc: </label>
         <input type='text' name="itemDesc" value={itemDesc} placeholder='Enter Description' onChange={(e)=> setItemDesc(e.target.value)}/>
         <br/>
         <label>Item Location: </label>
         <input type='text' name="itemLoc" value={itemLoc} placeholder='Enter Location of Item' onChange={(e)=> setItemLoc(e.target.value)}/>
         <br/>
         <label>Item Expiration Date: </label>
         <input type='date' name="itemExp" value={itemExp} placeholder='Enter Expiration Date' onChange={(e)=> setItemExp(e.target.value)}/>
      </form>
      <button onClick={(e)=>saveItem(e)}>Save</button>
    </>
  )
}

export default AddItem;

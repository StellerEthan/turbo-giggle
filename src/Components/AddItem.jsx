import React, { useState, useEffect } from "react";

const AddItem = () => {
  const [ itemName, setItemName ] = useState('');
  const [ itemDesc, setItemDesc ] = useState('');
  const [ itemLoc, setItemLoc ] = useState('');
  const [ itemExp, setItemExp ] = useState('');
  const [ postId , setPostId ] = useState();

  const saveItem = (e) => {
    e.preventDefault();
    const item = {itemName:itemName, itemDesc:itemDesc, itemLoc:itemLoc, itemExp:itemExp};
    useEffect(() => {
      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(item)
      };
      fetch(`http://localhost:8080/api/items`, requestOptions)
          .then(response => response.json())
          .then(data => setPostId(data.id));
      }, []);
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

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LocMenu from "./LocMenu";

const AddItem = () => {
  const [ itemName, setItemName ] = useState('');
  const [ itemDesc, setItemDesc ] = useState('');
  const [ itemLoc, setItemLoc ] = useState('');
  const [ itemExp, setItemExp ] = useState('');
  const [ locations, setLocations ] = useState('');

  const navigate = useNavigate();

  useEffect(()=>{
    fetch(`http://localhost:8080/api/location`)
      .then(response => response.json())
      .then(response => {;
        setLocations(response)})
      .catch(error => console.error(error))
  }, []);

  const saveItem = (e) => {
    e.preventDefault();
    const item = {itemName:itemName, itemDesc:itemDesc, itemLoc:itemLoc, itemExp:itemExp};
    fetch(`http://localhost:8080/api/items`, {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    }).then((response) => {
      navigate('/');
    }).catch(error => console.log(error))
 }

  const handleLoc = (id) => {
    let loc = locations.find((l) => l.id === parseInt(id))
    setItemLoc(loc);
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
         <select placeholder="Select Location"  onChange={(e)=> handleLoc(e.target.value)} required>
          {locations && <LocMenu locations={locations}/>}
         </select>
         <br/>
         <label>Item Expiration Date: </label>
         <input type='date' name="itemExp" value={itemExp} placeholder='Enter Expiration Date' onChange={(e)=> setItemExp(e.target.value)}/>
      </form>
      <button className="saveBTN" onClick={(e)=>saveItem(e)}>Save</button>
    </>
  )
}

export default AddItem;

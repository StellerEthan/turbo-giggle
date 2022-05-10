import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";


const EditItem = () => {
  const [ itemName, setItemName ] = useState('');
  const [ itemDesc, setItemDesc ] = useState('');
  const [ itemLoc, setItemLoc ] = useState('');
  const [ itemExp, setItemExp ] = useState('');
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(()=>{
    fetch(`http://localhost:8080/api/items/${id}`)
      .then(response => response.json())
      .then(response => {;
        setItemName(response.itemName)
        setItemDesc(response.itemDesc)
        setItemLoc(response.itemLoc)
        setItemExp(response.itemExp)
      })
      .catch(error => console.error(error))
  }, []);
  
  const updateItem = (e) => {
    e.preventDefault();
    const item = {itemName:itemName, itemDesc:itemDesc, itemLoc:itemLoc, itemExp:itemExp};
    fetch(`http://localhost:8080/api/items/${id}`, {
      method: 'PUT',
      headers: {
      'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    }).then((response) => {
      navigate('/');
    }).catch(error => console.log(error))
 }


  const displayEditForm = () => {
    return(
      <>
        <form>
          <label>Item Name: </label>
          <input type='text' name="itemName" value={itemName} onChange={(e)=> setItemName(e.target.value)}/>
          <br />
          <label>Item Desc: </label>
          <input type='text' name="itemDesc" value={itemDesc} onChange={(e)=> setItemDesc(e.target.value)}/>
          <br />
          <label>Item Location: </label>
          <input type='text' name="itemLoc" value={itemLoc} onChange={(e)=> setItemLoc(e.target.value)}/>
          <br />
          <label>Item Expiration Date: </label>
          <input type='date' name="itemExp" value={itemExp.slice(0,10)} onChange={(e)=> setItemExp(e.target.value)}/>
        </form>
        <button onClick={(e)=> updateItem(e)}>Save</button>
      </>
    )
  }

  return(
    <>
      <h1>Edit Page</h1>
      {itemExp && displayEditForm()}
    </>
  )
}

export default EditItem;

import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

const ListItems = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
    fetch(`http://localhost:8080/api/items`)
      .then(response => response.json())
      .then(response => {;
        setItems(response)})
      .catch(error => console.error(error))
  }, []);

  const toEditPage = (id) => {
    navigate("/edit/"+id);
  }

  const displayItems = (items) => {
    return(
      <>
    <h2>Item List</h2>
    <table>
      <thead>
        <tr className="row">
          <th>Item Name</th>
          <th>Item Description</th>
          <th>Item Location</th>
          <th>Item Expiration</th>
          <th>Edit Button</th>
        </tr>
      </thead>
      <tbody>
        {
          items.map(
            item => 
             <tr key={item.id}>
               <td>{item.itemName}</td>
               <td>{item.itemDesc}</td>
               <td>{item.itemLoc.locName}</td>
               <td>{item.itemExp.slice(0,10)}</td>
               <td><button className="editButton" onClick={() => toEditPage(item.id)}>Edit</button></td>
             </tr> 
          )
        }
      </tbody>
    </table>
    </>
    )
  }

  return (
    <>
    {items && displayItems(items)}
    </>
  );
}

export default ListItems;

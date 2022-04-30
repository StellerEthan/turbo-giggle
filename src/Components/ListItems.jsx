import React, {useState, useEffect} from "react";

const ListItems = () => {
  const [items, setItems] = useState([]);

  useEffect(()=>{
    fetch(`http://localhost:8080/api/items`)
      .then(response => response.json())
      .then(response => {;
        setItems(response)})
      .catch(error => console.error(error))
  }, []);

  const displayItems = (items) => {
    return(
      <>
    <h2>Item List</h2>
    <table>
      <thead>
        <tr>
          <th>Item Name</th>
          <th>Item Description</th>
          <th>Item Location</th>
          <th>Item Expiration</th>
        </tr>
      </thead>
      <tbody>
        {
          items.map(
            item => 
             <tr key={item.id}>
               <td>{item.name}</td>
               <td>{item.itemDesc}</td>
               <td>{item.itemLoc}</td>
               <td>{item.itemExp}</td>
             </tr> 
          )
        }
      </tbody>
    </table>
    </>
    )
  }

  console.log(" Before return ",items)

  return (
    <>
    {items && displayItems(items)}
    </>
  );
}

export default ListItems;
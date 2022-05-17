import React, { useEffect, useState } from "react";

const LocMenu = () => {
  const [ locations, setLocations ] = useState('');

  useEffect(()=>{
    fetch(`http://localhost:8080/api/location`)
      .then(response => response.json())
      .then(response => {;
        setLocations(response)})
      .catch(error => console.error(error))
  }, []);

  const displayLocations = () => {
    return locations.map((location) => {
      return(
        <option value={location.id} key={location.id}>
          {location.locName}
        </option>
      )
    })
  }

  return(
    <>
      {locations && displayLocations()}
    </>
  )
}

export default LocMenu;

import React, { useEffect, useState } from "react";

const LocMenu = (props) => {

  const displayLocations = () => {
    return props.locations.map((location) => {
      return(
        <option value={location.id} key={location.id}>
          {location.locName}
        </option>
      )
    })
  }

  return(
    <>
      {displayLocations()}
    </>
  )
}

export default LocMenu;

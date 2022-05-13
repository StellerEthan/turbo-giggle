import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleClick = (target) =>{
    navigate(target);
  };

  return(
    <nav>
      <button className="navButton" onClick={() => {handleClick('/')}}>Home</button>
      <button className="navButton" onClick={() => {handleClick('/addItem')}}>Add Item</button>
      <hr />
    </nav>
  );
};

export default Header;
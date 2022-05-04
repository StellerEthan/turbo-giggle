import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./View/Home.JSX";
import ListItems from "./Components/ListItems";
import AddItem from "./Components/AddItem.jsx";
import Header from "./Components/Header";

const App = () => {
  return(
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ListItems />}/>
        <Route path='/addItem' element={<AddItem />}/>
      </Routes>
    </>
  );
};

export default App;

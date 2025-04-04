import { useState } from "react";
import "./App.css";
import Card from "./components/Card.jsx";

function App() {

  let myObj = {
    name: "Manoj",
    age: 23,
  }
  
  let myArr = [1, 2, 3]

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl">
        Vite + React + Tailwind CSS
      </h1>
      <Card username="Manoj" someObj={myObj} />
      <Card username="Manoj jivanagi" someObj={myArr} />
      <Card someObj={myArr} />
    </>
  );
}

export default App;

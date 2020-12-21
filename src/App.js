import './App.css';
import React, {useState} from "react";
import {Numbers} from "./components/Numbers";

function App() {

  const [persons] = useState([
    {name: "Steve Jobs", number: "123-456-7890"},
    {name: "Steve Wozniak", number: "132-890-5701"},
    {name: "Jonny Ives", number: "890-270-5700"},
  ])
  return (
    <div className="App">
      <Numbers persons={persons} />
    </div>
  );
}

export default App;
